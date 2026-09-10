import React, { useState, useEffect, useRef, useCallback } from "react"
import { useNavigate } from "react-router"
import {
    Box,
    Flex,
    Text,
    Button,
    VStack,
    HStack,
    Badge,
    Spinner,
    Progress,
    Card,
    Accordion,
    Separator,
    Center,
} from "@chakra-ui/react"
import { motion, AnimatePresence } from "motion/react"
import {
    Camera,
    Mic,
    CheckCircle2,
    AlertCircle,
    RotateCcw,
    Play,
    Check,
    Award,
    TrendingUp,
    AlertTriangle,
    Home,
    Sparkles,
    Volume2,
    Clock,
} from "lucide-react"
import { toaster } from "../ui/toaster"

interface Question {
    id: number
    text: string
    category?: string
    isReadded?: boolean
}

interface EvaluationResult {
    questionId: number
    questionText: string
    answerText: string
    score?: number
    feedback?: string
    strength?: string
    improvement?: string
    sampleAnswer?: string
    status: "SUCCESS" | "FAILED"
}

interface ReportData {
    overallScore: number
    overallFeedback: string
    strengths: string[]
    improvements: string[]
    questionEvaluations: EvaluationResult[]
}

interface InterviewTemplateProps {
    mode: "EASY" | "HARD"
    config?: {
        selectedJobs?: string[]
        targetCompany?: string
        interviewType?: string
        questionCount?: number
        selectedResumeData?: {
            title?: string
            content?: string
        }
        resumes?: any[]
    }
}

type InterviewStage =
    | "ONBOARDING"
    | "ONBOARDING_ERROR"
    | "CAMERA_PREVIEW"
    | "INTERVIEW_ACTIVE"
    | "PROCESSING"
    | "REPORT_ERROR"
    | "REPORT"

type ActiveSubStage = "THINKING" | "ANSWERING"

const THINKING_TIME_LIMIT = 5
const ANSWER_TIME_LIMIT = 60

