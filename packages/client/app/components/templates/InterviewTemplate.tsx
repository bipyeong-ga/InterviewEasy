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
    Center,
    IconButton,
} from "@chakra-ui/react"
import { motion } from "motion/react"
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
    X,
    Circle,
    ChevronDown,
    Lightbulb,
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

interface CompetencyScores {
    problemSolving: number
    logicalStructure: number
    jobExpertise: number
    specificity: number
}

interface ReportData {
    overallScore: number
    overallFeedback: string
    strengths: string[]
    improvements: string[]
    competencies?: CompetencyScores
    questionEvaluations: EvaluationResult[]
}

interface DeliveryMetrics {
    wpm: number
    fillerPerMinute: number
    avgAnswerSec: number
    silenceRatio: number
}

const FILLER_WORDS = [
    "음",
    "어",
    "그러니까",
    "저기",
    "약간",
    "뭐랄까",
    "그",
    "이제",
]

function countFillerWords(text: string): number {
    let count = 0
    for (const filler of FILLER_WORDS) {
        const matches = text.match(new RegExp(filler, "g"))
        if (matches) count += matches.length
    }
    return count
}

interface InterviewTemplateProps {
    config?: {
        selectedJobs?: string[]
        customJob?: string
        selectedResume?: string
        resumeContent?: string
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

const THINKING_TIME_LIMIT = 15
const ANSWER_TIME_LIMIT = 300

const DEFAULT_COMPETENCIES: CompetencyScores = {
    problemSolving: 70,
    logicalStructure: 70,
    jobExpertise: 70,
    specificity: 70,
}

const RADAR_AXES: { key: keyof CompetencyScores; label: string }[] = [
    { key: "problemSolving", label: "문제 해결력" },
    { key: "logicalStructure", label: "논리적 구조" },
    { key: "jobExpertise", label: "직무 전문성" },
    { key: "specificity", label: "답변 구체성" },
]

function radarPoint(
    index: number,
    value: number,
    cx = 200,
    cy = 200,
    maxR = 160,
) {
    const angleDeg = -90 + index * 60
    const angleRad = (angleDeg * Math.PI) / 180
    const r = (Math.max(0, Math.min(100, value)) / 100) * maxR
    return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) }
}

function scoreLabel(score: number): string {
    if (score >= 90) return "매우 우수"
    if (score >= 80) return "우수"
    if (score >= 70) return "양호"
    if (score >= 60) return "보통"
    return "노력 필요"
}

function StatTile({
    label,
    value,
    unit,
    sub,
}: {
    label: string
    value: string | number
    unit?: string
    sub?: string
}) {
    return (
        <Box
            flex={1}
            minW="140px"
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
        >
            <Text fontSize="12.5px" color="gray.500" mb={1.5}>
                {label}
            </Text>
            <HStack gap={1} align="baseline">
                <Text fontFamily="mono" fontSize="22px" fontWeight="700" color="gray.900">
                    {value}
                </Text>
                {unit && (
                    <Text fontSize="12.5px" color="gray.400" fontWeight="600">
                        {unit}
                    </Text>
                )}
            </HStack>
            {sub && (
                <Text fontSize="11.5px" color="blue.600" fontWeight="600" mt={0.5}>
                    {sub}
                </Text>
            )}
        </Box>
    )
}

