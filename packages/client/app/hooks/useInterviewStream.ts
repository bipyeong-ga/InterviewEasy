import { useEffect, useRef, useState } from "react";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export const useInterviewStream = (config?: any) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isStreaming, setIsStreaming] = useState(false);
    const [caption, setCaption] = useState("면접을 시작하겠습니다.");
    
    const peerConnectionRef = useRef<RTCPeerConnection | null>(null);
    const dataChannelRef = useRef<RTCDataChannel | null>(null);
    const wsRef = useRef<WebSocket | null>(null);
    const faceLandmarkerRef = useRef<FaceLandmarker | null>(null);
    const didInit = useRef(false);

    // AI 서버 마커 주소
    const MARKER_WS_URL = "ws://localhost:8000/ai/ws/markers";
    // Express 서버에서 Ephemeral Token 발급받는 주소
    const TOKEN_URL = "http://localhost:3000/api/interview/realtime-token";

    useEffect(() => {
        if (didInit.current) return;
        didInit.current = true;

        let stream: MediaStream | null = null;
        let animationFrameId: number;
        let audioContext: AudioContext | null = null;

        const initMediaPipe = async () => {
            const vision = await FilesetResolver.forVisionTasks(
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.35/wasm"
            );
            faceLandmarkerRef.current = await FaceLandmarker.createFromOptions(vision, {
                baseOptions: {
                    modelAssetPath: `https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task`,
                    delegate: "GPU"
                },
                outputFaceBlendshapes: false,
                runningMode: "VIDEO",
                numFaces: 1
            });
        };

        const initRealtimeWebRTC = async (audioTrack: MediaStreamTrack) => {
            try {
                // 1. Fetch ephemeral token from backend
                const tokenResponse = await fetch("/api/interview/realtime-token", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                if (!tokenResponse.ok) throw new Error("Failed to fetch realtime token");
                const { token } = await tokenResponse.json();
                const EPHEMERAL_KEY = token;

                // 2. Create WebRTC Connection
                const pc = new RTCPeerConnection();
                peerConnectionRef.current = pc;

                // 3. Setup Web Audio API for local analysis and WebRTC routing
                audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
                const source = audioContext.createMediaStreamSource(new MediaStream([audioTrack]));
                
                // Analyser for local volume detection
                const analyser = audioContext.createAnalyser();
                analyser.fftSize = 256;
                source.connect(analyser);

                // GainNode to mute WebRTC output when AI is speaking
                const gainNode = audioContext.createGain();
                gainNode.gain.value = 1;
                source.connect(gainNode);

                // Destination for WebRTC
                const destination = audioContext.createMediaStreamDestination();
                gainNode.connect(destination);

                // Add the processed track to peer connection instead of the raw track
                const processedTrack = destination.stream.getAudioTracks()[0];
                pc.addTrack(processedTrack);

                // State to track if AI is speaking for volume detection
                let isAiSpeakingLocal = false;
                
                // Volume detection loop
                const dataArray = new Uint8Array(analyser.frequencyBinCount);
                let lastInterruptTime = 0;
                
                const checkVolume = () => {
                    analyser.getByteFrequencyData(dataArray);
                    let sum = 0;
                    for (let i = 0; i < dataArray.length; i++) {
                        sum += dataArray[i];
                    }
                    const average = sum / dataArray.length;
                    
                    // If AI is speaking and volume is loud enough (threshold > 20)
                    // and debounce for 2 seconds to avoid multiple penalties for one interruption
                    if (isAiSpeakingLocal && average > 20) {
                        const now = Date.now();
                        if (now - lastInterruptTime > 2000) {
                            lastInterruptTime = now;
                            if (config?.onInterrupt) {
                                config.onInterrupt();
                            }
                        }
                    }
                    requestAnimationFrame(checkVolume);
                };
                checkVolume();

                // 3. Play AI Audio
                const existingAudio = document.getElementById("ai-audio");
                if (existingAudio) {
                    existingAudio.remove();
                }

                const audioEl = document.createElement("audio");
                audioEl.id = "ai-audio";
                audioEl.autoplay = true;
                // Append to body so it doesn't get garbage collected and plays properly
                document.body.appendChild(audioEl);
                pc.ontrack = e => {
                    audioEl.srcObject = e.streams[0];
                    audioEl.play().catch(err => console.error("Audio play error:", err));
                };

                // 4. Create DataChannel for receiving Realtime API events
                const dc = pc.createDataChannel("oai-events");
                dataChannelRef.current = dc;
                dc.onmessage = (e) => {
                    try {
                        const realtimeEvent = JSON.parse(e.data);
                        if (realtimeEvent.type === "response.audio_transcript.delta") {
                            setCaption((prev) => prev + realtimeEvent.delta);
                        } else if (realtimeEvent.type === "response.audio_transcript.done" || realtimeEvent.type === "response.output_text.done") {
                            console.log("[STT 문장 완료]:", realtimeEvent.transcript || realtimeEvent.text);
                        } else if (realtimeEvent.type === "response.created") {
                            setCaption("");
                            // AI가 말을 시작하면 WebRTC로 가는 마이크 볼륨을 0으로 만듦
                            isAiSpeakingLocal = true;
                            gainNode.gain.value = 0;
                        } else if (realtimeEvent.type === "response.done") {
                            // AI가 말을 마치면 마이크 볼륨 복구
                            isAiSpeakingLocal = false;
                            gainNode.gain.value = 1;
                        } else if (realtimeEvent.type === "response.function_call_arguments.done") {
                            // AI가 평가 도구를 호출함
                            if (realtimeEvent.name === "record_evaluation") {
                                try {
                                    const args = JSON.parse(realtimeEvent.arguments);
                                    if (config?.onEvaluate) {
                                        config.onEvaluate({
                                            score: args.score,
                                            feedback: args.feedback
                                        });
                                    }
                                    
                                    // 도구 호출에 대한 응답(성공)을 AI에게 전송
                                    dc.send(JSON.stringify({
                                        type: "conversation.item.create",
                                        item: {
                                            type: "function_call_output",
                                            call_id: realtimeEvent.call_id,
                                            output: JSON.stringify({ success: true })
                                        }
                                    }));
                                    
                                    // AI가 이어서 다음 말을 하도록 응답 생성 트리거
                                    dc.send(JSON.stringify({
                                        type: "response.create"
                                    }));
                                } catch (err) {
                                    console.error("Failed to parse evaluation args:", err);
                                }
                            }
                        }
                    } catch (err) {
                        console.error("Failed to parse realtime event:", err);
                    }
                };

                // Build AI Instructions based on User Config
                let customInstructions = "당신은 IT 회사의 전문적이고 꼼꼼한 기술 면접관입니다. 사용자는 면접 지원자입니다. 먼저 가볍게 인사를 건네고, 직무와 관련된 기술적인 질문을 하나씩 던지세요. 지원자의 답변을 들은 뒤에는 그에 대한 짧은 피드백이나 예리한 꼬리 질문을 이어가세요. 한 번에 너무 많은 질문을 하지 말고 대화하듯 하나씩 진행하세요. 한국어로 자연스럽고 전문적인 톤으로 말하세요.";
                if (config) {
                    const jobText = config.selectedJobs ? config.selectedJobs.join(", ") + (config.customJob ? `, ${config.customJob}` : "") : "";
                    const resumeContext = config.resumeContent ? `\n[지원자 이력서/자소서 정보]\n${config.resumeContent.substring(0, 3000)}` : "\n[지원자 이력서/자소서 정보]\n입력된 정보가 없습니다. 일반적인 직무 질문을 진행하세요.";
                    const companyContext = config.targetCompany ? `지원 기업: '${config.targetCompany}'` : "";
                    const styleContext = config.interviewType === "tech" ? "이력서에 적힌 기술 스택과 프로젝트 경험의 기술적 깊이를 매우 깊게 파고드는 질문 위주로 진행하세요." : config.interviewType === "personality" ? "이력서에 나타난 경험을 바탕으로 인성, 문제 해결 과정, 협업 능력 위주로 질문하세요." : "직무 역량과 인성 모두 균형있게 질문하세요.";
                    const questionCount = config.questionCount || 5;
                    
                    customInstructions = `당신은 실제 기업의 전문적이고 꼼꼼한 면접관입니다.
[면접 설정]
지원 직무: ${jobText || 'IT 관련 직무'}
${companyContext}
면접 스타일: ${styleContext}
목표 질문 개수: 약 ${questionCount}개
${resumeContext}

[행동 지침]
1. 먼저 지원자에게 기업/직무에 맞게 단정한 어조로 반갑게 인사하며 면접을 시작하세요.
2. 반드시 위에 제공된 [지원자 이력서/자소서 정보]를 면밀히 분석하여, 지원자의 실제 경험과 관련된 맞춤형 질문을 던지세요. (이력서 내용이 없다면 일반적인 직무 질문 진행)
3. 지원자의 답변을 들은 뒤, 그 답변의 논리성이나 기술적 깊이를 검증하는 예리한 꼬리 질문을 이어가세요.
4. 한 번에 여러 질문을 하지 말고, 실제 사람과 대화하듯 자연스럽게 하나씩 질문하세요.
5. 면접과 무관한 잡담, 헛소리, 배경 소음 등은 철저히 무시하고 오직 면접 질문과 평가에만 집중하세요. 지원자가 장난을 치더라도 진지하게 면접으로 화제를 돌리세요.
6. 절대 AI 어시스턴트처럼 굴지 말고, 실제 면접관처럼 행동하세요. 말투는 매우 전문적이고 단호하면서도 격식을 차린 한국어 존댓말('~습니다', '~합니까?')을 사용하세요. 친한 척하거나 과도하게 친절하게 대하지 마세요.
7. 지원자가 답변을 마치면 이어지는 음성 대답을 하기 직전에, 반드시 \`record_evaluation\` 도구를 호출하여 방금 지원자가 한 답변에 대한 10점 만점 점수와 1~2줄짜리 짧은 피드백(부족한 점 등)을 기록하세요. 첫 인사 후에는 평가할 내용이 없으니 호출하지 마세요.`;
                }

                // 5. Create Offer
                const offer = await pc.createOffer();
                await pc.setLocalDescription(offer);

                // 6. Send Offer to OpenAI Realtime API directly
                const baseUrl = "https://api.openai.com/v1/realtime/calls?model=gpt-realtime-2";
                const sdpResponse = await fetch(baseUrl, {
                    method: "POST",
                    body: offer.sdp,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/sdp"
                    },
                });

                if (!sdpResponse.ok) {
                    const errText = await sdpResponse.text();
                    console.error("OpenAI WebRTC 400 Error Body:", errText);
                    throw new Error(`OpenAI WebRTC Connection failed: ${sdpResponse.statusText} - ${errText}`);
                }

                // 7. Receive Answer and connect
                const answer: RTCSessionDescriptionInit = {
                    type: "answer",
                    sdp: await sdpResponse.text(),
                };
                await pc.setRemoteDescription(answer);

                console.log("OpenAI Realtime API Connected Successfully!");

                // Request initial session update if needed to configure the model
                dc.onopen = () => {
                    const sessionUpdate = {
                        type: "session.update",
                        session: {
                            instructions: customInstructions,
                            turn_detection: {
                                type: "server_vad"
                            },
                            input_audio_transcription: {
                                model: "whisper-1" // Realtime API uses "whisper-1" for its transcription endpoint
                            },
                            tools: [
                                {
                                    type: "function",
                                    name: "record_evaluation",
                                    description: "Evaluate the user's previous answer. You MUST call this tool after hearing the user's answer and BEFORE asking the next question. Do not call this when making the initial greeting.",
                                    parameters: {
                                        type: "object",
                                        properties: {
                                            score: { type: "number", description: "Score for the user's answer from 0 to 10" },
                                            feedback: { type: "string", description: "Shortcomings, strengths, and feedback for the answer in Korean (max 2 sentences)" }
                                        },
                                        required: ["score", "feedback"]
                                    }
                                }
                            ],
                            tool_choice: "auto"
                        }
                    };
                    dc.send(JSON.stringify(sessionUpdate));
                    
                    // Trigger the AI to speak first
                    setTimeout(() => {
                        // AI가 지침을 무시하는 현상을 막기 위해 강제로 첫 사용자 메시지 주입
                        dc.send(JSON.stringify({
                            type: "conversation.item.create",
                            item: {
                                type: "message",
                                role: "user",
                                content: [
                                    {
                                        type: "input_text",
                                        text: "안녕하세요. 방금 전달받은 제 이력서와 면접 설정(압박, 말투 등)을 엄격하게 적용해서, 면접관으로서 첫 인사와 함께 첫 번째 질문을 던져주세요."
                                    }
                                ]
                            }
                        }));

                        dc.send(JSON.stringify({
                            type: "response.create",
                            response: {
                                modalities: ["audio", "text"],
                                instructions: "반드시 위 사용자의 요청에 따라 면접관 페르소나를 완벽히 유지하며 대답하세요."
                            }
                        }));
                    }, 500); // 0.5초 대기 후 면접관 발화 시작

                    // Start with a clean caption
                    setCaption("면접관이 곧 인사를 건넬 예정입니다...");
                };

            } catch (err) {
                console.error("OpenAI Realtime WebRTC Setup Error:", err);
            }
        };

        const initWebSockets = () => {
            // 마커 전송용 웹소켓 연결
            wsRef.current = new WebSocket(MARKER_WS_URL);
            wsRef.current.onopen = () => console.log("Markers WebSocket Connected");
            wsRef.current.onerror = (e) => console.error("Markers WS Error", e);
        };

        const startStream = async () => {
            try {
                // 1. MediaPipe 모델 로드
                await initMediaPipe();

                // 2. 사용자의 마이크/카메라 권한 요청 및 스트림 획득
                stream = await navigator.mediaDevices.getUserMedia({
                    video: { width: 640, height: 480 },
                    audio: {
                        echoCancellation: true,
                        noiseSuppression: true,
                        autoGainControl: true
                    }
                });

                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.onloadedmetadata = () => {
                        videoRef.current?.play();
                        setIsStreaming(true);
                    };
                }

                // 3. 오디오 트랙 WebRTC 송출 (OpenAI 다이렉트)
                const audioTrack = stream.getAudioTracks()[0];
                if (audioTrack) {
                    await initRealtimeWebRTC(audioTrack);
                }

                // 4. WebSocket (마커 전송용) 연결
                initWebSockets();

                // 5. MediaPipe Face Landmark 추출 루프 실행
                let lastVideoTime = -1;
                const detectFaces = () => {
                    if (videoRef.current && faceLandmarkerRef.current && videoRef.current.readyState >= 2) {
                        const startTimeMs = performance.now();
                        if (lastVideoTime !== videoRef.current.currentTime) {
                            lastVideoTime = videoRef.current.currentTime;
                            
                            // 비디오 프레임 분석
                            const results = faceLandmarkerRef.current.detectForVideo(videoRef.current, startTimeMs);
                            
                            // 서버로 얼굴 마커 전송
                            if (results.faceLandmarks && results.faceLandmarks.length > 0) {
                                if (wsRef.current?.readyState === WebSocket.OPEN) {
                                    wsRef.current.send(JSON.stringify({
                                        type: "landmarks",
                                        data: results.faceLandmarks[0]
                                    }));
                                }
                            }
                        }
                    }
                    animationFrameId = requestAnimationFrame(detectFaces);
                };
                detectFaces();

            } catch (error) {
                console.error("MediaStream or WebRTC Initialization failed:", error);
            }
        };

        startStream();

        return () => {
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (peerConnectionRef.current) {
                peerConnectionRef.current.close();
            }
            if (wsRef.current) {
                wsRef.current.close();
            }
            if (audioContext) {
                audioContext.close();
            }
            const existingAudio = document.getElementById("ai-audio");
            if (existingAudio) {
                existingAudio.remove();
            }
        };
    }, []);

    return {
        videoRef,
        isStreaming,
        caption
    };
};
