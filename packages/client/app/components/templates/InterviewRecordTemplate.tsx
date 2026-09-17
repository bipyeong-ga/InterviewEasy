import React, { useEffect, useRef, useState } from "react"
import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Button,
    SimpleGrid,
    Progress,
    Spinner,
    Badge,
} from "@chakra-ui/react"
import { ArrowLeft, Play, ThumbsUp, TrendingUp, SearchX } from "lucide-react"
import { useNavigate, useParams } from "react-router"
import Header from "../organisms/Header"

interface Chapter {
    index: number
    text: string
    startTime: number
}

interface CompetencyScores {
    problemSolving: number
    logicalStructure: number
    jobExpertise: number
    specificity: number
}

interface QuestionEvaluation {
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
    overallScore?: number
    overallFeedback?: string
    strengths?: string[]
    improvements?: string[]
    competencies?: CompetencyScores
    questionEvaluations?: QuestionEvaluation[]
}

interface InterviewSession {
    id: number
    chapters: Chapter[]
    report_data: ReportData
    created_at: string
}

const COMPETENCY_LABELS: Record<keyof CompetencyScores, string> = {
    problemSolving: "문제 해결력",
    logicalStructure: "논리적 구조",
    jobExpertise: "직무 전문성",
    specificity: "답변 구체성",
}