const InterviewTemplate: React.FC<InterviewTemplateProps> = ({ config }) => {
    const navigate = useNavigate()

    // 메인 상태 머신
    const [stage, setStage] = useState<InterviewStage>("ONBOARDING")
    const [subStage, setSubStage] = useState<ActiveSubStage>("THINKING")
    const [isFinishingAnswer, setIsFinishingAnswer] = useState(false)

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
    const [deliveryMetrics, setDeliveryMetrics] =
        useState<DeliveryMetrics | null>(null)
    const [expandedQuestionIndex, setExpandedQuestionIndex] = useState<
        number | null
    >(0)
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

    // 딜리버리 지표(WPM/침묵 비율) 계산을 위한 답변 구간 측정
    const recordingStartRef = useRef<number>(0)
    const speechFrameCountRef = useRef<number>(0)
    const totalFrameCountRef = useRef<number>(0)

    // 마지막 일괄 Whisper 처리를 위한 오디오 큐
    const recordedAnswersRef = useRef<
        {
            question: Question
            audioBlob: Blob
            hasSpeech: boolean
            durationSec: number
            silenceRatio: number
        }[]
    >([])
    const [batchProgress, setBatchProgress] = useState<{
        current: number
        total: number
    }>({ current: 0, total: 0 })
    const isBatchProcessingRef = useRef<boolean>(false)
    const isFinishingAnswerRef = useRef<boolean>(false)

    // 세션 전체 영상 녹화 (다시보기용) 및 질문별 챕터 마커
    const sessionRecorderRef = useRef<MediaRecorder | null>(null)
    const sessionChunksRef = useRef<Blob[]>([])
    const sessionStartRef = useRef<number>(0)
    const lastChapterIndexRef = useRef<number>(-1)
    const [chapters, setChapters] = useState<
        { index: number; text: string; startTime: number }[]
    >([])
    const [sessionId, setSessionId] = useState<number | null>(null)
    const [localVideoUrl, setLocalVideoUrl] = useState<string | null>(null)
    const [isUploadingSession, setIsUploadingSession] = useState(false)
    const sessionVideoBlobRef = useRef<Blob | null>(null)
    const replayVideoRef = useRef<HTMLVideoElement | null>(null)

    // 1. 질문 생성 API 호출 (온보딩 단계)
    const fetchQuestions = useCallback(async () => {
        setStage("ONBOARDING")
        setOnboardingErrorMessage("")

        try {
            const resumeContent =
                config?.resumeContent ||
                config?.selectedResumeData?.content ||
                ""
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

            // 다시보기용 세션 전체 녹화 시작 (웹캠 화면 + 마이크 원본)
            try {
                const sessionMimeTypes = [
                    "video/webm;codecs=vp9,opus",
                    "video/webm;codecs=vp8,opus",
                    "video/webm",
                    "video/mp4;codecs=avc1,mp4a.40.2",
                    "video/mp4",
                ]
                const sessionMime = sessionMimeTypes.find((m) =>
                    MediaRecorder.isTypeSupported(m),
                )
                const sessionRecorder = sessionMime
                    ? new MediaRecorder(stream, { mimeType: sessionMime })
                    : new MediaRecorder(stream)
                sessionChunksRef.current = []
                sessionRecorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) {
                        sessionChunksRef.current.push(e.data)
                    }
                }
                sessionStartRef.current = Date.now()
                lastChapterIndexRef.current = -1
                sessionRecorder.start(1000)
                sessionRecorderRef.current = sessionRecorder
            } catch (sessionErr) {
                console.warn(
                    "세션 녹화 초기화 실패 (다시보기 기능 비활성화):",
                    sessionErr,
                )
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

    // INTERVIEW_ACTIVE로 전환되어 <video>가 마운트된 뒤에야 stream을 연결할 수 있으므로,
    // startCamera 내부의 즉시 연결(당시 videoRef는 아직 null)과 별개로 여기서 재연결한다.
    useEffect(() => {
        if (
            stage === "INTERVIEW_ACTIVE" &&
            videoRef.current &&
            mediaStreamRef.current
        ) {
            videoRef.current.srcObject = mediaStreamRef.current
            videoRef.current.play().catch(console.error)
        }
    }, [stage])

    // 질문이 바뀔 때마다 세션 녹화 기준 경과 시간을 챕터로 기록 (영상 구간 이동용)
    useEffect(() => {
        if (stage !== "INTERVIEW_ACTIVE") return
        if (lastChapterIndexRef.current === currentIndex) return
        const currentQ = questions[currentIndex]
        if (!currentQ) return

        lastChapterIndexRef.current = currentIndex
        const startTime = sessionStartRef.current
            ? (Date.now() - sessionStartRef.current) / 1000
            : 0
        setChapters((prev) => [
            ...prev,
            { index: currentIndex, text: currentQ.text, startTime },
        ])
    }, [stage, currentIndex, questions])

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
            if (sessionRecorderRef.current?.state !== "inactive") {
                sessionRecorderRef.current?.stop()
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
        recordingStartRef.current = Date.now()
        speechFrameCountRef.current = 0
        totalFrameCountRef.current = 0

        // 실시간 VAD (음성 활동 감지 + 침묵 비율 집계)
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

                totalFrameCountRef.current += 1
                if (average > 15) {
                    speechFrameCountRef.current += 1
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

    // 세션 전체 녹화 중지 및 다시보기용 영상 Blob 확보
    const stopSessionRecording = useCallback((): Promise<Blob | null> => {
        return new Promise((resolve) => {
            const recorder = sessionRecorderRef.current
            if (!recorder || recorder.state === "inactive") {
                if (sessionChunksRef.current.length > 0) {
                    const mime = recorder?.mimeType || "video/webm"
                    resolve(new Blob(sessionChunksRef.current, { type: mime }))
                } else {
                    resolve(null)
                }
                return
            }

            let resolved = false
            const finish = () => {
                if (resolved) return
                resolved = true
                const mime = recorder.mimeType || "video/webm"
                if (sessionChunksRef.current.length > 0) {
                    resolve(new Blob(sessionChunksRef.current, { type: mime }))
                } else {
                    resolve(null)
                }
            }

            recorder.onstop = finish

            // 혹시 onstop이 지연될 경우를 대비한 2.5초 타임아웃 안전장치
            setTimeout(finish, 2500)

            try {
                if (recorder.state === "recording") {
                    recorder.requestData()
                }
                recorder.stop()
            } catch (e) {
                console.warn("sessionRecorder stop error:", e)
                finish()
            }
        })
    }, [])

    // 답변 완료 및 다음 단계 처리 (오디오 큐에 보관 후 즉시 다음 질문)
    const handleFinishAnswer = useCallback(async () => {
        if (isFinishingAnswerRef.current) return
        isFinishingAnswerRef.current = true
        setIsFinishingAnswer(true)

        try {
            const currentQ = questions[currentIndex]
            if (!currentQ) return

            // 1. 녹음 중지 및 오디오 블롭 획득
            const audioBlob = await stopRecording()
            const hasSpeech =
                speechDetectedRef.current &&
                !!audioBlob &&
                audioBlob.size > 1500
            const durationSec = recordingStartRef.current
                ? (Date.now() - recordingStartRef.current) / 1000
                : 0
            const silenceRatio =
                totalFrameCountRef.current > 0
                    ? 1 -
                      speechFrameCountRef.current / totalFrameCountRef.current
                    : 0

            // 2. 일괄 처리를 위한 오디오 큐에 보관
            recordedAnswersRef.current.push({
                question: currentQ,
                audioBlob: audioBlob || new Blob([], { type: "audio/webm" }),
                hasSpeech,
                durationSec,
                silenceRatio,
            })

            // 3. 다음 질문 확인
            if (currentIndex + 1 < questions.length) {
                setCurrentIndex((prev) => prev + 1)
                setSubStage("THINKING")
                setCountdown(THINKING_TIME_LIMIT)
            } else {
                // 모든 질문 완료 -> 세션 녹화 종료 후 마지막 일괄 처리 단계로 이동
                const finalVideoBlob = await stopSessionRecording()
                sessionVideoBlobRef.current = finalVideoBlob
                if (finalVideoBlob && finalVideoBlob.size > 0) {
                    try {
                        const blobUrl = URL.createObjectURL(finalVideoBlob)
                        setLocalVideoUrl(blobUrl)
                    } catch (urlErr) {
                        console.warn("Blob URL 생성 실패:", urlErr)
                    }
                }
                setStage("PROCESSING")
            }
        } finally {
            isFinishingAnswerRef.current = false
            setIsFinishingAnswer(false)
        }
    }, [currentIndex, questions, stopRecording, stopSessionRecording])

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
                            feedback:
                                "음성 인식 또는 채점 처리에 실패하였습니다.",
                            status: "FAILED",
                        }
                    }
                }

                completedCount++
                setBatchProgress({ current: completedCount, total })
                setEvaluations({ ...evaluationsMap })
            }),
        )

        // 딜리버리 지표 계산 (실제 발화가 있었던 답변만 대상)
        const validItems = items.filter(
            (item) => item.hasSpeech && item.durationSec > 0,
        )
        if (validItems.length > 0) {
            let totalWords = 0
            let totalFillers = 0
            let totalDurationSec = 0
            let totalSilenceRatio = 0
            for (const item of validItems) {
                const answerText =
                    evaluationsMap[item.question.id]?.answerText || ""
                const wordCount = answerText
                    .trim()
                    .split(/\s+/)
                    .filter(Boolean).length
                totalWords += wordCount
                totalFillers += countFillerWords(answerText)
                totalDurationSec += item.durationSec
                totalSilenceRatio += item.silenceRatio
            }
            const totalMinutes = totalDurationSec / 60
            setDeliveryMetrics({
                wpm:
                    totalMinutes > 0
                        ? Math.round(totalWords / totalMinutes)
                        : 0,
                fillerPerMinute:
                    totalMinutes > 0
                        ? Math.round((totalFillers / totalMinutes) * 10) / 10
                        : 0,
                avgAnswerSec: Math.round(totalDurationSec / validItems.length),
                silenceRatio: Math.round(
                    (totalSilenceRatio / validItems.length) * 100,
                ),
            })
        }

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

            // 다시보기용 영상 + 챕터 + 리포트를 백그라운드로 업로드 (화면 전환을 막지 않음)
            const videoBlob = sessionVideoBlobRef.current
            if (videoBlob && videoBlob.size > 0) {
                setIsUploadingSession(true)
                try {
                    const mimeType =
                        videoBlob.type ||
                        (videoBlob.type.includes("mp4")
                            ? "video/mp4"
                            : "video/webm")
                    const ext = mimeType.includes("mp4") ? "mp4" : "webm"
                    const file = new File(
                        [videoBlob],
                        `interview_${Date.now()}.${ext}`,
                        { type: mimeType },
                    )
                    const uploadForm = new FormData()
                    uploadForm.append("video", file)
                    uploadForm.append("chapters", JSON.stringify(chapters))
                    uploadForm.append("report", JSON.stringify(data.report))

                    const token = localStorage.getItem("token")
                    const uploadHeaders: HeadersInit = {}
                    if (token) {
                        uploadHeaders["Authorization"] = `Bearer ${token}`
                    }

                    const uploadResp = await fetch("/api/interview-sessions", {
                        method: "POST",
                        headers: uploadHeaders,
                        body: uploadForm,
                    })
                    const uploadData = await uploadResp.json()
                    if (uploadResp.ok && uploadData.id) {
                        setSessionId(uploadData.id)
                    } else {
                        console.warn("면접 영상 업로드 실패:", uploadData.error)
                    }
                } catch (uploadErr) {
                    console.warn("면접 영상 업로드 실패:", uploadErr)
                } finally {
                    setIsUploadingSession(false)
                }
            }
        } catch (err: any) {
            console.error("리포트 생성 실패:", err)
            setReportErrorMessage(
                err.message || "리포트 생성 중 오류가 발생했습니다.",
            )
            setStage("REPORT_ERROR")
        }
    }, [config, questions, chapters])

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
                bg="gray.50"
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
                        bg="white"
                        color="gray.900"
                        borderColor="gray.200"
                        p={8}
                        borderRadius="2xl"
                        boxShadow="xl"
                    >
                        <VStack gap={6} align="center">
                            <Center
                                w="64px"
                                h="64px"
                                bg="blue.50"
                                borderRadius="full"
                            >
                                <Sparkles size={32} color="blue.500" />
                            </Center>
                            <VStack gap={2} textAlign="center">
                                <Text fontSize="24px" fontWeight="800">
                                    AI 모의면접 준비 중
                                </Text>
                                <Text fontSize="14px" color="gray.500">
                                    제출하신 정보와 직무에 맞추어 맞춤형 실전
                                    면접 질문을 생성하고 있습니다.
                                </Text>
                            </VStack>

                            <Box
                                w="100%"
                                bg="gray.50"
                                p={4}
                                borderRadius="xl"
                                border="1px solid"
                                borderColor="gray.200"
                            >
                                <HStack gap={1.5} mb={2} color="blue.600">
                                    <Lightbulb size={14} />
                                    <Text fontSize="13px" fontWeight="700">
                                        면접 진행 안내
                                    </Text>
                                </HStack>
                                <VStack
                                    align="start"
                                    gap={1.5}
                                    fontSize="12px"
                                    color="gray.600"
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
                                <Spinner size="md" color="blue.500" />
                                <Text
                                    fontSize="14px"
                                    fontWeight="600"
                                    color="gray.500"
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
                bg="gray.50"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="500px"
                    bg="white"
                    color="gray.900"
                    borderColor="red.200"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="xl"
                >
                    <VStack gap={6} align="center" textAlign="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="red.50"
                            borderRadius="full"
                        >
                            <AlertTriangle size={32} color="red.500" />
                        </Center>
                        <VStack gap={2}>
                            <Text fontSize="22px" fontWeight="800">
                                질문 생성 오류
                            </Text>
                            <Text fontSize="14px" color="gray.500">
                                {onboardingErrorMessage ||
                                    "면접 질문을 생성하는 도중 오류가 발생했습니다."}
                            </Text>
                        </VStack>
                        <HStack gap={4} w="100%">
                            <Button
                                flex={1}
                                variant="outline"
                                borderColor="gray.300"
                                color="gray.700"
                                onClick={() => navigate("/mock-interview")}
                            >
                                나가기
                            </Button>
                            <Button
                                flex={1}
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: "blue.700" }}
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
                bg="gray.50"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="600px"
                    w="100%"
                    bg="white"
                    color="gray.900"
                    borderColor="gray.200"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="xl"
                >
                    <VStack gap={6} align="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="blue.50"
                            borderRadius="full"
                        >
                            <Camera size={32} color="blue.500" />
                        </Center>
                        <VStack gap={2} textAlign="center">
                            <Text fontSize="24px" fontWeight="800">
                                질문 생성 완료! 면접을 시작할까요?
                            </Text>
                            <Text fontSize="14px" color="gray.500">
                                총 {questions.length}개의 면접 질문이
                                준비되었습니다. 카메라와 마이크가 켜지며 면접이
                                시작됩니다.
                            </Text>
                        </VStack>

                        <Box
                            w="100%"
                            bg="gray.50"
                            p={5}
                            borderRadius="xl"
                            border="1px solid"
                            borderColor="gray.200"
                        >
                            <VStack align="start" gap={3}>
                                <HStack>
                                    <CheckCircle2
                                        size={18}
                                        color="emerald.600"
                                    />
                                    <Text
                                        fontSize="13px"
                                        fontWeight="600"
                                        color="gray.700"
                                    >
                                        조용한 환경에서 또박또박 답변해 주세요.
                                    </Text>
                                </HStack>
                                <HStack>
                                    <CheckCircle2
                                        size={18}
                                        color="emerald.600"
                                    />
                                    <Text
                                        fontSize="13px"
                                        fontWeight="600"
                                        color="gray.700"
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
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.700" }}
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
                bg="gray.900"
                position="relative"
                overflow="hidden"
                direction="column"
            >
                {/* 상단 헤더 바 */}
                <Flex
                    w="100%"
                    h="60px"
                    flexShrink={0}
                    px={{ base: 3, md: 7 }}
                    align="center"
                    justify="space-between"
                    borderBottom="1px solid"
                    borderColor="gray.700"
                    zIndex={10}
                >
                    <HStack gap={3}>
                        <IconButton
                            aria-label="면접 나가기"
                            variant="ghost"
                            size="sm"
                            color="gray.500"
                            onClick={() => navigate("/mock-interview")}
                        >
                            <X size={18} />
                        </IconButton>
                        <Text
                            fontSize="13.5px"
                            fontWeight="600"
                            color="gray.400"
                            display={{ base: "none", md: "block" }}
                        >
                            모의면접 진행 중
                        </Text>
                    </HStack>

                    <HStack gap={2}>
                        <Text
                            fontSize="12px"
                            fontWeight="600"
                            color="gray.500"
                            mr={1}
                            display={{ base: "none", sm: "block" }}
                        >
                            질문 {currentIndex + 1} / {questions.length}
                        </Text>
                        {questions.map((q, i) => (
                            <Box
                                key={q.id}
                                w="20px"
                                h="4px"
                                borderRadius="full"
                                bg={i <= currentIndex ? "blue.600" : "gray.700"}
                            />
                        ))}
                    </HStack>

                    <HStack gap={2} color="gray.500">
                        <Clock size={14} />
                        <Text
                            fontFamily="mono"
                            fontSize="12.5px"
                            fontWeight="600"
                        >
                            {formatTime(totalSeconds)}
                        </Text>
                    </HStack>
                </Flex>

                {/* 메인 분할 영역: 비디오 + 질문 사이드바 */}
                <Flex
                    flex={1}
                    gap={4}
                    p={{ base: 3, md: 6 }}
                    overflow="hidden"
                    direction={{ base: "column", lg: "row" }}
                >
                    {/* 비디오 패널 */}
                    <Box
                        flex={1}
                        minH={{ base: "260px", lg: "auto" }}
                        position="relative"
                        borderRadius="2xl"
                        overflow="hidden"
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.700"
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

                        {/* 내 화면 태그 */}
                        <HStack
                            position="absolute"
                            top={4}
                            left={4}
                            gap={2}
                            bg="blackAlpha.600"
                            backdropFilter="blur(6px)"
                            px={3}
                            py={1.5}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor="gray.700"
                        >
                            <Camera size={13} color="#C6CCD4" />
                            <Text
                                fontSize="11.5px"
                                fontWeight="600"
                                color="gray.200"
                            >
                                내 화면
                            </Text>
                        </HStack>

                        {/* REC 인디케이터 */}
                        <HStack
                            position="absolute"
                            top={4}
                            right={4}
                            gap={2}
                            bg="blackAlpha.600"
                            backdropFilter="blur(6px)"
                            px={3}
                            py={1.5}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor="gray.700"
                        >
                            <Box
                                w="7px"
                                h="7px"
                                borderRadius="full"
                                bg="red.500"
                                animation="pulse 1.5s infinite"
                            />
                            <Text
                                fontFamily="mono"
                                fontSize="11.5px"
                                fontWeight="600"
                                color="red.300"
                            >
                                REC {formatTime(totalSeconds)}
                            </Text>
                        </HStack>

                        {/* 마이크 레벨 (하단 중앙) */}
                        <HStack
                            position="absolute"
                            bottom={4}
                            left="50%"
                            transform="translateX(-50%)"
                            gap={2}
                            bg="blackAlpha.600"
                            backdropFilter="blur(6px)"
                            px={4}
                            py={2}
                            borderRadius="full"
                            border="1px solid"
                            borderColor="gray.700"
                        >
                            <Mic size={14} color="#C6CCD4" />
                            <HStack align="flex-end" gap="2.5px" h="14px">
                                {[5, 10, 14, 8, 4].map((h, i) => (
                                    <Box
                                        key={i}
                                        w="3px"
                                        h={
                                            subStage === "ANSWERING"
                                                ? `${h}px`
                                                : "4px"
                                        }
                                        bg={
                                            subStage === "ANSWERING"
                                                ? i === 2
                                                    ? "blue.400"
                                                    : "blue.500"
                                                : "gray.700"
                                        }
                                        borderRadius="1px"
                                        transition="height 0.15s ease"
                                    />
                                ))}
                            </HStack>
                        </HStack>
                    </Box>

                    {/* 우측 사이드바: 질문 카드 */}
                    <VStack
                        w={{ base: "100%", lg: "400px" }}
                        flexShrink={0}
                        gap={4}
                        align="stretch"
                    >
                        <Box
                            bg="gray.800"
                            border="1px solid"
                            borderColor="gray.700"
                            borderRadius="2xl"
                            p={6}
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            overflow="hidden"
                        >
                            <HStack gap={2} mb={4}>
                                <Badge
                                    fontFamily="mono"
                                    fontSize="11.5px"
                                    fontWeight="700"
                                    color="white"
                                    bg="blue.600"
                                    px={2.5}
                                    py={0.5}
                                    borderRadius="md"
                                >
                                    Q{currentIndex + 1}
                                </Badge>
                                {currentQuestion?.category && (
                                    <Badge
                                        variant="outline"
                                        fontSize="11px"
                                        fontWeight="600"
                                        color="gray.400"
                                        borderColor="gray.700"
                                        px={2.5}
                                        py={0.5}
                                        borderRadius="md"
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

                            <motion.div
                                key={currentQuestion?.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Text
                                    fontSize="20px"
                                    fontWeight="700"
                                    color="gray.50"
                                    lineHeight="1.5"
                                >
                                    {currentQuestion?.text}
                                </Text>
                            </motion.div>

                            <HStack
                                mt={5}
                                pt={4}
                                borderTop="1px solid"
                                borderColor="gray.700"
                                justify="space-between"
                            >
                                {subStage === "THINKING" ? (
                                    <HStack gap={2}>
                                        <Box
                                            w="7px"
                                            h="7px"
                                            borderRadius="full"
                                            bg="amber.400"
                                        />
                                        <Text
                                            fontSize="12.5px"
                                            fontWeight="600"
                                            color="gray.300"
                                        >
                                            생각 중
                                        </Text>
                                    </HStack>
                                ) : (
                                    <HStack gap={2}>
                                        <Box
                                            w="7px"
                                            h="7px"
                                            borderRadius="full"
                                            bg="red.500"
                                            animation="pulse 1.5s infinite"
                                        />
                                        <Text
                                            fontSize="12.5px"
                                            fontWeight="600"
                                            color="gray.300"
                                        >
                                            답변 진행 중
                                        </Text>
                                    </HStack>
                                )}
                                <Text
                                    fontFamily="mono"
                                    fontSize="16px"
                                    fontWeight="700"
                                    color="gray.50"
                                >
                                    {formatTime(countdown)}
                                </Text>
                            </HStack>

                            <HStack
                                mt={3}
                                p={3}
                                bg="gray.900"
                                border="1px solid"
                                borderColor="gray.700"
                                borderRadius="lg"
                                align="flex-start"
                                gap={2}
                            >
                                <Mic
                                    size={14}
                                    color="#6B93D6"
                                    style={{ marginTop: "1px", flexShrink: 0 }}
                                />
                                <Text
                                    fontSize="12px"
                                    color="gray.400"
                                    lineHeight="1.55"
                                >
                                    {subStage === "THINKING"
                                        ? "잠시 답변을 정리해보세요. 준비되면 아래 버튼으로 바로 시작할 수 있습니다."
                                        : "마이크로 답변을 말씀해 주세요. 답변을 마치면 아래 버튼을 눌러주세요."}
                                </Text>
                            </HStack>

                            {/* 질문 진행 목록 */}
                            <VStack
                                mt={5}
                                align="stretch"
                                gap={2}
                                overflowY="auto"
                            >
                                {questions.map((q, i) => {
                                    const isDone = i < currentIndex
                                    const isCurrent = i === currentIndex
                                    return (
                                        <HStack
                                            key={q.id}
                                            gap={2.5}
                                            opacity={
                                                isDone
                                                    ? 0.55
                                                    : isCurrent
                                                      ? 1
                                                      : 0.4
                                            }
                                        >
                                            {isDone ? (
                                                <CheckCircle2
                                                    size={14}
                                                    color="#059669"
                                                    style={{ flexShrink: 0 }}
                                                />
                                            ) : isCurrent ? (
                                                <Box
                                                    w="14px"
                                                    h="14px"
                                                    borderRadius="full"
                                                    bg="blue.600"
                                                    flexShrink={0}
                                                />
                                            ) : (
                                                <Circle
                                                    size={14}
                                                    color="#3A4658"
                                                    style={{ flexShrink: 0 }}
                                                />
                                            )}
                                            <Text
                                                fontSize="12.5px"
                                                color={
                                                    isCurrent
                                                        ? "gray.50"
                                                        : "gray.400"
                                                }
                                                fontWeight={
                                                    isCurrent ? "600" : "400"
                                                }
                                                lineClamp={1}
                                            >
                                                Q{i + 1}. {q.text}
                                            </Text>
                                        </HStack>
                                    )
                                })}
                            </VStack>
                        </Box>
                    </VStack>
                </Flex>

                {/* 하단 컨트롤 바 */}
                <Flex
                    w="100%"
                    h="84px"
                    flexShrink={0}
                    align="center"
                    justify="center"
                    gap={4}
                    borderTop="1px solid"
                    borderColor="gray.700"
                    zIndex={10}
                >
                    {subStage === "THINKING" ? (
                        <Button
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.700" }}
                            onClick={handleSkipThinking}
                            fontWeight="700"
                            px={7}
                            h="48px"
                            borderRadius="xl"
                        >
                            <Play size={16} style={{ marginRight: "8px" }} />
                            바로 답변 시작
                        </Button>
                    ) : (
                        <Button
                            bg="blue.600"
                            color="white"
                            _hover={{ bg: "blue.700" }}
                            fontWeight="700"
                            px={7}
                            h="48px"
                            borderRadius="xl"
                            onClick={handleFinishAnswer}
                            disabled={isFinishingAnswer}
                        >
                            답변 완료
                            <Check size={16} style={{ marginLeft: "8px" }} />
                        </Button>
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
                bg="gray.50"
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
                        bg="white"
                        color="gray.900"
                        borderColor="gray.200"
                        p={8}
                        borderRadius="2xl"
                        boxShadow="xl"
                    >
                        <VStack gap={6} align="center" textAlign="center">
                            <Center
                                w="72px"
                                h="72px"
                                bg="blue.50"
                                borderRadius="full"
                            >
                                <Spinner size="xl" color="blue.500" />
                            </Center>

                            <VStack gap={2}>
                                <Text fontSize="24px" fontWeight="800">
                                    면접 답변 종합 분석 중
                                </Text>
                                <Text fontSize="14px" color="gray.500">
                                    녹화된 답변 음성을 텍스트로 변환하고 AI가
                                    채점 및 피드백을 생성하고 있습니다.
                                </Text>
                            </VStack>

                            <Box
                                w="100%"
                                bg="gray.50"
                                p={5}
                                borderRadius="xl"
                                border="1px solid"
                                borderColor="gray.200"
                            >
                                <Flex justify="space-between" mb={2}>
                                    <Text
                                        fontSize="13px"
                                        fontWeight="700"
                                        color="gray.500"
                                    >
                                        답변 처리 진행률
                                    </Text>
                                    <Text
                                        fontSize="13px"
                                        fontWeight="800"
                                        color="blue.600"
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
                                    <Progress.Track bg="gray.200">
                                        <Progress.Range bg="blue.500" />
                                    </Progress.Track>
                                </Progress.Root>
                            </Box>

                            <Text fontSize="12px" color="gray.500">
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
                bg="gray.50"
                align="center"
                justify="center"
                p={6}
            >
                <Card.Root
                    maxW="500px"
                    bg="white"
                    color="gray.900"
                    borderColor="red.200"
                    p={8}
                    borderRadius="2xl"
                    boxShadow="xl"
                >
                    <VStack gap={6} align="center" textAlign="center">
                        <Center
                            w="64px"
                            h="64px"
                            bg="red.50"
                            borderRadius="full"
                        >
                            <AlertTriangle size={32} color="red.500" />
                        </Center>
                        <VStack gap={2}>
                            <Text fontSize="22px" fontWeight="800">
                                리포트 생성 실패
                            </Text>
                            <Text fontSize="14px" color="gray.500">
                                {reportErrorMessage ||
                                    "종합 리포트를 생성하는 도중 오류가 발생했습니다."}
                            </Text>
                        </VStack>
                        <HStack gap={4} w="100%">
                            <Button
                                flex={1}
                                variant="outline"
                                borderColor="gray.300"
                                color="gray.700"
                                onClick={() => navigate("/mock-interview")}
                            >
                                나가기
                            </Button>
                            <Button
                                flex={1}
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: "blue.700" }}
                                onClick={processAllAnswersInBatch}
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
                bg="gray.50"
                color="gray.900"
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
                            <Text
                                fontSize={{ base: "24px", md: "30px" }}
                                fontWeight="800"
                            >
                                면접 결과 종합 평가
                            </Text>
                            <HStack fontSize="14px" color="gray.500" gap={2}>
                                <Text>
                                    목표 직무{" "}
                                    <b
                                        style={{
                                            color: "#374151",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {config?.selectedJobs?.join(", ") ||
                                            "개발 직무"}
                                    </b>
                                </Text>
                                <Text color="gray.300">·</Text>
                                <Text>
                                    희망 기업{" "}
                                    <b
                                        style={{
                                            color: "#374151",
                                            fontWeight: 600,
                                        }}
                                    >
                                        {config?.targetCompany || "지정 기업"}
                                    </b>
                                </Text>
                                <Text color="gray.300">·</Text>
                                <Text fontFamily="mono">
                                    {new Date().toLocaleDateString("ko-KR", {
                                        year: "numeric",
                                        month: "2-digit",
                                        day: "2-digit",
                                    })}
                                </Text>
                            </HStack>
                        </VStack>
                        <HStack gap={3}>
                            <Button
                                variant="outline"
                                borderColor="gray.300"
                                color="gray.700"
                                onClick={() => navigate("/mock-interview")}
                            >
                                <RotateCcw
                                    size={16}
                                    style={{ marginRight: "6px" }}
                                />
                                다시 면접보기
                            </Button>
                            <Button
                                bg="blue.600"
                                color="white"
                                _hover={{ bg: "blue.700" }}
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

                    {/* 핵심 지표 요약 */}
                    <Flex gap={4} mb={8} wrap="wrap">
                        <StatTile
                            label="종합 점수"
                            value={reportData.overallScore}
                            unit="/ 100"
                            sub={scoreLabel(reportData.overallScore)}
                        />
                        <StatTile
                            label="답변한 질문"
                            value={reportData.questionEvaluations.length}
                            unit="개"
                        />
                        <StatTile
                            label="주요 강점"
                            value={reportData.strengths.length}
                            unit="개"
                        />
                        <StatTile
                            label="평균 답변 길이"
                            value={deliveryMetrics ? deliveryMetrics.avgAnswerSec : "—"}
                            unit={deliveryMetrics ? "초" : undefined}
                        />
                    </Flex>

                    {/* 면접 영상 다시보기 */}
                    <Card.Root
                        bg="white"
                        borderColor="gray.200"
                        borderRadius="2xl"
                        p={6}
                        mb={8}
                        boxShadow="sm"
                    >
                        <Flex justify="space-between" align="center" mb={4}>
                            <Text fontSize="16px" fontWeight="700">
                                면접 영상 다시보기
                            </Text>
                            {isUploadingSession ? (
                                <HStack color="blue.600" gap={2}>
                                    <Spinner size="xs" />
                                    <Text fontSize="12px" fontWeight="500">
                                        클라우드에 저장하는 중...
                                    </Text>
                                </HStack>
                            ) : sessionId ? (
                                <HStack gap={1} color="green.600">
                                    <CheckCircle2 size={13} />
                                    <Text fontSize="12px" fontWeight="600">
                                        마이페이지 저장 완료
                                    </Text>
                                </HStack>
                            ) : null}
                        </Flex>

                        {localVideoUrl || sessionId ? (
                            <VStack align="stretch" gap={4}>
                                <Box
                                    borderRadius="xl"
                                    overflow="hidden"
                                    bg="black"
                                    maxW="720px"
                                    mx="auto"
                                    w="100%"
                                >
                                    <video
                                        key={
                                            localVideoUrl ||
                                            sessionId ||
                                            "replay-video"
                                        }
                                        ref={replayVideoRef}
                                        controls
                                        playsInline
                                        preload="auto"
                                        src={
                                            localVideoUrl ||
                                            (sessionId
                                                ? `/api/interview-sessions/${sessionId}/video?token=${localStorage.getItem("token") || ""}`
                                                : "")
                                        }
                                        style={{
                                            width: "100%",
                                            display: "block",
                                            maxHeight: "420px",
                                            backgroundColor: "#000",
                                        }}
                                    />
                                </Box>
                                {chapters.length > 0 && (
                                    <Box overflowX="auto">
                                        <HStack gap={2} pb={1}>
                                            {chapters.map((ch, i) => (
                                                <Button
                                                    key={ch.index}
                                                    size="sm"
                                                    variant="outline"
                                                    borderColor="gray.300"
                                                    color="gray.700"
                                                    flexShrink={0}
                                                    _hover={{
                                                        bg: "blue.600",
                                                        borderColor: "blue.600",
                                                        color: "white",
                                                    }}
                                                    onClick={() => {
                                                        if (
                                                            replayVideoRef.current
                                                        ) {
                                                            replayVideoRef.current.currentTime =
                                                                ch.startTime
                                                            replayVideoRef.current
                                                                .play()
                                                                .catch(() => {})
                                                        }
                                                    }}
                                                >
                                                    질문 {i + 1}
                                                </Button>
                                            ))}
                                        </HStack>
                                    </Box>
                                )}
                            </VStack>
                        ) : (
                            <Text
                                color="gray.500"
                                fontSize="14px"
                                py={4}
                                textAlign="center"
                            >
                                이 면접의 영상은 저장되지 않았습니다.
                            </Text>
                        )}
                    </Card.Root>

                    {/* 역량 프로필 + 딜리버리 지표 */}
                    <Flex
                        direction={{ base: "column", xl: "row" }}
                        gap={6}
                        mb={8}
                        align="stretch"
                    >
                        {/* 역량 레이더 차트 */}
                        <Card.Root
                            flex={{ xl: "0 0 480px" }}
                            bg="white"
                            borderColor="gray.200"
                            borderRadius="2xl"
                            p={7}
                            boxShadow="sm"
                        >
                            <Flex
                                justify="space-between"
                                align="flex-start"
                                mb={1}
                            >
                                <Box>
                                    <Text
                                        fontSize="15px"
                                        fontWeight="700"
                                        color="gray.900"
                                    >
                                        역량 프로필
                                    </Text>
                                    <Text
                                        fontSize="12.5px"
                                        color="gray.400"
                                        mt="2px"
                                    >
                                        6개 역량 축 · 권장 기준선 대비 비교
                                    </Text>
                                </Box>
                                <VStack gap={0} align="flex-end">
                                    <HStack gap={1} align="baseline">
                                        <Text
                                            fontFamily="mono"
                                            fontSize="28px"
                                            fontWeight="700"
                                            color="gray.900"
                                        >
                                            {reportData.overallScore}
                                        </Text>
                                        <Text
                                            fontSize="14px"
                                            color="gray.400"
                                            fontWeight="600"
                                        >
                                            /100
                                        </Text>
                                    </HStack>
                                    <Text
                                        fontSize="12px"
                                        fontWeight="700"
                                        color="blue.600"
                                        mt="2px"
                                    >
                                        {scoreLabel(reportData.overallScore)}
                                    </Text>
                                </VStack>
                            </Flex>

                            {(() => {
                                const competencies =
                                    reportData.competencies ||
                                    DEFAULT_COMPETENCIES
                                const benchmarkValue = 70
                                const candidatePoints = RADAR_AXES.map(
                                    (axis, i) =>
                                        radarPoint(i, competencies[axis.key]),
                                )
                                    .map((p) => `${p.x},${p.y}`)
                                    .join(" ")
                                const benchmarkPoints = RADAR_AXES.map((_, i) =>
                                    radarPoint(i, benchmarkValue),
                                )
                                    .map((p) => `${p.x},${p.y}`)
                                    .join(" ")
                                const gridRings = [40, 80, 120, 160].map((r) =>
                                    RADAR_AXES.map((_, i) => {
                                        const p = radarPoint(i, (r / 160) * 100)
                                        return `${p.x},${p.y}`
                                    }).join(" "),
                                )
                                const labelPos: [
                                    number,
                                    number,
                                    "start" | "middle" | "end",
                                ][] = [
                                    [200, 22, "middle"],
                                    [360, 108, "start"],
                                    [360, 272, "start"],
                                    [200, 382, "middle"],
                                    [40, 272, "end"],
                                    [40, 108, "end"],
                                ]
                                return (
                                    <Flex justify="center" mt={2}>
                                        <svg
                                            width="360"
                                            height="360"
                                            viewBox="0 0 400 400"
                                        >
                                            {gridRings.map((pts, i) => (
                                                <polygon
                                                    key={i}
                                                    points={pts}
                                                    fill="none"
                                                    stroke={
                                                        i ===
                                                        gridRings.length - 1
                                                            ? "#E5E7EB"
                                                            : "#EEF0F3"
                                                    }
                                                    strokeWidth={
                                                        i ===
                                                        gridRings.length - 1
                                                            ? 1.5
                                                            : 1
                                                    }
                                                />
                                            ))}
                                            {RADAR_AXES.map((_, i) => {
                                                const p = radarPoint(i, 100)
                                                return (
                                                    <line
                                                        key={i}
                                                        x1={200}
                                                        y1={200}
                                                        x2={p.x}
                                                        y2={p.y}
                                                        stroke="#E5E7EB"
                                                        strokeWidth={1}
                                                    />
                                                )
                                            })}
                                            <polygon
                                                points={benchmarkPoints}
                                                fill="none"
                                                stroke="#9CA3AF"
                                                strokeWidth={1.75}
                                                strokeDasharray="4 3"
                                            />
                                            <polygon
                                                points={candidatePoints}
                                                fill="#2563EB"
                                                fillOpacity={0.14}
                                                stroke="#2563EB"
                                                strokeWidth={2.25}
                                                strokeLinejoin="round"
                                            />
                                            {RADAR_AXES.map((axis, i) => {
                                                const p = radarPoint(
                                                    i,
                                                    competencies[axis.key],
                                                )
                                                return (
                                                    <circle
                                                        key={axis.key}
                                                        cx={p.x}
                                                        cy={p.y}
                                                        r={4}
                                                        fill="#2563EB"
                                                    />
                                                )
                                            })}
                                            {RADAR_AXES.map((axis, i) => {
                                                const [lx, ly, anchor] =
                                                    labelPos[i]
                                                const value =
                                                    competencies[axis.key]
                                                return (
                                                    <g key={axis.key}>
                                                        <text
                                                            x={lx}
                                                            y={ly}
                                                            textAnchor={anchor}
                                                            fontFamily="Noto Sans KR"
                                                            fontSize="12.5"
                                                            fontWeight="700"
                                                            fill="#374151"
                                                        >
                                                            {axis.label}
                                                        </text>
                                                        <text
                                                            x={lx}
                                                            y={ly + 15}
                                                            textAnchor={anchor}
                                                            fontFamily="JetBrains Mono"
                                                            fontSize="12"
                                                            fontWeight="600"
                                                            fill={
                                                                value < 60
                                                                    ? "#EA580C"
                                                                    : "#2563EB"
                                                            }
                                                        >
                                                            {value}
                                                        </text>
                                                    </g>
                                                )
                                            })}
                                        </svg>
                                    </Flex>
                                )
                            })()}

                            <HStack justify="center" gap={5} mt={1}>
                                <HStack gap={1.5}>
                                    <Box
                                        w="12px"
                                        h="12px"
                                        borderRadius="3px"
                                        bg="blue.600"
                                    />
                                    <Text
                                        fontSize="12.5px"
                                        color="gray.600"
                                        fontWeight="600"
                                    >
                                        내 점수
                                    </Text>
                                </HStack>
                                <HStack gap={1.5}>
                                    <Box
                                        w="12px"
                                        h="0"
                                        borderTop="2px dashed"
                                        borderColor="gray.400"
                                    />
                                    <Text
                                        fontSize="12.5px"
                                        color="gray.600"
                                        fontWeight="600"
                                    >
                                        권장 기준선
                                    </Text>
                                </HStack>
                            </HStack>
                        </Card.Root>

                        {/* 딜리버리 지표 */}
                        <Card.Root
                            flex={1}
                            bg="white"
                            borderColor="gray.200"
                            borderRadius="2xl"
                            p={7}
                            boxShadow="sm"
                        >
                            <Text
                                fontSize="15px"
                                fontWeight="700"
                                color="gray.900"
                            >
                                딜리버리 지표
                            </Text>
                            <Text
                                fontSize="12.5px"
                                color="gray.400"
                                mt="2px"
                                mb={5}
                            >
                                음성·발화 분석 기반 전달 방식 측정값
                            </Text>

                            {deliveryMetrics ? (
                                <VStack align="stretch" gap={5}>
                                    {[
                                        {
                                            label: "말하기 속도",
                                            value: deliveryMetrics.wpm,
                                            unit: "WPM",
                                            domainMax: 220,
                                            bandStart: 100,
                                            bandEnd: 180,
                                        },
                                        {
                                            label: "필러워드 빈도",
                                            value: deliveryMetrics.fillerPerMinute,
                                            unit: "회/분",
                                            domainMax: 10,
                                            bandStart: 0,
                                            bandEnd: 2,
                                        },
                                        {
                                            label: "평균 답변 길이",
                                            value: deliveryMetrics.avgAnswerSec,
                                            unit: "초",
                                            domainMax: 120,
                                            bandStart: 30,
                                            bandEnd: 90,
                                        },
                                        {
                                            label: "침묵 비율",
                                            value: deliveryMetrics.silenceRatio,
                                            unit: "%",
                                            domainMax: 60,
                                            bandStart: 0,
                                            bandEnd: 20,
                                        },
                                    ].map((metric) => {
                                        const ok =
                                            metric.value >= metric.bandStart &&
                                            metric.value <= metric.bandEnd
                                        const clampedValue = Math.max(
                                            0,
                                            Math.min(
                                                metric.domainMax,
                                                metric.value,
                                            ),
                                        )
                                        const markerPct =
                                            (clampedValue / metric.domainMax) *
                                            100
                                        const bandLeftPct =
                                            (metric.bandStart /
                                                metric.domainMax) *
                                            100
                                        const bandWidthPct =
                                            ((metric.bandEnd -
                                                metric.bandStart) /
                                                metric.domainMax) *
                                            100
                                        return (
                                            <Box key={metric.label}>
                                                <Flex
                                                    justify="space-between"
                                                    align="baseline"
                                                    mb={2}
                                                >
                                                    <Text
                                                        fontSize="13.5px"
                                                        fontWeight="600"
                                                        color="gray.700"
                                                    >
                                                        {metric.label}
                                                    </Text>
                                                    <HStack
                                                        gap={2}
                                                        align="baseline"
                                                    >
                                                        <HStack
                                                            gap={1}
                                                            align="baseline"
                                                        >
                                                            <Text
                                                                fontFamily="mono"
                                                                fontSize="18px"
                                                                fontWeight="700"
                                                                color="gray.900"
                                                            >
                                                                {metric.value}
                                                            </Text>
                                                            <Text
                                                                fontSize="12px"
                                                                color="gray.400"
                                                                fontWeight="600"
                                                            >
                                                                {metric.unit}
                                                            </Text>
                                                        </HStack>
                                                        <Badge
                                                            fontSize="11px"
                                                            fontWeight="700"
                                                            color={
                                                                ok
                                                                    ? "emerald.700"
                                                                    : "orange.700"
                                                            }
                                                            bg={
                                                                ok
                                                                    ? "emerald.50"
                                                                    : "orange.50"
                                                            }
                                                            px={2}
                                                            py="1px"
                                                            borderRadius="full"
                                                        >
                                                            {ok
                                                                ? "적정"
                                                                : "주의"}
                                                        </Badge>
                                                    </HStack>
                                                </Flex>
                                                <Box
                                                    position="relative"
                                                    h="8px"
                                                    bg="gray.100"
                                                    borderRadius="full"
                                                >
                                                    <Box
                                                        position="absolute"
                                                        left={`${bandLeftPct}%`}
                                                        w={`${bandWidthPct}%`}
                                                        h="8px"
                                                        bg="emerald.50"
                                                        borderRadius="full"
                                                    />
                                                    <Box
                                                        position="absolute"
                                                        left={`${markerPct}%`}
                                                        top="-3px"
                                                        w="3px"
                                                        h="14px"
                                                        bg={
                                                            ok
                                                                ? "blue.600"
                                                                : "orange.600"
                                                        }
                                                        borderRadius="2px"
                                                        transform="translateX(-50%)"
                                                    />
                                                </Box>
                                            </Box>
                                        )
                                    })}
                                    <Text
                                        fontSize="12px"
                                        color="gray.400"
                                        lineHeight="1.6"
                                        pt={2}
                                        borderTop="1px solid"
                                        borderColor="gray.100"
                                    >
                                        발화가 감지된 답변만 집계한 실측값이며,
                                        음영 구간은 일반적으로 권장되는 참고
                                        범위입니다.
                                    </Text>
                                </VStack>
                            ) : (
                                <Text
                                    color="gray.400"
                                    fontSize="13.5px"
                                    py={8}
                                    textAlign="center"
                                >
                                    딜리버리 지표를 계산할 수 있는 답변이
                                    부족합니다.
                                </Text>
                            )}
                        </Card.Root>
                    </Flex>

                    {/* 종합 총평 */}
                    <Card.Root
                        bg="white"
                        borderColor="gray.200"
                        borderRadius="2xl"
                        p={7}
                        mb={8}
                        boxShadow="sm"
                    >
                        <HStack gap={2} mb={2.5}>
                            <Award size={18} color="#2563EB" />
                            <Text
                                fontSize="15px"
                                fontWeight="700"
                                color="gray.900"
                            >
                                종합 총평
                            </Text>
                        </HStack>
                        <Text
                            fontSize="14.5px"
                            color="gray.700"
                            lineHeight="1.75"
                        >
                            {reportData.overallFeedback}
                        </Text>
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
                            bg="white"
                            borderColor="gray.200"
                            borderRadius="2xl"
                            p={6}
                        >
                            <HStack mb={4}>
                                <TrendingUp size={20} color="emerald.600" />
                                <Text
                                    fontSize="16px"
                                    fontWeight="800"
                                    color="emerald.600"
                                >
                                    주요 강점 (Strengths)
                                </Text>
                            </HStack>
                            <VStack align="start" gap={2}>
                                {reportData.strengths.map((st, i) => (
                                    <HStack key={i} align="start" gap={2}>
                                        <Box color="emerald.600" mt="2px" flexShrink={0}>
                                            <CheckCircle2 size={15} />
                                        </Box>
                                        <Text fontSize="14px" color="gray.700">
                                            {st}
                                        </Text>
                                    </HStack>
                                ))}
                            </VStack>
                        </Card.Root>

                        {/* 보완점 */}
                        <Card.Root
                            flex={1}
                            bg="white"
                            borderColor="gray.200"
                            borderRadius="2xl"
                            p={6}
                        >
                            <HStack mb={4}>
                                <AlertCircle size={20} color="orange.600" />
                                <Text
                                    fontSize="16px"
                                    fontWeight="800"
                                    color="orange.600"
                                >
                                    개선 권장사항 (Improvements)
                                </Text>
                            </HStack>
                            <VStack align="start" gap={2}>
                                {reportData.improvements.map((im, i) => (
                                    <HStack key={i} align="start" gap={2}>
                                        <Text
                                            color="orange.600"
                                            fontWeight="700"
                                        >
                                            •
                                        </Text>
                                        <Text fontSize="14px" color="gray.700">
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

                        <VStack w="100%" gap={3}>
                            {reportData.questionEvaluations.map(
                                (evalItem, index) => {
                                    const isFailed =
                                        evalItem.status === "FAILED"
                                    const isExpanded =
                                        expandedQuestionIndex === index

                                    return (
                                        <Card.Root
                                            key={index}
                                            w="100%"
                                            bg="white"
                                            borderColor={
                                                isFailed
                                                    ? "red.200"
                                                    : "gray.200"
                                            }
                                            borderRadius="xl"
                                            overflow="hidden"
                                            p={0}
                                        >
                                            <Flex
                                                justify="space-between"
                                                align="center"
                                                px={5}
                                                py={4}
                                                cursor="pointer"
                                                _hover={{ bg: "gray.50" }}
                                                onClick={() =>
                                                    setExpandedQuestionIndex(
                                                        isExpanded
                                                            ? null
                                                            : index,
                                                    )
                                                }
                                            >
                                                <HStack gap={3} minW={0}>
                                                    <Badge
                                                        fontFamily="mono"
                                                        bg="blue.600"
                                                        color="white"
                                                        px={2.5}
                                                        py={0.5}
                                                        borderRadius="md"
                                                        fontSize="12px"
                                                        flexShrink={0}
                                                    >
                                                        Q{index + 1}
                                                    </Badge>
                                                    <Text
                                                        fontSize="14.5px"
                                                        fontWeight="700"
                                                        color="gray.900"
                                                        lineClamp={1}
                                                    >
                                                        {evalItem.questionText}
                                                    </Text>
                                                </HStack>
                                                <HStack
                                                    gap={3.5}
                                                    flexShrink={0}
                                                >
                                                    {isFailed ? (
                                                        <Badge
                                                            bg="red.50"
                                                            color="red.700"
                                                            px={2.5}
                                                            py={1}
                                                            borderRadius="md"
                                                            fontSize="12px"
                                                        >
                                                            처리 실패
                                                        </Badge>
                                                    ) : (
                                                        <Text
                                                            fontFamily="mono"
                                                            fontSize="14px"
                                                            fontWeight="700"
                                                            color="emerald.600"
                                                        >
                                                            {evalItem.score} /
                                                            10
                                                        </Text>
                                                    )}
                                                    <ChevronDown
                                                        size={16}
                                                        color="#9CA3AF"
                                                        style={{
                                                            transform:
                                                                isExpanded
                                                                    ? "rotate(180deg)"
                                                                    : "none",
                                                            transition:
                                                                "transform 0.15s ease",
                                                        }}
                                                    />
                                                </HStack>
                                            </Flex>

                                            {!isExpanded ? null : (
                                                <VStack
                                                    align="start"
                                                    gap={3}
                                                    px={5}
                                                    pb={5}
                                                    pt={1}
                                                    borderTop="1px solid"
                                                    borderColor="gray.100"
                                                >
                                                    {/* 지원자 답변 텍스트 */}
                                                    <Box
                                                        w="100%"
                                                        bg="gray.50"
                                                        p={3.5}
                                                        borderRadius="lg"
                                                        border="1px solid"
                                                        borderColor="gray.200"
                                                    >
                                                        <Text
                                                            fontSize="12px"
                                                            fontWeight="700"
                                                            color="gray.500"
                                                            mb={1}
                                                        >
                                                            내 답변 (STT 변환)
                                                        </Text>
                                                        <Text
                                                            fontSize="14px"
                                                            color="gray.700"
                                                        >
                                                            {evalItem.answerText ||
                                                                "(답변 내용 없음)"}
                                                        </Text>
                                                    </Box>

                                                    {/* 피드백 및 모범 답변 */}
                                                    {!isFailed && (
                                                        <>
                                                            <Box w="100%">
                                                                <HStack gap={1.5} mb={1} color="blue.600">
                                                                    <Lightbulb size={13} />
                                                                    <Text
                                                                        fontSize="13px"
                                                                        fontWeight="700"
                                                                    >
                                                                        AI 평가 및 피드백
                                                                    </Text>
                                                                </HStack>
                                                                <Text
                                                                    fontSize="13px"
                                                                    color="gray.700"
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
                                                                    bg="blue.50"
                                                                    p={3.5}
                                                                    borderRadius="lg"
                                                                    border="1px solid"
                                                                    borderColor="blue.100"
                                                                >
                                                                    <HStack gap={1.5} mb={1} color="blue.700">
                                                                        <Sparkles size={12} />
                                                                        <Text
                                                                            fontSize="12px"
                                                                            fontWeight="700"
                                                                        >
                                                                            모범 답변 가이드
                                                                        </Text>
                                                                    </HStack>
                                                                    <Text
                                                                        fontSize="13px"
                                                                        color="gray.700"
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
                                            )}
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
