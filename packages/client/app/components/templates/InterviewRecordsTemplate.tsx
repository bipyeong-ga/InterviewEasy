import React, { useEffect, useState } from "react"
import {
    Box,
    Flex,
    VStack,
    HStack,
    Text,
    Button,
    Spinner,
} from "@chakra-ui/react"
import { ArrowLeft, Play, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router"
import Header from "../organisms/Header"
import { useAuth } from "../../hooks/useAuth"

interface InterviewSessionSummary {
    id: number
    chapters: { index: number; text: string; startTime: number }[]
    report_data: { overallScore?: number; overallFeedback?: string }
    created_at: string
}

export default function InterviewRecordsTemplate() {
    const { user, loading } = useAuth()
    const navigate = useNavigate()

    const [sessions, setSessions] = useState<InterviewSessionSummary[]>([])
    const [loadingSessions, setLoadingSessions] = useState(true)

    useEffect(() => {
        if (loading) return
        if (!user) {
            navigate("/login")
        }
    }, [user, loading, navigate])

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                }
                const resp = await fetch("/api/interview-sessions", { headers })
                if (resp.ok) {
                    setSessions(await resp.json())
                }
            } catch (err) {
                console.error("Failed to fetch interview sessions:", err)
            } finally {
                setLoadingSessions(false)
            }
        }
        if (user) fetchSessions()
    }, [user])

    if (loading) return null
    if (!user) return null

    return (
        <Box bg="bg.subtle" minH="100vh">
            <Header />
            <Box maxW="800px" mx="auto" pt="100px" px={4} pb={16}>
                <Button
                    variant="ghost"
                    size="sm"
                    mb={4}
                    onClick={() => navigate("/profile")}
                >
                    <ArrowLeft size={16} />
                    마이페이지로
                </Button>

                <Text fontSize="2xl" fontWeight="bold" mb={8}>모의면접 기록</Text>

                <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm">
                    {loadingSessions ? (
                        <Flex justify="center" p={8}>
                            <Spinner />
                        </Flex>
                    ) : sessions.length === 0 ? (
                        <Text color="gray.500" py={8} textAlign="center">
                            모의면접 기록이 없습니다.
                        </Text>
                    ) : (
                        <VStack align="stretch" gap={3}>
                            {sessions.map((session) => (
                                <Flex
                                    key={session.id}
                                    justify="space-between"
                                    align="center"
                                    p={4}
                                    border="1px solid"
                                    borderColor="gray.200"
                                    borderRadius="xl"
                                    cursor="pointer"
                                    _hover={{ bg: "bg.subtle" }}
                                    onClick={() =>
                                        navigate(`/interview-record/${session.id}`)
                                    }
                                >
                                    <HStack gap={3}>
                                        <Flex
                                            w={9}
                                            h={9}
                                            borderRadius="full"
                                            bg="blue.50"
                                            color="blue.600"
                                            align="center"
                                            justify="center"
                                        >
                                            <Play size={12} fill="currentColor" />
                                        </Flex>
                                        <Box>
                                            <Text fontWeight="bold" fontSize="sm">
                                                종합 점수 {session.report_data?.overallScore ?? "-"}점
                                            </Text>
                                            <Text fontSize="xs" color="gray.500">
                                                {new Date(session.created_at).toLocaleString("ko-KR")}
                                                {" · "}
                                                질문 {session.chapters?.length ?? 0}개
                                            </Text>
                                        </Box>
                                    </HStack>
                                    <ChevronRight size={16} color="gray" />
                                </Flex>
                            ))}
                        </VStack>
                    )}
                </Box>
            </Box>
        </Box>
    )
}