export default function InterviewRecordTemplate() {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const videoRef = useRef<HTMLVideoElement | null>(null)

    const [session, setSession] = useState<InterviewSession | null>(null)
    const [loading, setLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                }
                const resp = await fetch(`/api/interview-sessions/${id}`, {
                    headers,
                })
                if (resp.status === 404) {
                    setNotFound(true)
                    return
                }
                if (resp.ok) {
                    setSession(await resp.json())
                } else {
                    setNotFound(true)
                }
            } catch (err) {
                console.error("Failed to fetch interview session:", err)
                setNotFound(true)
            } finally {
                setLoading(false)
            }
        }
        if (id) fetchSession()
    }, [id])

    const report = session?.report_data || {}
    const competencies = report.competencies
    const evaluations = report.questionEvaluations || []

    return (
        <Box bg="bg.subtle" minH="100vh">
            <Header />
            <Box maxW="900px" mx="auto" pt="100px" px={4} pb={16}>
                <Button
                    variant="ghost"
                    size="sm"
                    mb={4}
                    onClick={() => navigate("/interview-records")}
                >
                    <ArrowLeft size={16} />
                    모의면접 기록으로
                </Button>

                {loading ? (
                    <Flex justify="center" p={20}>
                        <Spinner />
                    </Flex>
                ) : notFound || !session ? (
                    <VStack py={20} gap={3} color="gray.500">
                        <SearchX size={40} />
                        <Text>모의면접 기록을 찾을 수 없습니다.</Text>
                    </VStack>
                ) : (
                    <VStack align="stretch" gap={6}>
                        <Box>
                            <Text fontSize="2xl" fontWeight="bold">
                                모의면접 기록
                            </Text>
                            <Text fontSize="sm" color="gray.500" mt={1}>
                                {new Date(session.created_at).toLocaleString(
                                    "ko-KR",
                                )}
                                {" · "}
                                질문 {session.chapters?.length ?? 0}개
                            </Text>
                        </Box>

                        {/* 영상 다시보기 */}
                        <Box
                            bg="bg.panel"
                            p={6}
                            borderRadius="2xl"
                            boxShadow="sm"
                        >
                            <Box
                                borderRadius="lg"
                                overflow="hidden"
                                bg="black"
                                maxW="640px"
                                mx="auto"
                                w="100%"
                            >
                                <video
                                    ref={videoRef}
                                    controls
                                    playsInline
                                    src={`/api/interview-sessions/${session.id}/video?token=${
                                        typeof window !== "undefined"
                                            ? localStorage.getItem("token") ||
                                              ""
                                            : ""
                                    }`}
                                    style={{ width: "100%", display: "block" }}
                                />
                            </Box>
                            {session.chapters?.length > 0 && (
                                <Box overflowX="auto" mt={3}>
                                    <HStack gap={2} pb={1}>
                                        {session.chapters.map((ch, i) => (
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
                                                    if (videoRef.current) {
                                                        videoRef.current.currentTime =
                                                            ch.startTime
                                                        videoRef.current
                                                            .play()
                                                            .catch(() => {})
                                                    }
                                                }}
                                            >
                                                <Play
                                                    size={10}
                                                    fill="currentColor"
                                                />
                                                질문 {i + 1}
                                            </Button>
                                        ))}
                                    </HStack>
                                </Box>
                            )}
                        </Box>

                        {/* 종합 평가 */}
                        <Box
                            bg="bg.panel"
                            p={6}
                            borderRadius="2xl"
                            boxShadow="sm"
                        >
                            <HStack justify="space-between" align="flex-start" mb={4}>
                                <Text fontSize="lg" fontWeight="bold">
                                    종합 평가
                                </Text>
                                <Badge
                                    colorPalette="blue"
                                    fontSize="lg"
                                    px={3}
                                    py={1}
                                    borderRadius="full"
                                >
                                    {report.overallScore ?? "-"}점
                                </Badge>
                            </HStack>
                            {report.overallFeedback && (
                                <Text fontSize="sm" color="fg.muted" mb={5}>
                                    {report.overallFeedback}
                                </Text>
                            )}

                            {competencies && (
                                <SimpleGrid
                                    columns={{ base: 1, sm: 2 }}
                                    gap={4}
                                    mb={5}
                                >
                                    {(
                                        Object.keys(
                                            competencies,
                                        ) as (keyof CompetencyScores)[]
                                    ).map((key) => (
                                        <Box key={key}>
                                            <Flex
                                                justify="space-between"
                                                mb={1}
                                            >
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.600"
                                                >
                                                    {COMPETENCY_LABELS[key]}
                                                </Text>
                                                <Text
                                                    fontSize="xs"
                                                    fontWeight="bold"
                                                    color="blue.600"
                                                >
                                                    {competencies[key]}
                                                </Text>
                                            </Flex>
                                            <Progress.Root
                                                value={competencies[key]}
                                                max={100}
                                                size="sm"
                                                borderRadius="full"
                                            >
                                                <Progress.Track bg="gray.200">
                                                    <Progress.Range bg="blue.500" />
                                                </Progress.Track>
                                            </Progress.Root>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            )}

                            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                                {report.strengths &&
                                    report.strengths.length > 0 && (
                                        <Box>
                                            <HStack
                                                gap={1.5}
                                                mb={2}
                                                color="green.600"
                                            >
                                                <ThumbsUp size={14} />
                                                <Text
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                >
                                                    강점
                                                </Text>
                                            </HStack>
                                            <VStack align="stretch" gap={1.5}>
                                                {report.strengths.map(
                                                    (s, i) => (
                                                        <Text
                                                            key={i}
                                                            fontSize="sm"
                                                            color="fg.muted"
                                                        >
                                                            · {s}
                                                        </Text>
                                                    ),
                                                )}
                                            </VStack>
                                        </Box>
                                    )}
                                {report.improvements &&
                                    report.improvements.length > 0 && (
                                        <Box>
                                            <HStack
                                                gap={1.5}
                                                mb={2}
                                                color="orange.600"
                                            >
                                                <TrendingUp size={14} />
                                                <Text
                                                    fontSize="sm"
                                                    fontWeight="bold"
                                                >
                                                    보완할 점
                                                </Text>
                                            </HStack>
                                            <VStack align="stretch" gap={1.5}>
                                                {report.improvements.map(
                                                    (s, i) => (
                                                        <Text
                                                            key={i}
                                                            fontSize="sm"
                                                            color="fg.muted"
                                                        >
                                                            · {s}
                                                        </Text>
                                                    ),
                                                )}
                                            </VStack>
                                        </Box>
                                    )}
                            </SimpleGrid>
                        </Box>

                        {/* 질문별 상세 */}
                        {evaluations.length > 0 && (
                            <Box>
                                <Text fontSize="lg" fontWeight="bold" mb={3}>
                                    질문별 상세 피드백
                                </Text>
                                <VStack align="stretch" gap={4}>
                                    {evaluations.map((ev, i) => (
                                        <Box
                                            key={ev.questionId ?? i}
                                            bg="bg.panel"
                                            p={5}
                                            borderRadius="xl"
                                            boxShadow="sm"
                                        >
                                            <HStack
                                                justify="space-between"
                                                align="flex-start"
                                                mb={2}
                                            >
                                                <Text
                                                    fontWeight="bold"
                                                    fontSize="sm"
                                                >
                                                    질문 {i + 1}. {ev.questionText}
                                                </Text>
                                                {typeof ev.score ===
                                                    "number" && (
                                                    <Badge
                                                        colorPalette="blue"
                                                        flexShrink={0}
                                                    >
                                                        {ev.score}점
                                                    </Badge>
                                                )}
                                            </HStack>
                                            {ev.answerText && (
                                                <Text
                                                    fontSize="sm"
                                                    color="gray.600"
                                                    bg="bg.subtle"
                                                    p={3}
                                                    borderRadius="md"
                                                    mb={2}
                                                >
                                                    {ev.answerText}
                                                </Text>
                                            )}
                                            {ev.feedback && (
                                                <Text
                                                    fontSize="sm"
                                                    color="fg.muted"
                                                    mb={1}
                                                >
                                                    {ev.feedback}
                                                </Text>
                                            )}
                                            {ev.strength && (
                                                <Text
                                                    fontSize="xs"
                                                    color="green.600"
                                                    mt={1}
                                                >
                                                    잘한 점: {ev.strength}
                                                </Text>
                                            )}
                                            {ev.improvement && (
                                                <Text
                                                    fontSize="xs"
                                                    color="orange.600"
                                                    mt={1}
                                                >
                                                    보완할 점: {ev.improvement}
                                                </Text>
                                            )}
                                        </Box>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                    </VStack>
                )}
            </Box>
        </Box>
    )
}