const InterviewTemplate: React.FC<InterviewTemplateProps> = ({
    mode,
    config,
}) => {
    const navigate = useNavigate()

    // 메인 상태 머신
    const [stage, setStage] = useState<InterviewStage>("ONBOARDING")
    const [subStage, setSubStage] = useState<ActiveSubStage>("THINKING")

    // 질문 및 진행 상태
    const [questions, setQuestions] = useState<Question[]>([])
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [countdown, setCountdown] = useState<number>(THINKING_TIME_LIMIT)
    const [totalSeconds, setTotalSeconds] = useState<number>(0)

    // 백그라운드 평가 및 리포트 데이터
    const [evaluations, setEvaluations] = useState<
        Record<number, EvaluationResult>
    >({})
    const [activeBackgroundTasks, setActiveBackgroundTasks] =
        useState<number>(0)
    const [reportData, setReportData] = useState<ReportData | null>(null)
    const [reportErrorMessage, setReportErrorMessage] = useState<string>("")
    const [onboardingErrorMessage, setOnboardingErrorMessage] =
        useState<string>("")

    // 미디어 스트림 및 녹화 참조
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const mediaStreamRef = useRef<MediaStream | null>(null)
    const mediaRecorderRef = useRef<MediaRecorder | null>(null)
    const recordedChunksRef = useRef<Blob[]>([])
    const audioContextRef = useRef<AudioContext | null>(null)
    const processedAudioStreamRef = useRef<MediaStream | null>(null)
    const analyserRef = useRef<AnalyserNode | null>(null)
    const speechDetectedRef = useRef<boolean>(false)
    const vadAnimationRef = useRef<number | null>(null)

    // 마지막 일괄 Whisper 처리를 위한 오디오 큐
    const recordedAnswersRef = useRef<
        { question: Question; audioBlob: Blob; hasSpeech: boolean }[]
    >([])
    const [batchProgress, setBatchProgress] = useState<{
        current: number
        total: number
    }>({ current: 0, total: 0 })
    const isBatchProcessingRef = useRef<boolean>(false)

    // 1. 질문 생성 API 호출 (온보딩 단계)
    const fetchQuestions = useCallback(async () => {
        setStage("ONBOARDING")
        setOnboardingErrorMessage("")

        try {
            const resumeContent = config?.selectedResumeData?.content || ""
            const response = await fetch("/api/interview/questions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    jobs: config?.selectedJobs || ["소프트웨어 엔지니어"],
                    company: config?.targetCompany || "목표 기업",
                    interviewType: config?.interviewType || "종합 면접",
                    resumeText: resumeContent,
                    count: config?.questionCount || 5,
                }),
            })

            const data = await response.json()
            if (
                !response.ok ||
                !data.success ||
                !data.questions ||
                data.questions.length === 0
            ) {
                throw new Error(data.error || "면접 질문 생성 실패")
            }

            setQuestions(data.questions)
            setCurrentIndex(0)

            // 카메라 설정으로 이동
            setStage("CAMERA_PREVIEW")
        } catch (error: any) {
            console.error("질문 생성 실패:", error)
            setOnboardingErrorMessage(
                error.message || "질문 생성 중 오류가 발생했습니다.",
            )
            setStage("ONBOARDING_ERROR")
        }
    }, [config])

    useEffect(() => {
        fetchQuestions()
    }, [fetchQuestions])

    // 2. 카메라 & 마이크 스트림 연결 및 Web Audio DSP 잡음 제거 체인 구축
    const startCamera = async () => {
        try {
            // 하드웨어 DSP 잡음 제거 활성화
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: { ideal: 1280 }, height: { ideal: 720 } },
                audio: {
                    echoCancellation: true,
                    noiseSuppression: true,
                    autoGainControl: true,
                    sampleRate: 16000,
                },
            })
            mediaStreamRef.current = stream
            if (videoRef.current) {
                videoRef.current.srcObject = stream
                videoRef.current.play().catch(console.error)
            }

            // Web Audio API DSP 필터 체인 (Krisp형 잡음 제거 & 음성 선명화)
            try {
                const AudioCtx =
                    window.AudioContext || (window as any).webkitAudioContext
                const audioCtx = new AudioCtx()
                audioContextRef.current = audioCtx

                const audioTrack = stream.getAudioTracks()[0]
                if (audioTrack) {
                    const source = audioCtx.createMediaStreamSource(
                        new MediaStream([audioTrack]),
                    )

                    // 1) High-pass Filter (85Hz 이하 웅웅거림, 진동 소음 차단)
                    const highPass = audioCtx.createBiquadFilter()
                    highPass.type = "highpass"
                    highPass.frequency.value = 85

                    // 2) Low-pass Filter (4000Hz 이상 치찰음/고주파 팬 소음 차단)
                    const lowPass = audioCtx.createBiquadFilter()
                    lowPass.type = "lowpass"
                    lowPass.frequency.value = 4000

                    // 3) Dynamics Compressor (배경 잡음 억제 및 사람 목소리 선명화)
                    const compressor = audioCtx.createDynamicsCompressor()
                    compressor.threshold.value = -35
                    compressor.knee.value = 30
                    compressor.ratio.value = 8
                    compressor.attack.value = 0.003
                    compressor.release.value = 0.25

                    // 4) AnalyserNode (실시간 VAD 음성 활동 감지)
                    const analyser = audioCtx.createAnalyser()
                    analyser.fftSize = 512
                    analyserRef.current = analyser

                    // 5) Destination Node
                    const destination = audioCtx.createMediaStreamDestination()

                    source.connect(highPass)
                    highPass.connect(lowPass)
                    lowPass.connect(compressor)
                    compressor.connect(destination)
                    compressor.connect(analyser)

                    processedAudioStreamRef.current = destination.stream
                }
            } catch (audioErr) {
                console.warn(
                    "Web Audio DSP 초기화 실패 (기본 스트림 사용):",
                    audioErr,
                )
                processedAudioStreamRef.current = stream
            }

            setStage("INTERVIEW_ACTIVE")
            setSubStage("THINKING")
            setCountdown(THINKING_TIME_LIMIT)
        } catch (err) {
            console.error("카메라 접근 실패:", err)
            toaster.create({
                title: "카메라/마이크 접근 권한 필요",
                description:
                    "원활한 면접 진행을 위해 카메라와 마이크 권한을 허용해주세요.",
                type: "error",
            })
        }
    }

    // 스트림 정리
    useEffect(() => {
        return () => {
            if (vadAnimationRef.current) {
                cancelAnimationFrame(vadAnimationRef.current)
            }
            if (audioContextRef.current) {
                audioContextRef.current.close().catch(console.error)
            }
            if (mediaStreamRef.current) {
                mediaStreamRef.current.getTracks().forEach((t) => t.stop())
            }
        }
    }, [])

    // 전체 진행 시간 타이머
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (stage === "INTERVIEW_ACTIVE") {
            interval = setInterval(() => {
                setTotalSeconds((prev) => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [stage])

    // 잡음 제거된 오디오 녹음 및 실시간 VAD 시작
    const startRecording = useCallback(() => {
        if (!mediaStreamRef.current) return

        // 이전 녹음기 및 VAD 애니메이션 정리
        if (vadAnimationRef.current) {
            cancelAnimationFrame(vadAnimationRef.current)
        }
        if (
            mediaRecorderRef.current &&
            mediaRecorderRef.current.state !== "inactive"
        ) {
            try {
                mediaRecorderRef.current.stop()
            } catch (e) {
                // 무시
            }
        }

        speechDetectedRef.current = false

        // 실시간 VAD (음성 활동 감지)
        const checkSpeechActivity = () => {
            const analyser = analyserRef.current
            if (analyser) {
                const dataArray = new Uint8Array(analyser.frequencyBinCount)
                analyser.getByteFrequencyData(dataArray)

                let sum = 0
                const startIndex = 2
                const endIndex = Math.min(dataArray.length, 60)
                for (let i = startIndex; i < endIndex; i++) {
                    sum += dataArray[i]
                }
                const average = sum / (endIndex - startIndex)

                if (average > 15) {
                    speechDetectedRef.current = true
                }
            }
            vadAnimationRef.current = requestAnimationFrame(checkSpeechActivity)
        }
        vadAnimationRef.current = requestAnimationFrame(checkSpeechActivity)

        try {
            // DSP 필터가 적용된 오디오 스트림 사용
            const audioStream =
                processedAudioStreamRef.current || mediaStreamRef.current

            const mimeTypes = [
                "audio/webm;codecs=opus",
                "audio/webm",
                "audio/mp4",
                "audio/ogg;codecs=opus",
            ]
            const selectedMime =
                mimeTypes.find((m) => MediaRecorder.isTypeSupported(m)) || ""

            const recorder = selectedMime
                ? new MediaRecorder(audioStream, { mimeType: selectedMime })
                : new MediaRecorder(audioStream)

            const chunks: Blob[] = []
            recorder.ondataavailable = (e) => {
                if (e.data && e.data.size > 0) {
                    chunks.push(e.data)
                }
            }

            // 로컬 chunks를 ref에 저장
            recordedChunksRef.current = chunks
            mediaRecorderRef.current = recorder
            recorder.start(500)
        } catch (e) {
            console.error("녹음 시작 실패:", e)
        }
    }, [])

    // 녹음 중지 및 오디오 Blob 반환 함수
    const stopRecording = useCallback((): Promise<Blob | null> => {
        return new Promise((resolve) => {
            if (vadAnimationRef.current) {
                cancelAnimationFrame(vadAnimationRef.current)
            }
            const recorder = mediaRecorderRef.current
            if (!recorder || recorder.state === "inactive") {
                if (recordedChunksRef.current.length > 0) {
                    const mime = recorder?.mimeType || "audio/webm"
                    resolve(new Blob(recordedChunksRef.current, { type: mime }))
                } else {
                    resolve(null)
                }
                return
            }

            recorder.onstop = () => {
                const mime = recorder.mimeType || "audio/webm"
                const blob = new Blob(recordedChunksRef.current, { type: mime })
                resolve(blob)
            }

            recorder.stop()
        })
    }, [])

    // 답변 완료 및 다음 단계 처리 (오디오 큐에 보관 후 즉시 다음 질문)
    const handleFinishAnswer = useCallback(async () => {
        const currentQ = questions[currentIndex]
        if (!currentQ) return

        // 1. 녹음 중지 및 오디오 블롭 획득
        const audioBlob = await stopRecording()
        const hasSpeech = speechDetectedRef.current && !!audioBlob && audioBlob.size > 1500

        // 2. 일괄 처리를 위한 오디오 큐에 보관
        recordedAnswersRef.current.push({
            question: currentQ,
            audioBlob: audioBlob || new Blob([], { type: "audio/webm" }),
            hasSpeech,
        })

        // 3. 다음 질문 확인
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex((prev) => prev + 1)
            setSubStage("THINKING")
            setCountdown(THINKING_TIME_LIMIT)
        } else {
            // 모든 질문 완료 -> 마지막 일괄 처리 단계로 이동
            setStage("PROCESSING")
        }
    }, [currentIndex, questions, stopRecording])

    // 생각 시간 및 답변 시간 카운트다운 루프
    useEffect(() => {
        if (stage !== "INTERVIEW_ACTIVE") return

        const timer = setInterval(() => {
            setCountdown((prev) => Math.max(0, prev - 1))
        }, 1000)

        return () => clearInterval(timer)
    }, [stage])

    // 카운트다운 0 도달 시 단계 전환
    useEffect(() => {
        if (stage !== "INTERVIEW_ACTIVE") return

        if (countdown === 0) {
            if (subStage === "THINKING") {
                // 생각 시간 종료 -> 답변 시간 시작
                setSubStage("ANSWERING")
                setCountdown(ANSWER_TIME_LIMIT)
                startRecording()
            } else if (subStage === "ANSWERING") {
                // 답변 시간 종료 -> 다음 질문
                handleFinishAnswer()
            }
        }
    }, [stage, countdown, subStage, startRecording, handleFinishAnswer])

    // 바로 답변 시작하기 (생각 시간 건너뛰기)
    const handleSkipThinking = () => {
        setSubStage("ANSWERING")
        setCountdown(ANSWER_TIME_LIMIT)
        startRecording()
    }

    // 4. 마지막 일괄 처리 (PROCESSING 단계) - 모든 답변을 순차적으로 Whisper STT + 채점 후 리포트 생성
    const processAllAnswersInBatch = useCallback(async () => {
        if (isBatchProcessingRef.current) return
        isBatchProcessingRef.current = true

        const items = recordedAnswersRef.current
        const total = items.length || questions.length
        setBatchProgress({ current: 0, total })

        const evaluationsMap: Record<number, EvaluationResult> = {}

        let completedCount = 0

        await Promise.all(
            items.map(async (item) => {
                const qId = item.question.id

                // 발화가 없었던 무음 질문은 API 호출 없이 즉시 0점 등록
                if (!item.hasSpeech || item.audioBlob.size < 1500) {
                    evaluationsMap[qId] = {
                        questionId: qId,
                        questionText: item.question.text,
                        answerText: "(답변 없음)",
                        score: 0,
                        feedback:
                            "답변이 제출되지 않았거나 음성이 감지되지 않아 0점으로 평가되었습니다.",
                        strength: "-",
                        improvement:
                            "질문을 확인하고 자신의 생각과 경험을 명확한 목소리로 답변해주세요.",
                        sampleAnswer:
                            "질문의 의도에 맞게 관련 기술 및 프로젝트 경험을 구체적으로 설명하는 것이 좋습니다.",
                        status: "SUCCESS",
                    }
                } else {
                    try {
                        const formData = new FormData()
                        const extension = item.audioBlob.type.includes("mp4")
                            ? "mp4"
                            : "webm"
                        formData.append(
                            "audio",
                            item.audioBlob,
                            `q_${qId}.${extension}`,
                        )
                        formData.append("questionText", item.question.text)
                        formData.append(
                            "job",
                            config?.selectedJobs?.join(", ") || "",
                        )

                        const response = await fetch(
                            "/api/interview/evaluate-chunk",
                            {
                                method: "POST",
                                body: formData,
                            },
                        )

                        const result = await response.json()
                        if (response.ok && result.success) {
                            evaluationsMap[qId] = {
                                questionId: qId,
                                questionText: item.question.text,
                                answerText: result.answerText || "(답변 없음)",
                                score: result.score ?? 0,
                                feedback: result.feedback || "",
                                strength: result.strength || "",
                                improvement: result.improvement || "",
                                sampleAnswer: result.sampleAnswer || "",
                                status: "SUCCESS",
                            }
                        } else {
                            throw new Error(result.error || "채점 실패")
                        }
                    } catch (err) {
                        console.warn(`[Batch Question ${qId}] 채점 실패:`, err)
                        evaluationsMap[qId] = {
                            questionId: qId,
                            questionText: item.question.text,
                            answerText: "(처리 실패)",
                            score: 0,
                            feedback: "음성 인식 또는 채점 처리에 실패하였습니다.",
                            status: "FAILED",
                        }
                    }
                }

                completedCount++
                setBatchProgress({ current: completedCount, total })
                setEvaluations({ ...evaluationsMap })
            }),
        )

        // 모든 답변 처리 완료 -> 종합 리포트 생성
        try {
            const results = Object.values(evaluationsMap)
            const response = await fetch("/api/interview/report", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    job:
                        config?.selectedJobs?.join(", ") ||
                        "소프트웨어 엔지니어",
                    company: config?.targetCompany || "목표 기업",
                    results: results,
                }),
            })

            const data = await response.json()
            if (!response.ok || !data.success || !data.report) {
                throw new Error(data.error || "종합 리포트 생성 실패")
            }

            setReportData(data.report)
            setStage("REPORT")
        } catch (err: any) {
            console.error("리포트 생성 실패:", err)
            setReportErrorMessage(
                err.message || "리포트 생성 중 오류가 발생했습니다.",
            )
            setStage("REPORT_ERROR")
        }
    }, [config, questions])

    // PROCESSING 단계 진입 시 일괄 처리 가동
    useEffect(() => {
        if (stage === "PROCESSING") {
            processAllAnswersInBatch()
        }
    }, [stage, processAllAnswersInBatch])

    const formatTime = (secs: number) => {
        const m = Math.floor(secs / 60)
            .toString()
            .padStart(2, "0")
        const s = (secs % 60).toString().padStart(2, "0")
        return `${m}:${s}`
    }

    const currentQuestion = questions[currentIndex]

    // ==========================================
    // 1) 온보딩 안내 화면 (질문 생성 중)
    // ==========================================
    if (stage === "ONBOARDING") {
        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0F172A"
                align="center"
                justify="center"
                p={6}
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Card.Root
                        maxW="600px"
                        bg="#1E293B"
                        color="white"
                        borderColor="#334155"
                        p={8}
                        borderRadius="2xl"
                        boxShadow="2xl"
                    >
                        <VStack gap={6} align="center">
                            <Center
                                w="64px"
                                h="64px"
                                bg="blue.500/20"
                                borderRadius="full"
                            >
                                <Sparkles size={32} color="#38BDF8" />
                            </Center>
                            <VStack gap={2} textAlign="center">
                                <Text fontSize="24px" fontWeight="800">
                                    AI 모의면접 준비 중
                                </Text>
                                <Text fontSize="14px" color="#94A3B8">
                                    제출하신 정보와 직무에 맞추어 맞춤형 실전
                                    면접 질문을 생성하고 있습니다.
                                </Text>
                            </VStack>

                            <Box
                                w="100%"
                                bg="#0F172A"
                                p={4}
                                borderRadius="xl"
                                border="1px solid #334155"
                            >
                                <Text
                                    fontSize="13px"
                                    fontWeight="700"
                                    color="#38BDF8"
                                    mb={2}
                                >
                                    💡 면접 진행 안내
                                </Text>
                                <VStack
                                    align="start"
                                    gap={1.5}
                                    fontSize="12px"
                                    color="#CBD5E1"
                                >
                                    <Text>
                                        • 질문마다 생각할 시간(5초) 후 녹화가
                                        시작됩니다.
                                    </Text>
                                    <Text>
                                        • 답변이 끝나면 [답변 완료] 버튼을
                                        누르면 즉시 다음 질문으로 넘어갑니다.
                                    </Text>
                                    <Text>
                                        • 백그라운드에서 AI가 실시간으로 답변을
                                        채점하므로 기다림 없이 진행됩니다.
                                    </Text>
                                </VStack>
                            </Box>

                            <HStack gap={3} mt={2}>
                                <Spinner size="md" color="#38BDF8" />
                                <Text
                                    fontSize="14px"
                                    fontWeight="600"
                                    color="#94A3B8"
                                >
                                    AI 질문 생성 중...
                                </Text>
                            </HStack>
                        </VStack>
                    </Card.Root>
                </motion.div>
            </Flex>
        )
    }

    // ==========================================
    // 2) 질문 생성 에러 화면 (+ 재시도 버튼)
    // ==========================================
    if (stage === "ONBOARDING_ERROR") {
        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0F172A"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="500px"
                    bg="#1E293B"
                    color="white"
                    borderColor="red.900"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="2xl"
                >
                    <VStack gap={6} align="center" textAlign="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="red.500/20"
                            borderRadius="full"
                        >
                            <AlertTriangle size={32} color="#F87171" />
                        </Center>
                        <VStack gap={2}>
                            <Text fontSize="22px" fontWeight="800">
                                질문 생성 오류
                            </Text>
                            <Text fontSize="14px" color="#94A3B8">
                                {onboardingErrorMessage ||
                                    "면접 질문을 생성하는 도중 오류가 발생했습니다."}
                            </Text>
                        </VStack>
                        <HStack gap={4} w="100%">
                            <Button
                                flex={1}
                                variant="outline"
                                borderColor="#475569"
                                color="white"
                                onClick={() => navigate("/mock-interview")}
                            >
                                나가기
                            </Button>
                            <Button
                                flex={1}
                                bg="#2563EB"
                                color="white"
                                _hover={{ bg: "#1D4ED8" }}
                                onClick={fetchQuestions}
                            >
                                <RotateCcw
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                재시도
                            </Button>
                        </HStack>
                    </VStack>
                </Card.Root>
            </Flex>
        )
    }

    // ==========================================
    // 3) 카메라 준비 및 시작 화면
    // ==========================================
    if (stage === "CAMERA_PREVIEW") {
        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0F172A"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="600px"
                    w="100%"
                    bg="#1E293B"
                    color="white"
                    borderColor="#334155"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="2xl"
                >
                    <VStack gap={6} align="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="blue.500/20"
                            borderRadius="full"
                        >
                            <Camera size={32} color="#38BDF8" />
                        </Center>
                        <VStack gap={2} textAlign="center">
                            <Text fontSize="24px" fontWeight="800">
                                질문 생성 완료! 면접을 시작할까요?
                            </Text>
                            <Text fontSize="14px" color="#94A3B8">
                                총 {questions.length}개의 면접 질문이
                                준비되었습니다. 카메라와 마이크가 켜지며 면접이
                                시작됩니다.
                            </Text>
                        </VStack>

                        <Box
                            w="100%"
                            bg="#0F172A"
                            p={5}
                            borderRadius="xl"
                            border="1px solid #334155"
                        >
                            <VStack align="start" gap={3}>
                                <HStack>
                                    <CheckCircle2 size={18} color="#4ADE80" />
                                    <Text
                                        fontSize="13px"
                                        fontWeight="600"
                                        color="#E2E8F0"
                                    >
                                        조용한 환경에서 또박또박 답변해 주세요.
                                    </Text>
                                </HStack>
                                <HStack>
                                    <CheckCircle2 size={18} color="#4ADE80" />
                                    <Text
                                        fontSize="13px"
                                        fontWeight="600"
                                        color="#E2E8F0"
                                    >
                                        답변이 끝나면 바로 [답변 완료] 버튼을
                                        누르시면 됩니다.
                                    </Text>
                                </HStack>
                            </VStack>
                        </Box>

                        <Button
                            w="100%"
                            size="lg"
                            bg="#2563EB"
                            color="white"
                            _hover={{ bg: "#1D4ED8" }}
                            h="52px"
                            fontSize="16px"
                            fontWeight="700"
                            onClick={startCamera}
                        >
                            <Play size={18} style={{ marginRight: "8px" }} />
                            면접 시작하기
                        </Button>
                    </VStack>
                </Card.Root>
            </Flex>
        )
    }

    // ==========================================
    // 4) 면접 진행 루프 (질문 텍스트, 생각시간/답변시간, 녹화)
    // ==========================================
    if (stage === "INTERVIEW_ACTIVE") {
        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0B0F19"
                position="relative"
                overflow="hidden"
                direction="column"
            >
                {/* 상단 헤더 바 */}
                <Flex
                    w="100%"
                    h="64px"
                    bg="#1E293B/80"
                    px={6}
                    align="center"
                    justify="space-between"
                    borderBottom="1px solid #334155"
                    zIndex={10}
                >
                    <HStack gap={3}>
                        <Badge
                            bg="blue.600"
                            color="white"
                            px={3}
                            py={1}
                            borderRadius="full"
                            fontSize="12px"
                        >
                            질문 {currentIndex + 1} / {questions.length}
                        </Badge>
                        {currentQuestion?.category && (
                            <Badge
                                variant="outline"
                                color="#94A3B8"
                                borderColor="#475569"
                                px={2.5}
                                py={1}
                                borderRadius="md"
                                fontSize="12px"
                            >
                                {currentQuestion.category}
                            </Badge>
                        )}
                        {currentQuestion?.isReadded && (
                            <Badge
                                bg="purple.900"
                                color="purple.200"
                                px={2}
                                py={0.5}
                                borderRadius="md"
                                fontSize="11px"
                            >
                                재진행 질문
                            </Badge>
                        )}
                    </HStack>

                    <HStack gap={4}>
                        <HStack
                            gap={2}
                            bg="#0F172A"
                            px={3}
                            py={1.5}
                            borderRadius="lg"
                            border="1px solid #334155"
                        >
                            <Clock size={16} color="#94A3B8" />
                            <Text
                                fontSize="13px"
                                fontWeight="700"
                                color="#E2E8F0"
                            >
                                전체 시간 {formatTime(totalSeconds)}
                            </Text>
                        </HStack>
                    </HStack>
                </Flex>

                {/* 중앙 메인 뷰: 비디오 및 질문 카드 */}
                <Flex
                    flex={1}
                    position="relative"
                    align="center"
                    justify="center"
                    p={6}
                >
                    {/* 사용자 웹캠 비디오 */}
                    <Box
                        w="100%"
                        maxW="900px"
                        h="100%"
                        maxH="560px"
                        bg="#020617"
                        borderRadius="2xl"
                        overflow="hidden"
                        position="relative"
                        boxShadow="0 20px 40px rgba(0,0,0,0.6)"
                        border="2px solid #1E293B"
                    >
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transform: "scaleX(-1)",
                            }}
                        />

                        {/* 비디오 오버레이: 상단 상태 배지 */}
                        <Flex
                            position="absolute"
                            top={4}
                            left={4}
                            gap={2}
                            zIndex={5}
                        >
                            {subStage === "THINKING" ? (
                                <Badge
                                    bg="amber.500"
                                    color="black"
                                    px={3}
                                    py={1.5}
                                    borderRadius="full"
                                    fontSize="13px"
                                    fontWeight="800"
                                >
                                    🤔 생각할 시간: {countdown}초
                                </Badge>
                            ) : (
                                <Badge
                                    bg="red.500"
                                    color="white"
                                    px={3}
                                    py={1.5}
                                    borderRadius="full"
                                    fontSize="13px"
                                    fontWeight="800"
                                >
                                    🔴 답변 진행 중: {countdown}초
                                </Badge>
                            )}
                        </Flex>

                        {/* 비디오 하단: 질문 텍스트 오버레이 */}
                        <Box
                            position="absolute"
                            bottom={0}
                            left={0}
                            right={0}
                            bg="linear-gradient(to top, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.7) 70%, transparent 100%)"
                            p={6}
                            zIndex={5}
                        >
                            <motion.div
                                key={currentQuestion?.id}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Text
                                    fontSize="13px"
                                    fontWeight="700"
                                    color="#38BDF8"
                                    mb={1}
                                >
                                    Q{currentIndex + 1}. 면접관 질문
                                </Text>
                                <Text
                                    fontSize={{ base: "18px", md: "22px" }}
                                    fontWeight="800"
                                    color="white"
                                    lineHeight="1.4"
                                >
                                    {currentQuestion?.text}
                                </Text>

                                {/* 답변 진행 중 안내 */}
                                {subStage === "ANSWERING" && (
                                    <Box
                                        mt={3}
                                        p={2.5}
                                        bg="blue.950/70"
                                        borderRadius="lg"
                                        border="1px solid #1E40AF"
                                    >
                                        <Text
                                            fontSize="13px"
                                            color="#93C5FD"
                                            fontWeight="600"
                                        >
                                            🎙️ 마이크로 답변을 말씀해 주세요. 답변 완료 후 다음 질문으로 이동합니다.
                                        </Text>
                                    </Box>
                                )}
                            </motion.div>
                        </Box>
                    </Box>
                </Flex>

                {/* 하단 컨트롤 패널 */}
                <Flex
                    w="100%"
                    h="84px"
                    bg="#0F172A"
                    px={8}
                    align="center"
                    justify="center"
                    borderTop="1px solid #1E293B"
                    zIndex={10}
                >
                    {subStage === "THINKING" ? (
                        <HStack gap={4}>
                            <Text fontSize="14px" color="#94A3B8">
                                잠시 답변을 정리해보세요. {countdown}초 후
                                녹화가 시작됩니다.
                            </Text>
                            <Button
                                bg="#2563EB"
                                color="white"
                                _hover={{ bg: "#1D4ED8" }}
                                onClick={handleSkipThinking}
                                fontWeight="700"
                                px={6}
                            >
                                <Play
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                바로 답변 시작
                            </Button>
                        </HStack>
                    ) : (
                        <HStack gap={6}>
                            <HStack gap={2}>
                                <Box
                                    w="10px"
                                    h="10px"
                                    bg="red.500"
                                    borderRadius="full"
                                    animation="pulse 1.5s infinite"
                                />
                                <Text
                                    fontSize="14px"
                                    color="#EF4444"
                                    fontWeight="700"
                                >
                                    녹화 및 답변 음성 수집 중
                                </Text>
                            </HStack>
                            <Button
                                size="lg"
                                bg="#10B981"
                                color="white"
                                _hover={{ bg: "#059669" }}
                                fontWeight="800"
                                px={8}
                                h="48px"
                                onClick={handleFinishAnswer}
                                boxShadow="0 4px 12px rgba(16, 185, 129, 0.3)"
                            >
                                <Check
                                    size={18}
                                    style={{ marginRight: "6px" }}
                                />
                                답변 완료
                            </Button>
                        </HStack>
                    )}
                </Flex>
            </Flex>
        )
    }

    // ==========================================
    // 5) 처리 중 화면 (모든 백그라운드 처리 완료 대기)
    // ==========================================
    if (stage === "PROCESSING") {
        const completedCount =
            batchProgress.current || Object.keys(evaluations).length
        const totalCount = batchProgress.total || questions.length
        const progressPercent = Math.min(
            100,
            Math.round((completedCount / (totalCount || 1)) * 100),
        )

        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0F172A"
                align="center"
                justify="center"
                p={6}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <Card.Root
                        maxW="540px"
                        w="100%"
                        bg="#1E293B"
                        color="white"
                        borderColor="#334155"
                        p={8}
                        borderRadius="2xl"
                        boxShadow="2xl"
                    >
                        <VStack gap={6} align="center" textAlign="center">
                            <Center
                                w="72px"
                                h="72px"
                                bg="blue.500/20"
                                borderRadius="full"
                            >
                                <Spinner size="xl" color="#38BDF8" />
                            </Center>

                            <VStack gap={2}>
                                <Text fontSize="24px" fontWeight="800">
                                    면접 답변 종합 분석 중
                                </Text>
                                <Text fontSize="14px" color="#94A3B8">
                                    녹화된 답변 음성을 텍스트로 변환하고 AI가
                                    채점 및 피드백을 생성하고 있습니다.
                                </Text>
                            </VStack>

                            <Box
                                w="100%"
                                bg="#0F172A"
                                p={5}
                                borderRadius="xl"
                                border="1px solid #334155"
                            >
                                <Flex justify="space-between" mb={2}>
                                    <Text
                                        fontSize="13px"
                                        fontWeight="700"
                                        color="#94A3B8"
                                    >
                                        답변 처리 진행률
                                    </Text>
                                    <Text
                                        fontSize="13px"
                                        fontWeight="800"
                                        color="#38BDF8"
                                    >
                                        {completedCount} / {totalCount} 질문
                                        완료 ({progressPercent}%)
                                    </Text>
                                </Flex>
                                <Progress.Root
                                    value={progressPercent}
                                    max={100}
                                    size="sm"
                                    borderRadius="full"
                                >
                                    <Progress.Track bg="#334155">
                                        <Progress.Range bg="#38BDF8" />
                                    </Progress.Track>
                                </Progress.Root>
                            </Box>

                            <Text fontSize="12px" color="#64748B">
                                모든 답변 처리가 완료되면 자동으로 종합 리포트
                                화면으로 전환됩니다.
                            </Text>
                        </VStack>
                    </Card.Root>
                </motion.div>
            </Flex>
        )
    }

    // ==========================================
    // 6) 종합 리포트 생성 에러 화면 (+ 재시도 버튼)
    // ==========================================
    if (stage === "REPORT_ERROR") {
        return (
            <Flex
                w="100vw"
                h="100vh"
                bg="#0F172A"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="500px"
                    bg="#1E293B"
                    color="white"
                    borderColor="red.900"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="2xl"
                >
                    <VStack gap={6} align="center" textAlign="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="red.500/20"
                            borderRadius="full"
                        >
                            <AlertTriangle size={32} color="#F87171" />
                        </Center>
                        <VStack gap={2}>
                            <Text fontSize="22px" fontWeight="800">
                                리포트 생성 실패
                            </Text>
                            <Text fontSize="14px" color="#94A3B8">
                                {reportErrorMessage ||
                                    "종합 리포트를 생성하는 도중 오류가 발생했습니다."}
                            </Text>
                        </VStack>
                        <HStack gap={4} w="100%">
                            <Button
                                flex={1}
                                variant="outline"
                                borderColor="#475569"
                                color="white"
                                onClick={() => navigate("/mock-interview")}
                            >
                                나가기
                            </Button>
                            <Button
                                flex={1}
                                bg="#2563EB"
                                color="white"
                                _hover={{ bg: "#1D4ED8" }}
                                onClick={generateFinalReport}
                            >
                                <RotateCcw
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                리포트 다시 생성
                            </Button>
                        </HStack>
                    </VStack>
                </Card.Root>
            </Flex>
        )
    }

    // ==========================================
    // 7) 종합 리포트 결과 화면
    // ==========================================
    if (stage === "REPORT" && reportData) {
        return (
            <Box
                w="100vw"
                minH="100vh"
                bg="#0B0F19"
                color="white"
                py={10}
                px={{ base: 4, md: 8 }}
                overflowY="auto"
            >
                <Box maxW="1000px" mx="auto">
                    {/* 상단 헤더 */}
                    <Flex
                        justify="space-between"
                        align="center"
                        mb={8}
                        wrap="wrap"
                        gap={4}
                    >
                        <VStack align="start" gap={1}>
                            <Badge
                                bg="blue.500/20"
                                color="#38BDF8"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="13px"
                                fontWeight="700"
                            >
                                모의면접 분석 리포트
                            </Badge>
                            <Text
                                fontSize={{ base: "24px", md: "30px" }}
                                fontWeight="800"
                            >
                                면접 결과 종합 평가
                            </Text>
                            <Text fontSize="14px" color="#94A3B8">
                                목표 직무:{" "}
                                {config?.selectedJobs?.join(", ") ||
                                    "개발 직무"}{" "}
                                | 희망 기업:{" "}
                                {config?.targetCompany || "지정 기업"}
                            </Text>
                        </VStack>
                        <HStack gap={3}>
                            <Button
                                variant="outline"
                                borderColor="#475569"
                                color="white"
                                onClick={() => navigate("/mock-interview")}
                            >
                                <RotateCcw
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                다시 면접보기
                            </Button>
                            <Button
                                bg="#2563EB"
                                color="white"
                                _hover={{ bg: "#1D4ED8" }}
                                onClick={() => navigate("/")}
                            >
                                <Home
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                홈으로
                            </Button>
                        </HStack>
                    </Flex>

                    {/* 종합 점수 및 총평 카드 */}
                    <Card.Root
                        bg="#1E293B"
                        borderColor="#334155"
                        borderRadius="2xl"
                        p={6}
                        mb={8}
                        boxShadow="xl"
                    >
                        <Flex
                            direction={{ base: "column", md: "row" }}
                            align="center"
                            gap={8}
                        >
                            {/* 점수 원형 */}
                            <VStack gap={1} minW="180px">
                                <Center
                                    w="130px"
                                    h="130px"
                                    borderRadius="full"
                                    bg="linear-gradient(135deg, #2563EB 0%, #38BDF8 100%)"
                                    boxShadow="0 8px 24px rgba(37,99,235,0.4)"
                                >
                                    <VStack gap={0}>
                                        <Text
                                            fontSize="36px"
                                            fontWeight="900"
                                            color="white"
                                            lineHeight="1"
                                        >
                                            {reportData.overallScore}
                                        </Text>
                                        <Text
                                            fontSize="13px"
                                            fontWeight="700"
                                            color="white/80"
                                        >
                                            / 100점
                                        </Text>
                                    </VStack>
                                </Center>
                                <Text
                                    fontSize="14px"
                                    fontWeight="700"
                                    color="#CBD5E1"
                                    mt={2}
                                >
                                    종합 평가 점수
                                </Text>
                            </VStack>

                            {/* 총평 */}
                            <VStack align="start" gap={3} flex={1}>
                                <HStack>
                                    <Award size={20} color="#38BDF8" />
                                    <Text
                                        fontSize="17px"
                                        fontWeight="800"
                                        color="#38BDF8"
                                    >
                                        종합 총평
                                    </Text>
                                </HStack>
                                <Text
                                    fontSize="14px"
                                    color="#E2E8F0"
                                    lineHeight="1.7"
                                >
                                    {reportData.overallFeedback}
                                </Text>
                            </VStack>
                        </Flex>
                    </Card.Root>

                    {/* 강점 및 보완점 2열 카드 */}
                    <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={6}
                        mb={8}
                    >
                        {/* 강점 */}
                        <Card.Root
                            flex={1}
                            bg="#1E293B"
                            borderColor="#334155"
                            borderRadius="2xl"
                            p={6}
                        >
                            <HStack mb={4}>
                                <TrendingUp size={20} color="#4ADE80" />
                                <Text
                                    fontSize="16px"
                                    fontWeight="800"
                                    color="#4ADE80"
                                >
                                    주요 강점 (Strengths)
                                </Text>
                            </HStack>
                            <VStack align="start" gap={2}>
                                {reportData.strengths.map((st, i) => (
                                    <HStack key={i} align="start" gap={2}>
                                        <Text color="#4ADE80" fontWeight="700">
                                            ✓
                                        </Text>
                                        <Text fontSize="14px" color="#E2E8F0">
                                            {st}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Card.Root>

                        {/* 보완점 */}
                        <Card.Root
                            flex={1}
                            bg="#1E293B"
                            borderColor="#334155"
                            borderRadius="2xl"
                            p={6}
                        >
                            <HStack mb={4}>
                                <AlertCircle size={20} color="#FBBF24" />
                                <Text
                                    fontSize="16px"
                                    fontWeight="800"
                                    color="#FBBF24"
                                >
                                    개선 권장사항 (Improvements)
                                </Text>
                            </HStack>
                            <VStack align="start" gap={2}>
                                {reportData.improvements.map((im, i) => (
                                    <HStack key={i} align="start" gap={2}>
                                        <Text color="#FBBF24" fontWeight="700">
                                            •
                                        </Text>
                                        <Text fontSize="14px" color="#E2E8F0">
                                            {im}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Card.Root>
                    </Flex>

                    {/* 질문별 상세 답변 분석 */}
                    <VStack align="start" gap={4} mb={10}>
                        <Text fontSize="20px" fontWeight="800">
                            질문별 상세 피드백 & 모범 답변
                        </Text>

                        <VStack w="100%" gap={4}>
                            {reportData.questionEvaluations.map(
                                (evalItem, index) => {
                                    const isFailed =
                                        evalItem.status === "FAILED"

                                    return (
                                        <Card.Root
                                            key={index}
                                            w="100%"
                                            bg="#1E293B"
                                            borderColor={
                                                isFailed ? "red.900" : "#334155"
                                            }
                                            borderRadius="xl"
                                            p={5}
                                        >
                                            <Flex
                                                justify="space-between"
                                                align="start"
                                                mb={3}
                                            >
                                                <HStack gap={2}>
                                                    <Badge
                                                        bg="blue.600"
                                                        color="white"
                                                        px={2.5}
                                                        py={0.5}
                                                        borderRadius="md"
                                                        fontSize="12px"
                                                    >
                                                        Q{index + 1}
                                                    </Badge>
                                                    <Text
                                                        fontSize="16px"
                                                        fontWeight="700"
                                                        color="white"
                                                    >
                                                        {evalItem.questionText}
                                                    </Text>
                                                </HStack>
                                                {isFailed ? (
                                                    <Badge
                                                        bg="red.900"
                                                        color="red.200"
                                                        px={2.5}
                                                        py={1}
                                                        borderRadius="md"
                                                        fontSize="12px"
                                                    >
                                                        처리 실패
                                                    </Badge>
                                                ) : (
                                                    <Badge
                                                        bg="emerald.900"
                                                        color="emerald.200"
                                                        px={2.5}
                                                        py={1}
                                                        borderRadius="md"
                                                        fontSize="13px"
                                                        fontWeight="800"
                                                    >
                                                        {evalItem.score} / 10점
                                                    </Badge>
                                                )}
                                            </Flex>

                                            <VStack
                                                align="start"
                                                gap={3}
                                                mt={3}
                                            >
                                                {/* 지원자 답변 텍스트 */}
                                                <Box
                                                    w="100%"
                                                    bg="#0F172A"
                                                    p={3.5}
                                                    borderRadius="lg"
                                                    border="1px solid #334155"
                                                >
                                                    <Text
                                                        fontSize="12px"
                                                        fontWeight="700"
                                                        color="#94A3B8"
                                                        mb={1}
                                                    >
                                                        내 답변 (STT 변환)
                                                    </Text>
                                                    <Text
                                                        fontSize="14px"
                                                        color="#CBD5E1"
                                                    >
                                                        {evalItem.answerText ||
                                                            "(답변 내용 없음)"}
                                                    </Text>
                                                </Box>

                                                {/* 피드백 및 모범 답변 */}
                                                {!isFailed && (
                                                    <>
                                                        <Box w="100%">
                                                            <Text
                                                                fontSize="13px"
                                                                fontWeight="700"
                                                                color="#38BDF8"
                                                                mb={1}
                                                            >
                                                                💡 AI 평가 및
                                                                피드백
                                                            </Text>
                                                            <Text
                                                                fontSize="13px"
                                                                color="#E2E8F0"
                                                                lineHeight="1.6"
                                                            >
                                                                {
                                                                    evalItem.feedback
                                                                }
                                                            </Text>
                                                        </Box>

                                                        {evalItem.sampleAnswer && (
                                                            <Box
                                                                w="100%"
                                                                bg="#0D2847/50"
                                                                p={3.5}
                                                                borderRadius="lg"
                                                                border="1px solid #1E40AF"
                                                            >
                                                                <Text
                                                                    fontSize="12px"
                                                                    fontWeight="700"
                                                                    color="#60A5FA"
                                                                    mb={1}
                                                                >
                                                                    ✨ 모범 답변
                                                                    가이드
                                                                </Text>
                                                                <Text
                                                                    fontSize="13px"
                                                                    color="#BFDBFE"
                                                                    lineHeight="1.6"
                                                                >
                                                                    {
                                                                        evalItem.sampleAnswer
                                                                    }
                                                                </Text>
                                                            </Box>
                                                        )}
                                                    </>
                                                )}
                                            </VStack>
                                        </Card.Root>
                                    )
                                },
                            )}
                        </VStack>
                    </VStack>
                </Box>
            </Box>
        )
    }

    return null
}

export default InterviewTemplate
