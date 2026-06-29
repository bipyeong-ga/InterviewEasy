import React, { useEffect, useRef, useState } from "react"
import { useNavigate, useLocation } from "react-router"
import { useAuth } from "../../hooks/useAuth"
import {
    Box,
    Button,
    Text,
    Center,
    HStack,
    VStack,
    Input,
    Flex,
    Dialog,
    Portal,
    CloseButton,
} from "@chakra-ui/react"
import Header from "../organisms/Header"
import { motion, AnimatePresence } from "motion/react"
import {
    ArrowLeft,
    ArrowRight,
    FileText,
    UploadCloud,
    CheckCircle2,
    Video,
    Mic,
    Check,
    Briefcase,
    MessageSquare,
    Shuffle,
} from "lucide-react"

const TAGS = [
    "프론트엔드",
    "백엔드",
    "풀스택",
    "iOS",
    "Android",
    "데이터 분석",
    "ML 엔지니어",
    "DevOps",
    "클라우드",
    "보안",
    "게임 개발",
    "기타",
]

const STEP_LABELS = [
    "직무 선택",
    "문서 연동",
    "면접 유형",
    "희망 기업",
    "질문 개수",
    "환경 확인",
]

const MockInterviewTemplate: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { isLoggedIn, loading } = useAuth()
    const [isModeModalOpen, setIsModeModalOpen] = useState(false)

    const [step, setStep] = useState(0)
    const [selectedJobs, setSelectedJobs] = useState<string[]>([])
    const [customJob, setCustomJob] = useState("")
    const [selectedResume, setSelectedResume] = useState<string | null>(null)
    const [interviewType, setInterviewType] = useState<string>("mixed") // default 'mixed' to match selection in screenshot
    const [targetCompany, setTargetCompany] = useState("")
    const [resumes, setResumes] = useState<any[]>([])

    useEffect(() => {
        const fetchResumes = async () => {
            if (!isLoggedIn) return
            try {
                const token = localStorage.getItem("token")
                const resp = await fetch("/api/resumes", {
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    }
                })
                if (resp.ok) {
                    const data = await resp.json()
                    setResumes(data)
                }
            } catch (err) {
                console.error("Failed to fetch resumes:", err)
            }
        }
        fetchResumes()
    }, [isLoggedIn])

    useEffect(() => {
        if (!loading && !isLoggedIn) {
            const redirectPath = encodeURIComponent(location.pathname + location.search)
            navigate(`/login?redirect=${redirectPath}`)
        }
    }, [loading, isLoggedIn, navigate, location])

    // (Early returns moved below hooks)
    const [questionCount, setQuestionCount] = useState<number>(10)
    const [cameraOk, setCameraOk] = useState(false)
    const [micOk, setMicOk] = useState(false)
    const [checkingPermissions, setCheckingPermissions] = useState(false)
    const [permissionError, setPermissionError] = useState("")
    const [cameraStatus, setCameraStatus] = useState("권한 확인 전")
    const [micStatus, setMicStatus] = useState("권한 확인 전")
    const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([])
    const [selectedVideoDeviceId, setSelectedVideoDeviceId] = useState("")
    const videoRef = useRef<HTMLVideoElement | null>(null)
    const streamRef = useRef<MediaStream | null>(null)

    const [isDragActive, setIsDragActive] = useState(false)
    const [isUploading, setIsUploading] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleFileDrop = async (file: File) => {
        if (!file) return
        setIsUploading(true)
        try {
            const token = localStorage.getItem("token")
            // 1. 새 이력서 생성
            const createResp = await fetch("/api/resumes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({
                    title: `업로드된 이력서 (${file.name})`,
                }),
            })

            if (!createResp.ok) throw new Error("이력서 생성에 실패했습니다.")
            const newResume = await createResp.json()

            // 2. 파일 업로드
            const formData = new FormData()
            formData.append("file", file)
            const uploadResp = await fetch(`/api/resumes/${newResume.id}/upload`, {
                method: "POST",
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: formData,
            })

            if (!uploadResp.ok) throw new Error("파일 업로드에 실패했습니다.")
            const updatedResume = await uploadResp.json()

            // 3. 상태 업데이트
            setResumes((prev) => [updatedResume, ...prev])
            setSelectedResume(updatedResume.id.toString())
            alert("이력서가 성공적으로 업로드되었습니다.")
        } catch (err: any) {
            alert(err.message)
            console.error(err)
        } finally {
            setIsUploading(false)
        }
    }

    const onDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragActive(true)
    }

    const onDragLeave = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragActive(false)
    }

    const onDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragActive(false)
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleFileDrop(e.dataTransfer.files[0])
        }
    }

    const stopCameraStream = () => {
        streamRef.current?.getTracks().forEach((track) => track.stop())
        streamRef.current = null
        if (videoRef.current) {
            videoRef.current.srcObject = null
        }
    }

    const toggleJob = (tag: string) => {
        setSelectedJobs((prev) =>
            prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
        )
    }

    const firstRow = TAGS.slice(0, 6)
    const secondRow = TAGS.slice(6)

    const handleNext = () => {
        setStep((prev) => Math.min(prev + 1, STEP_LABELS.length - 1))
    }

    const handlePrev = () => {
        setStep((prev) => Math.max(prev - 1, 0))
    }

    const startCameraPreview = async (deviceId?: string) => {
        if (
            typeof navigator === "undefined" ||
            !navigator.mediaDevices?.getUserMedia
        ) {
            setCameraOk(false)
            setCameraStatus("브라우저 미지원")
            return
        }

        setCameraOk(false)
        setCameraStatus("카메라 연결 중")
        setPermissionError("")
        stopCameraStream()

        try {
            const cameraStream = await navigator.mediaDevices.getUserMedia({
                video: deviceId ? { deviceId: { exact: deviceId } } : true,
                audio: false,
            })

            streamRef.current = cameraStream

            const videoEl = videoRef.current
            if (videoEl) {
                videoEl.muted = true
                videoEl.playsInline = true
                videoEl.autoplay = true
                videoEl.srcObject = cameraStream
                videoEl.onloadeddata = () => {
                    videoEl.play().catch(() => undefined)
                }
                videoEl.oncanplay = () => {
                    videoEl.play().catch(() => undefined)
                }
                videoEl.onloadedmetadata = () => {
                    videoEl.play().catch(() => undefined)
                }
                await videoEl.play().catch(() => undefined)
            }

            setCameraOk(true)
            setCameraStatus(
                deviceId ? "선택한 카메라 연결됨" : "기본 카메라 연결됨",
            )
        } catch (error) {
            setCameraOk(false)
            setCameraStatus("카메라 연결 실패")
            setPermissionError(
                error instanceof Error
                    ? error.message
                    : "카메라 미리보기를 불러   오지 못했어요.",
            )
        }
    }

    const checkMicrophone = async () => {
        if (
            typeof navigator === "undefined" ||
            !navigator.mediaDevices?.getUserMedia
        ) {
            setMicOk(false)
            setMicStatus("브라우저 미지원")
            return
        }

        setMicOk(false)
        setMicStatus("마이크 연결 중")

        try {
            const micStream = await navigator.mediaDevices.getUserMedia({
                video: false,
                audio: true,
            })
            micStream.getTracks().forEach((track) => track.stop())
            setMicOk(true)
            setMicStatus("마이크 연결됨")
        } catch (error) {
            setMicOk(false)
            setMicStatus("마이크 연결 실패")
            setPermissionError(
                error instanceof Error
                    ? `마이크: ${error.message}`
                    : "마이크 권한을 허용해야 해요.",
            )
        }
    }

    useEffect(() => {
        if (step !== 5) {
            stopCameraStream()

            return
        }

        const requestPermissions = async () => {
            setCheckingPermissions(true)
            setPermissionError("")
            setCameraOk(false)
            setMicOk(false)
            setCameraStatus("카메라 확인 중")
            setMicStatus("마이크 확인 중")

            if (
                typeof navigator === "undefined" ||
                !navigator.mediaDevices?.getUserMedia
            ) {
                setPermissionError(
                    "이 브라우저에서는 카메라/마이크 권한 확인을 지원하지 않아요.",
                )
                setCheckingPermissions(false)
                return
            }

            await startCameraPreview(selectedVideoDeviceId || undefined)
            await checkMicrophone()

            try {
                const devices = await navigator.mediaDevices.enumerateDevices()
                const cameras = devices.filter(
                    (device) => device.kind === "videoinput",
                )
                setVideoDevices(cameras)

                if (!selectedVideoDeviceId && cameras.length > 0) {
                    setSelectedVideoDeviceId(cameras[0].deviceId)
                }
            } catch {
                setVideoDevices([])
            }

            setCheckingPermissions(false)
        }

        void requestPermissions()

        return () => {
            stopCameraStream()
        }
    }, [step])

    useEffect(() => {
        if (step !== 5 || !selectedVideoDeviceId) {
            return
        }

        void startCameraPreview(selectedVideoDeviceId)
    }, [step, selectedVideoDeviceId])

    const canStartInterview = cameraOk && micOk && !checkingPermissions

    const isStep0Valid = selectedJobs.length > 0 && (!selectedJobs.includes("기타") || customJob.trim() !== "")
    const isNextDisabled = step === 0 && !isStep0Valid

    if (loading) {
        return (
            <Center minH="100vh">
                <Text>로딩 중...</Text>
            </Center>
        )
    }

    if (!isLoggedIn) {
        return null
    }

    return (
        <Box bg="#F8FAFC" minH="100vh" overflow="hidden">
            <Center
                h="calc(100vh - 72px)"
                px={8}
                pt={2}
                pb={2}
                alignItems="flex-start"
            >
                <Box w="full" maxW="760px" mt={2}>
                    <VStack gap={4} align="stretch">
                        {/* STEPPER */}
                        <Box w="full" px={2}>
                            <HStack
                                align="flex-start"
                                gap={0}
                                w="full"
                                justify="space-between"
                            >
                                {STEP_LABELS.map((label, idx) => {
                                    const isCurrent = idx === step
                                    const isCompleted = idx < step
                                    const active = isCurrent || isCompleted

                                    return (
                                        <React.Fragment key={idx}>
                                            <VStack
                                                flexShrink={0}
                                                gap={1.5}
                                                align="center"
                                                w="68px"
                                            >
                                                <Center
                                                    w="32px"
                                                    h="32px"
                                                    borderRadius="full"
                                                    border="2px solid"
                                                    borderColor={
                                                        active
                                                            ? "#2563EB"
                                                            : "#E2E8F0"
                                                    }
                                                    bg={
                                                        isCurrent
                                                            ? "#2563EB"
                                                            : "white"
                                                    }
                                                    color={
                                                        isCurrent
                                                            ? "white"
                                                            : active
                                                                ? "#2563EB"
                                                                : "#94A3B8"
                                                    }
                                                    fontWeight="bold"
                                                    fontSize="xs"
                                                    transition="all 0.25s ease"
                                                    boxShadow={
                                                        isCurrent
                                                            ? "0 0 10px rgba(37, 99, 235, 0.15)"
                                                            : "none"
                                                    }
                                                >
                                                    {isCompleted ? (
                                                        <Check size={16} />
                                                    ) : (
                                                        idx + 1
                                                    )}
                                                </Center>

                                                <Text
                                                    fontSize="10px"
                                                    fontWeight={
                                                        active ? "700" : "500"
                                                    }
                                                    textAlign="center"
                                                    color={
                                                        active
                                                            ? "#2563EB"
                                                            : "#94A3B8"
                                                    }
                                                    whiteSpace="nowrap"
                                                    transition="all 0.25s ease"
                                                >
                                                    {label}
                                                </Text>
                                            </VStack>

                                            {idx < STEP_LABELS.length - 1 && (
                                                <Box
                                                    flex="1"
                                                    h="2px"
                                                    mt="16px"
                                                    mx={1}
                                                    bg={
                                                        idx < step
                                                            ? "#2563EB"
                                                            : "#E2E8F0"
                                                    }
                                                    transition="all 0.25s ease"
                                                />
                                            )}
                                        </React.Fragment>
                                    )
                                })}
                            </HStack>
                        </Box>

                        {/* WIZARD CARD */}
                        <motion.div
                            layout
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                            }}
                            style={{
                                background: "white",
                                borderRadius: "24px",
                                border: "1px solid #F1F5F9",
                                boxShadow:
                                    "0 10px 30px -10px rgba(0, 0, 0, 0.04)",
                                padding: "28px",
                                position: "relative",
                            }}
                        >
                            {/* Card Content & Action Header */}
                            <Flex
                                justify="space-between"
                                align="flex-start"
                                mb={4}
                            >
                                <VStack align="stretch" gap={1} flex={1}>
                                    <Text
                                        fontSize="20px"
                                        fontWeight="800"
                                        color="#0F172A"
                                    >
                                        {step === 0 &&
                                            "어떤 직무로 면접 볼까요?"}
                                        {step === 1 &&
                                            "이력서 또는 자소서를 참고할까요?"}
                                        {step === 2 &&
                                            "어떤 면접을 연습할까요?"}
                                        {step === 3 &&
                                            "어느 기업을 목표로 하나요?"}
                                        {step === 4 &&
                                            "몇 개의 질문으로 연습할까요?"}
                                        {step === 5 && "환경을 확인할게요"}
                                    </Text>
                                    <Text
                                        fontSize="12px"
                                        fontWeight="500"
                                        color="#64748B"
                                    >
                                        {step === 0 &&
                                            "직무에 맞는 예상 질문을 생성해 드려요"}
                                        {step === 1 &&
                                            "이력서와 자소서를 연동하면 내 경험 기반 맞춤 질문이 생성돼요."}
                                        {step === 2 &&
                                            "면접 유형에 따라 질문 방향이 달라져요"}
                                        {step === 3 &&
                                            "입력하면 기업 맞춤 질문이 추가돼요 (선택 항목이에요)"}
                                        {step === 4 &&
                                            "질문 개수에 따라 소요 시간이 달라져요"}
                                        {step === 5 &&
                                            "카메라와 마이크가 정상 연결되어야 면접을 시작할 수 있어요"}
                                    </Text>
                                </VStack>
                                <Text
                                    fontSize="12px"
                                    fontWeight="700"
                                    color="#94A3B8"
                                >
                                    {step + 1} / 6
                                </Text>
                            </Flex>

                            {/* Card Body */}
                            <Box
                                minH="200px"
                                maxH="390px"
                                overflowY="hidden"
                                px={1}
                            >
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 5 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -5 }}
                                        transition={{ duration: 0.18 }}
                                    >
                                        {/* Step 1: Job Selection */}
                                        {step === 0 && (
                                            <VStack gap={3} py={1} w="fit-content" mx="auto">
                                                <Flex
                                                    gap={2.5}
                                                    flexWrap="wrap"
                                                    justify="center"
                                                    w="full"
                                                >
                                                    {firstRow.map((tag) => {
                                                        const isSelected =
                                                            selectedJobs.includes(
                                                                tag,
                                                            )
                                                        return (
                                                            <Button
                                                                key={tag}
                                                                onClick={() =>
                                                                    toggleJob(
                                                                        tag,
                                                                    )
                                                                }
                                                                variant="outline"
                                                                borderRadius="lg"
                                                                h="44px"
                                                                px="20px"
                                                                fontSize="14px"
                                                                borderColor={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#E2E8F0"
                                                                }
                                                                color={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#334155"
                                                                }
                                                                bg="white"
                                                                fontWeight={
                                                                    isSelected
                                                                        ? "700"
                                                                        : "500"
                                                                }
                                                                _hover={{
                                                                    borderColor:
                                                                        "#2563EB",
                                                                    color: "#2563EB",
                                                                }}
                                                                transition="all 0.15s"
                                                            >
                                                                {tag}
                                                            </Button>
                                                        )
                                                    })}
                                                </Flex>
                                                <Flex
                                                    gap={2.5}
                                                    flexWrap="wrap"
                                                    justify="center"
                                                    w="full"
                                                >
                                                    {secondRow.map((tag) => {
                                                        const isSelected =
                                                            selectedJobs.includes(
                                                                tag,
                                                            )
                                                        return (
                                                            <Button
                                                                key={tag}
                                                                onClick={() =>
                                                                    toggleJob(
                                                                        tag,
                                                                    )
                                                                }
                                                                variant="outline"
                                                                borderRadius="lg"
                                                                h="44px"
                                                                px="20px"
                                                                fontSize="14px"
                                                                borderColor={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#E2E8F0"
                                                                }
                                                                color={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#334155"
                                                                }
                                                                bg="white"
                                                                fontWeight={
                                                                    isSelected
                                                                        ? "700"
                                                                        : "500"
                                                                }
                                                                _hover={{
                                                                    borderColor:
                                                                        "#2563EB",
                                                                    color: "#2563EB",
                                                                }}
                                                                transition="all 0.15s"
                                                            >
                                                                {tag}
                                                            </Button>
                                                        )
                                                    })}
                                                </Flex>
                                                {selectedJobs.includes("기타") && (
                                                    <Box mt={2} w="full">
                                                        <Input
                                                            placeholder="원하시는 직무를 직접 입력해주세요"
                                                            value={customJob}
                                                            onChange={(e) => setCustomJob(e.target.value)}
                                                            h="44px"
                                                            borderRadius="lg"
                                                            borderColor="#E2E8F0"
                                                            _focus={{ borderColor: "#2563EB", boxShadow: "0 0 0 1px #2563EB" }}
                                                            fontSize="14px"
                                                            bg="white"
                                                        />
                                                    </Box>
                                                )}
                                            </VStack>
                                        )}

                                        {/* Step 2: Document Integration */}
                                        {step === 1 && (
                                            <VStack
                                                gap={2.5}
                                                py={1}
                                                align="stretch"
                                            >
                                                {resumes.length === 0 ? (
                                                    <Box p={4} textAlign="center">
                                                        <Text fontSize="14px" color="gray.500">
                                                            등록된 이력서/자소서가 없습니다.
                                                        </Text>
                                                        <Button
                                                            mt={3}
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => navigate("/analyze-application")}
                                                        >
                                                            이력서 등록하러 가기
                                                        </Button>
                                                    </Box>
                                                ) : (
                                                    resumes.map((doc) => {
                                                        const isSelected =
                                                            selectedResume ===
                                                            doc.id.toString()
                                                        return (
                                                            <Flex
                                                                key={doc.id}
                                                                align="center"
                                                                justify="space-between"
                                                                p="12px 18px"
                                                                bg="#F8FAFC"
                                                                borderRadius="14px"
                                                                border="2px solid"
                                                                borderColor={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "transparent"
                                                                }
                                                                cursor="pointer"
                                                                onClick={() =>
                                                                    setSelectedResume(
                                                                        doc.id.toString(),
                                                                    )
                                                                }
                                                                _hover={{
                                                                    bg: "#F1F5F9",
                                                                }}
                                                                transition="all 0.15s"
                                                            >
                                                                <HStack gap={4}>
                                                                    <Center
                                                                        w="36px"
                                                                        h="36px"
                                                                        bg="white"
                                                                        borderRadius="8px"
                                                                        border="1px solid #E2E8F0"
                                                                    >
                                                                        <FileText
                                                                            size={18}
                                                                            color={
                                                                                isSelected
                                                                                    ? "#2563EB"
                                                                                    : "#64748B"
                                                                            }
                                                                        />
                                                                    </Center>
                                                                    <VStack
                                                                        align="flex-start"
                                                                        gap={0.5}
                                                                    >
                                                                        <Text
                                                                            fontSize="14px"
                                                                            fontWeight="700"
                                                                            color="#0F172A"
                                                                        >
                                                                            {doc.title}
                                                                        </Text>
                                                                        <Text
                                                                            fontSize="11px"
                                                                            color="#94A3B8"
                                                                            fontWeight="500"
                                                                        >
                                                                            최근수정일: {new Date(doc.created_at).toLocaleDateString()}
                                                                        </Text>
                                                                    </VStack>
                                                                </HStack>
                                                                {isSelected && (
                                                                    <CheckCircle2
                                                                        size={18}
                                                                        color="#2563EB"
                                                                    />
                                                                )}
                                                            </Flex>
                                                        )
                                                    })
                                                )}
                                                {/* File Dropzone */}
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    style={{ display: "none" }}
                                                    accept=".pdf,image/*,.doc,.docx"
                                                    onChange={(e) => {
                                                        if (e.target.files && e.target.files.length > 0) {
                                                            handleFileDrop(e.target.files[0])
                                                        }
                                                        if (fileInputRef.current) fileInputRef.current.value = "";
                                                    }}
                                                />
                                                <Center
                                                    border="2px dashed"
                                                    borderColor={isDragActive ? "#2563EB" : "#CBD5E1"}
                                                    bg={isDragActive ? "blue.50" : "transparent"}
                                                    opacity={isUploading ? 0.6 : 1}
                                                    pointerEvents={isUploading ? "none" : "auto"}
                                                    borderRadius="14px"
                                                    py="24px"
                                                    flexDirection="column"
                                                    gap={1}
                                                    cursor="pointer"
                                                    onClick={() => fileInputRef.current?.click()}
                                                    onDragOver={onDragOver}
                                                    onDragLeave={onDragLeave}
                                                    onDrop={onDrop}
                                                    _hover={{
                                                        bg: "#F8FAFC",
                                                        borderColor: "#2563EB",
                                                    }}
                                                    transition="all 0.15s"
                                                >
                                                    <UploadCloud
                                                        size={24}
                                                        color={isDragActive ? "#2563EB" : "#94A3B8"}
                                                    />
                                                    <Text
                                                        fontSize="13px"
                                                        fontWeight="700"
                                                        color={isDragActive ? "#2563EB" : "#475569"}
                                                    >
                                                        {isUploading ? "업로드 중..." : "클릭 또는 파일 드롭"}
                                                    </Text>
                                                    <Text
                                                        fontSize="11px"
                                                        fontWeight="500"
                                                        color="#94A3B8"
                                                    >
                                                        PDF, 이미지, 문서 등
                                                    </Text>
                                                </Center>
                                            </VStack>
                                        )}

                                        {/* Step 3: Interview Type (Horizontal Grid) */}
                                        {step === 2 && (
                                            <Flex
                                                gap={4}
                                                py={3}
                                                justify="space-between"
                                                align="stretch"
                                                w="full"
                                            >
                                                {[
                                                    {
                                                        id: "technical",
                                                        title: "직무 면접",
                                                        desc: "직무 관련 기술 질문 중심으로 진행해요",
                                                        icon: Briefcase,
                                                    },
                                                    {
                                                        id: "personality",
                                                        title: "인성 면접",
                                                        desc: "가치관 · 태도 중심의 질문으로 진행해요",
                                                        icon: MessageSquare,
                                                    },
                                                    {
                                                        id: "mixed",
                                                        title: "혼합",
                                                        desc: "직무 + 인성 질문을 균형있게 진행해요",
                                                        icon: Shuffle,
                                                    },
                                                ].map((type) => {
                                                    const isSelected =
                                                        interviewType ===
                                                        type.id
                                                    const IconComponent =
                                                        type.icon
                                                    return (
                                                        <Flex
                                                            key={type.id}
                                                            flex={1}
                                                            direction="column"
                                                            align="flex-start"
                                                            justify="flex-start"
                                                            p="24px 20px"
                                                            borderRadius="18px"
                                                            bg={
                                                                isSelected
                                                                    ? "#F1F6FF"
                                                                    : "white"
                                                            }
                                                            border="2px solid"
                                                            borderColor={
                                                                isSelected
                                                                    ? "#2563EB"
                                                                    : "#E2E8F0"
                                                            }
                                                            cursor="pointer"
                                                            onClick={() =>
                                                                setInterviewType(
                                                                    type.id,
                                                                )
                                                            }
                                                            _hover={{
                                                                borderColor:
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#94A3B8",
                                                            }}
                                                            transition="all 0.2s"
                                                        >
                                                            <Box
                                                                mb={4}
                                                                color={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#3B82F6"
                                                                }
                                                            >
                                                                <IconComponent
                                                                    size={28}
                                                                    strokeWidth={
                                                                        1.5
                                                                    }
                                                                />
                                                            </Box>
                                                            <Text
                                                                fontSize="16px"
                                                                fontWeight="800"
                                                                color={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#0F172A"
                                                                }
                                                                mb={1.5}
                                                            >
                                                                {type.title}
                                                            </Text>
                                                            <Text
                                                                fontSize="12px"
                                                                fontWeight="500"
                                                                color="#94A3B8"
                                                                textAlign="left"
                                                                lineHeight="short"
                                                            >
                                                                {type.desc}
                                                            </Text>
                                                        </Flex>
                                                    )
                                                })}
                                            </Flex>
                                        )}

                                        {/* Step 4: Target Company */}
                                        {step === 3 && (
                                            <VStack
                                                gap={4}
                                                py={3}
                                                align="stretch"
                                            >
                                                <Input
                                                    placeholder="예: 네이버, 카카오, 토스"
                                                    value={targetCompany}
                                                    onChange={(e) =>
                                                        setTargetCompany(
                                                            e.target.value,
                                                        )
                                                    }
                                                    h="48px"
                                                    borderRadius="12px"
                                                    borderColor="#E2E8F0"
                                                    px={4}
                                                    fontSize="14px"
                                                    fontWeight="500"
                                                    _focus={{
                                                        borderColor: "#2563EB",
                                                        boxShadow:
                                                            "0 0 0 1px #2563EB",
                                                    }}
                                                />
                                                <HStack
                                                    align="flex-start"
                                                    gap={1.5}
                                                    color="#64748B"
                                                >
                                                    <Text
                                                        fontSize="12px"
                                                        fontWeight="500"
                                                        mt="1px"
                                                    >
                                                        ⓘ
                                                    </Text>
                                                    <Text
                                                        fontSize="12px"
                                                        fontWeight="500"
                                                    >
                                                        건너뛰어도 괜찮아요.
                                                        직무 기반으로 질문을
                                                        생성해 드려요.
                                                    </Text>
                                                </HStack>
                                            </VStack>
                                        )}

                                        {/* Step 5: Question Count (Horizontal Layout) */}
                                        {step === 4 && (
                                            <Flex
                                                gap={4}
                                                py={4}
                                                justify="space-between"
                                                align="stretch"
                                                w="full"
                                            >
                                                {[
                                                    {
                                                        count: 5,
                                                        label: "5개",
                                                        desc: "약 10분",
                                                    },
                                                    {
                                                        count: 10,
                                                        label: "10개",
                                                        desc: "약 20분",
                                                    },
                                                    {
                                                        count: 15,
                                                        label: "15개",
                                                        desc: "약 30분",
                                                    },
                                                ].map((opt) => {
                                                    const isSelected =
                                                        questionCount ===
                                                        opt.count
                                                    return (
                                                        <Flex
                                                            key={opt.count}
                                                            flex={1}
                                                            direction="column"
                                                            align="center"
                                                            justify="center"
                                                            p="36px 16px"
                                                            borderRadius="18px"
                                                            bg={
                                                                isSelected
                                                                    ? "#F1F6FF"
                                                                    : "white"
                                                            }
                                                            border="2px solid"
                                                            borderColor={
                                                                isSelected
                                                                    ? "#2563EB"
                                                                    : "#E2E8F0"
                                                            }
                                                            cursor="pointer"
                                                            onClick={() =>
                                                                setQuestionCount(
                                                                    opt.count,
                                                                )
                                                            }
                                                            _hover={{
                                                                borderColor:
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#94A3B8",
                                                            }}
                                                            transition="all 0.2s"
                                                        >
                                                            <Text
                                                                fontSize="26px"
                                                                fontWeight="800"
                                                                color={
                                                                    isSelected
                                                                        ? "#2563EB"
                                                                        : "#0F172A"
                                                                }
                                                                mb={1}
                                                            >
                                                                {opt.label}
                                                            </Text>
                                                            <Text
                                                                fontSize="13px"
                                                                fontWeight="500"
                                                                color="#94A3B8"
                                                            >
                                                                {opt.desc}
                                                            </Text>
                                                        </Flex>
                                                    )
                                                })}
                                            </Flex>
                                        )}

                                        {/* Step 6: Environment Check */}
                                        {step === 5 && (
                                            <VStack
                                                gap={2}
                                                py={0}
                                                align="stretch"
                                            >
                                                {/* <Flex gap={2} w="full" align="stretch">
                                                    <Box
                                                        flex={1}
                                                        bg="#F8FAFC"
                                                        border="1px solid #E2E8F0"
                                                        borderRadius="10px"
                                                        px="12px"
                                                        py="8px"
                                                    >
                                                        <Text
                                                            fontSize="10px"
                                                            fontWeight="700"
                                                            color="#64748B"
                                                            mb={1}
                                                        >
                                                            카메라 장치
                                                        </Text>
                                                        <select
                                                            value={
                                                                selectedVideoDeviceId
                                                            }
                                                            onChange={(e) =>
                                                                setSelectedVideoDeviceId(
                                                                    e.target.value,
                                                                )
                                                            }
                                                            disabled={
                                                                videoDevices.length ===
                                                                    0 ||
                                                                checkingPermissions
                                                            }
                                                            style={{
                                                                width: "100%",
                                                                border: "none",
                                                                outline: "none",
                                                                background:
                                                                    "transparent",
                                                                fontSize:
                                                                    "12px",
                                                                fontWeight: 700,
                                                                color: "#0F172A",
                                                            }}
                                                        >
                                                            <option value="">
                                                                {videoDevices.length >
                                                                0
                                                                    ? "기본 카메라"
                                                                    : "카메라 확인 중"}
                                                            </option>
                                                            {videoDevices.map(
                                                                (device, idx) => (
                                                                    <option
                                                                        key={
                                                                            device.deviceId ||
                                                                            idx
                                                                        }
                                                                        value={
                                                                            device.deviceId
                                                                        }
                                                                    >
                                                                        {device.label ||
                                                                            `카메라 ${idx + 1}`}
                                                                    </option>
                                                                ),
                                                            )}
                                                        </select>
                                                    </Box>

                                                    <Box
                                                        flex={1}
                                                        bg="#F8FAFC"
                                                        border="1px solid #E2E8F0"
                                                        borderRadius="10px"
                                                        px="12px"
                                                        py="8px"
                                                    >
                                                        <Text
                                                            fontSize="10px"
                                                            fontWeight="700"
                                                            color="#64748B"
                                                            mb={1}
                                                        >
                                                            디버그
                                                        </Text>
                                                        <Text
                                                            fontSize="11px"
                                                            fontWeight="700"
                                                            color="#0F172A"
                                                            lineHeight="short"
                                                        >
                                                            {cameraStatus}
                                                        </Text>
                                                        <Text
                                                            fontSize="10px"
                                                            fontWeight="600"
                                                            color="#64748B"
                                                            lineHeight="short"
                                                        >
                                                            {micStatus}
                                                        </Text>
                                                    </Box>
                                                </Flex> */}

                                                <Flex
                                                    align="center"
                                                    gap={2}
                                                    p="8px 12px"
                                                    bg="#F8FAFC"
                                                    borderRadius="10px"
                                                    border="1px solid #E2E8F0"
                                                    justify="space-between"
                                                >
                                                    <HStack gap={2}>
                                                        <Video
                                                            size={14}
                                                            color="#334155"
                                                        />
                                                        <Text
                                                            fontSize="11px"
                                                            fontWeight="700"
                                                            color="#0F172A"
                                                        >
                                                            카메라
                                                        </Text>
                                                    </HStack>
                                                    <Text
                                                        fontSize="11px"
                                                        fontWeight="700"
                                                        color={
                                                            cameraOk
                                                                ? "#10B981"
                                                                : "#EF4444"
                                                        }
                                                    >
                                                        {cameraOk
                                                            ? "연결됨"
                                                            : "권한 필요"}
                                                    </Text>
                                                </Flex>

                                                <Flex
                                                    align="center"
                                                    gap={2}
                                                    p="8px 12px"
                                                    bg="#F8FAFC"
                                                    borderRadius="10px"
                                                    border="1px solid #E2E8F0"
                                                    justify="space-between"
                                                >
                                                    <HStack gap={2}>
                                                        <Mic
                                                            size={14}
                                                            color="#334155"
                                                        />
                                                        <Text
                                                            fontSize="11px"
                                                            fontWeight="700"
                                                            color="#0F172A"
                                                        >
                                                            마이크
                                                        </Text>
                                                    </HStack>
                                                    <Text
                                                        fontSize="11px"
                                                        fontWeight="700"
                                                        color={
                                                            micOk
                                                                ? "#10B981"
                                                                : "#EF4444"
                                                        }
                                                    >
                                                        {micOk
                                                            ? "연결됨"
                                                            : "권한 필요"}
                                                    </Text>
                                                </Flex>

                                                <Box
                                                    h="275px"
                                                    bg="#1E293B"
                                                    borderRadius="16px"
                                                    position="relative"
                                                    overflow="hidden"
                                                    boxShadow="0 16px 36px -24px rgba(15, 23, 42, 0.6)"
                                                >
                                                    <video
                                                        ref={videoRef}
                                                        muted
                                                        playsInline
                                                        autoPlay
                                                        onLoadedMetadata={() =>
                                                            videoRef.current
                                                                ?.play()
                                                                .catch(
                                                                    () =>
                                                                        undefined,
                                                                )
                                                        }
                                                        onCanPlay={() =>
                                                            videoRef.current
                                                                ?.play()
                                                                .catch(
                                                                    () =>
                                                                        undefined,
                                                                )
                                                        }
                                                        style={{
                                                            width: "100%",
                                                            height: "100%",
                                                            objectFit: "cover",
                                                            backgroundColor:
                                                                "#0F172A",
                                                            opacity: cameraOk
                                                                ? 1
                                                                : 0,
                                                            transition:
                                                                "opacity 0.2s ease",
                                                        }}
                                                    />
                                                    {!cameraOk && (
                                                        <Center
                                                            position="absolute"
                                                            inset={0}
                                                            flexDirection="column"
                                                            gap={3}
                                                            color="slate.400"
                                                            bg="rgba(15, 23, 42, 0.25)"
                                                        >
                                                            <Video
                                                                size={42}
                                                                color="#94A3B8"
                                                            />
                                                            <Text
                                                                color="#94A3B8"
                                                                fontSize="13px"
                                                                fontWeight="700"
                                                                textAlign="center"
                                                                px={4}
                                                            >
                                                                {checkingPermissions
                                                                    ? "카메라와 마이크 권한을 확인하는 중이에요"
                                                                    : "카메라 화면이 여기에 노출됩니다"}
                                                            </Text>
                                                        </Center>
                                                    )}
                                                    <Box
                                                        position="absolute"
                                                        bottom="12px"
                                                        left="12px"
                                                        bg="rgba(15, 23, 42, 0.75)"
                                                        px="10px"
                                                        py="5px"
                                                        borderRadius="999px"
                                                    >
                                                        <Text
                                                            color="white"
                                                            fontSize="9px"
                                                            fontWeight="bold"
                                                        >
                                                            실시간 비디오
                                                            미리보기
                                                        </Text>
                                                    </Box>
                                                    {permissionError && (
                                                        <Box
                                                            position="absolute"
                                                            top="10px"
                                                            left="10px"
                                                            right="10px"
                                                            bg="rgba(239, 68, 68, 0.88)"
                                                            px="10px"
                                                            py="6px"
                                                            borderRadius="8px"
                                                        >
                                                            <Text
                                                                color="white"
                                                                fontSize="9px"
                                                                fontWeight="700"
                                                                lineHeight="short"
                                                            >
                                                                {
                                                                    permissionError
                                                                }
                                                            </Text>
                                                        </Box>
                                                    )}
                                                </Box>
                                            </VStack>
                                        )}
                                    </motion.div>
                                </AnimatePresence>
                            </Box>

                            {/* Card Footer / Buttons */}
                            <HStack mt={4} justify="space-between">
                                {step === 0 ? (
                                    <Box w="80px" />
                                ) : (
                                    <Button
                                        variant="outline"
                                        h="42px"
                                        px="20px"
                                        fontSize="13px"
                                        borderRadius="11px"
                                        borderColor="#E2E8F0"
                                        color="#475569"
                                        fontWeight="700"
                                        _hover={{
                                            bg: "#F8FAFC",
                                            borderColor: "#CBD5E1",
                                        }}
                                        onClick={handlePrev}
                                    >
                                        <ArrowLeft
                                            size={14}
                                            style={{ marginRight: "4px" }}
                                        />
                                        이전
                                    </Button>
                                )}

                                {step === STEP_LABELS.length - 1 ? (
                                    <Button
                                        h="42px"
                                        px="24px"
                                        fontSize="13px"
                                        borderRadius="11px"
                                        bg="#2563EB"
                                        color="white"
                                        fontWeight="800"
                                        _hover={{
                                            bg: "#1D4ED8",
                                            transform: canStartInterview
                                                ? "scale(1.02)"
                                                : "none",
                                        }}
                                        transition="all 0.15s"
                                        disabled={!canStartInterview}
                                        _disabled={{
                                            bg: "#94A3B8",
                                            color: "white",
                                            opacity: 1,
                                            cursor: "not-allowed",
                                            transform: "none",
                                        }}
                                        onClick={() =>
                                            canStartInterview &&
                                            setIsModeModalOpen(true)
                                        }
                                    >
                                        {canStartInterview
                                            ? "면접 시작하기"
                                            : checkingPermissions
                                                ? "권한 확인 중..."
                                                : "권한 허용 후 시작하기"}
                                    </Button>
                                ) : (
                                    <Button
                                        h="42px"
                                        px="24px"
                                        fontSize="13px"
                                        borderRadius="11px"
                                        bg="#2563EB"
                                        color="white"
                                        fontWeight="800"
                                        _hover={{ bg: isNextDisabled ? "#94A3B8" : "#1D4ED8" }}
                                        disabled={isNextDisabled}
                                        _disabled={{ bg: "#94A3B8", cursor: "not-allowed", opacity: 1 }}
                                        onClick={handleNext}
                                    >
                                        다음
                                        <ArrowRight
                                            size={14}
                                            style={{ marginLeft: "6px" }}
                                        />
                                    </Button>
                                )}
                            </HStack>
                        </motion.div>
                    </VStack>
                </Box>
            </Center>

            {/* 모드 선택 모달 */}
            <Dialog.Root
                size="md"
                placement="center"
                motionPreset="slide-in-bottom"
                open={isModeModalOpen}
                onOpenChange={(e) => setIsModeModalOpen(e.open)}
            >
                <Portal>
                    <Dialog.Backdrop backdropFilter="blur(4px)" bg="blackAlpha.300" />
                    <Dialog.Positioner>
                        <Dialog.Content borderRadius="xl" p={2}>
                            <Dialog.Header>
                                <Dialog.Title fontSize="xl" fontWeight="bold" textAlign="center">
                                    면접 난이도 선택
                                </Dialog.Title>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton size="md" position="absolute" top="2" right="2" />
                                </Dialog.CloseTrigger>
                            </Dialog.Header>
                            <Dialog.Body>
                                <VStack gap={4} mt={4}>
                                    <Box
                                        w="100%"
                                        p={5}
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        cursor="pointer"
                                        _hover={{ borderColor: "#2563EB", bg: "blue.50", transform: "translateY(-2px)", shadow: "md" }}
                                        onClick={() => {
                                            setIsModeModalOpen(false);
                                            
                                            // Get the full resume text if one was selected
                                            const selectedResumeData = resumes.find(r => r.id.toString() === selectedResume);
                                            const resumeContent = selectedResumeData ? (selectedResumeData.raw_text || selectedResumeData.content) : "";

                                            const state = {
                                                selectedJobs,
                                                customJob,
                                                selectedResume,
                                                resumeContent,
                                                interviewType,
                                                targetCompany,
                                                questionCount
                                            };

                                            navigate("/interview?mode=EASY", { state });
                                        }}
                                        transition="all 0.2s"
                                    >
                                        <Text fontWeight="800" fontSize="lg" color="#2563EB">EASY 모드</Text>
                                        <Text fontSize="sm" color="gray.600" mt={1}>기본적인 질문 위주로 평이한 난이도의 면접이 진행됩니다.</Text>
                                    </Box>

                                    <Box
                                        w="100%"
                                        p={5}
                                        borderWidth="1px"
                                        borderRadius="lg"
                                        cursor="pointer"
                                        _hover={{ borderColor: "red.500", bg: "red.50", transform: "translateY(-2px)", shadow: "md" }}
                                        onClick={() => {
                                            setIsModeModalOpen(false);
                                            
                                            // Get the full resume text if one was selected
                                            const selectedResumeData = resumes.find(r => r.id.toString() === selectedResume);
                                            const resumeContent = selectedResumeData ? (selectedResumeData.raw_text || selectedResumeData.content) : "";

                                            const state = {
                                                selectedJobs,
                                                customJob,
                                                selectedResume,
                                                resumeContent,
                                                interviewType,
                                                targetCompany,
                                                questionCount
                                            };

                                            navigate("/interview?mode=HARD", { state });
                                        }}
                                        transition="all 0.2s"
                                    >
                                        <Text fontWeight="800" fontSize="lg" color="red.600">HARD 모드</Text>
                                        <Text fontSize="sm" color="gray.600" mt={1}>꼬리 질문과 심층적인 질문 위주로 압박 면접이 진행됩니다.</Text>
                                    </Box>
                                </VStack>
                            </Dialog.Body>
                            <Dialog.Footer justifyContent="center" mt={4}>
                                <Text fontSize="xs" color="gray.400">
                                    선택한 난이도에 따라 AI 면접관의 질문 방식이 변경됩니다.
                                </Text>
                            </Dialog.Footer>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Box>
    )
}

export default MockInterviewTemplate
