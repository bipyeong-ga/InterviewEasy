import React, { useState, useEffect, useRef } from "react"
import {
    Box,
    Flex,
    VStack,
    Text,
    Button,
    Input,
    Avatar,
    HStack,
    SimpleGrid,
    Badge,
    Spinner,
} from "@chakra-ui/react"
import { Camera, Heart, FileText, Play, ChevronDown, ChevronUp } from "lucide-react"
import Header from "../organisms/Header"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router"
import type { Post } from "../../data/mockPosts"

interface LikedJob {
    id: number
    job_title: string
    company: string
    link?: string
    reason?: string
}

interface ResumeSummary {
    id: number
    title: string
    updated_at: string
}

interface InterviewSessionSummary {
    id: number
    chapters: { index: number; text: string; startTime: number }[]
    report_data: { overallScore?: number; overallFeedback?: string }
    created_at: string
}

function SessionReplay({ session }: { session: InterviewSessionSummary }) {
    const videoRef = useRef<HTMLVideoElement | null>(null)

    return (
        <Box p={4} borderTop="1px solid" borderColor="gray.200" bg="bg.subtle">
            <VStack align="stretch" gap={3}>
                <Box borderRadius="lg" overflow="hidden" bg="black" maxW="640px" mx="auto" w="100%">
                    <video
                        ref={videoRef}
                        controls
                        playsInline
                        src={`/api/interview-sessions/${session.id}/video?token=${typeof window !== "undefined" ? localStorage.getItem("token") || "" : ""}`}
                        style={{ width: "100%", display: "block" }}
                    />
                </Box>
                {session.chapters?.length > 0 && (
                    <Box overflowX="auto">
                        <HStack gap={2} pb={1}>
                            {session.chapters.map((ch, i) => (
                                <Button
                                    key={ch.index}
                                    size="sm"
                                    variant="outline"
                                    borderColor="gray.300"
                                    color="gray.700"
                                    flexShrink={0}
                                    _hover={{ bg: "blue.600", borderColor: "blue.600", color: "white" }}
                                    onClick={() => {
                                        if (videoRef.current) {
                                            videoRef.current.currentTime = ch.startTime
                                            videoRef.current.play().catch(() => {})
                                        }
                                    }}
                                >
                                    질문 {i + 1}
                                </Button>
                            ))}
                        </HStack>
                    </Box>
                )}
                {session.report_data?.overallFeedback && (
                    <Text fontSize="sm" color="fg.muted">
                        {session.report_data.overallFeedback}
                    </Text>
                )}
            </VStack>
        </Box>
    )
}

export default function ProfileTemplate() {
    const { user, refreshUser, loading } = useAuth()
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [name, setName] = useState(user?.name || "")
    const [nickname, setNickname] = useState(user?.nickname || "")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    const [likedPosts, setLikedPosts] = useState<Post[]>([])
    const [likedJobs, setLikedJobs] = useState<LikedJob[]>([])
    const [loadingData, setLoadingData] = useState(true)

    const [resumes, setResumes] = useState<ResumeSummary[]>([])
    const [interviewSessions, setInterviewSessions] = useState<
        InterviewSessionSummary[]
    >([])
    const [loadingHistory, setLoadingHistory] = useState(true)
    const [expandedSessionId, setExpandedSessionId] = useState<number | null>(
        null,
    )

    useEffect(() => {
        if (loading) return
        if (!user) {
            navigate("/login")
            return
        }
        setName(user.name || "")
        setNickname(user.nickname || "")
    }, [user, loading, navigate])

    useEffect(() => {
        const fetchBookmarks = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = { ...(token ? { Authorization: `Bearer ${token}` } : {}) }

                // Fetch liked posts (from job board)
                const postsResp = await fetch("/api/posts/liked", { headers })
                if (postsResp.ok) {
                    const data = await postsResp.json()
                    setLikedPosts(data.map((d: any) => ({
                        id: d.id,
                        companyName: d.company_name,
                        companyLogo: d.company_logo,
                        title: d.title,
                        location: d.location,
                        district: d.district,
                        jobCategory: d.job_category,
                        techStack: d.tech_stack,
                        deadline: d.deadline,
                        experience: d.experience,
                        employmentType: d.employment_type,
                        salary: d.salary,
                        description: d.description,
                        responsibilities: d.responsibilities,
                        requirements: d.requirements,
                        preferredRequirements: d.preferred_requirements,
                        benefits: d.benefits,
                        bookmarked: d.bookmarked
                    })))
                }

                // Fetch liked recommended jobs
                const jobsResp = await fetch("/api/jobs/liked", { headers })
                if (jobsResp.ok) {
                    const jobsData = await jobsResp.json()
                    setLikedJobs(jobsData)
                }
            } catch (err) {
                console.error("Failed to fetch bookmarks:", err)
            } finally {
                setLoadingData(false)
            }
        }
        if (user) {
            fetchBookmarks()
        }
    }, [user])

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = { ...(token ? { Authorization: `Bearer ${token}` } : {}) }

                const resumesResp = await fetch("/api/resumes", { headers })
                if (resumesResp.ok) {
                    const data = await resumesResp.json()
                    setResumes(data)
                }

                const sessionsResp = await fetch("/api/interview-sessions", { headers })
                if (sessionsResp.ok) {
                    const data = await sessionsResp.json()
                    setInterviewSessions(data)
                }
            } catch (err) {
                console.error("Failed to fetch profile history:", err)
            } finally {
                setLoadingHistory(false)
            }
        }
        if (user) {
            fetchHistory()
        }
    }, [user])

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            setSelectedFile(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleSave = async () => {
        setIsSaving(true)
        try {
            const formData = new FormData()
            formData.append("name", name)
            formData.append("nickname", nickname)
            if (selectedFile) {
                formData.append("profile_image", selectedFile)
            }

            const token = localStorage.getItem("token")
            const resp = await fetch("/api/users/profile", {
                method: "PUT",
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: formData
            })

            if (resp.ok) {
                await refreshUser()
                alert("프로필이 성공적으로 업데이트되었습니다.")
            } else {
                alert("프로필 업데이트에 실패했습니다.")
            }
        } catch (err) {
            console.error("Profile update failed:", err)
            alert("오류가 발생했습니다.")
        } finally {
            setIsSaving(false)
        }
    }

    const unbookmarkPost = async (id: number) => {
        try {
            const token = localStorage.getItem("token")
            await fetch(`/api/posts/${id}/bookmark`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ isBookmarked: false })
            })
            setLikedPosts(prev => prev.filter(p => p.id !== id))
        } catch (err) {
            console.error("Failed to unbookmark post:", err)
        }
    }

    const unbookmarkJob = async (jobTitle: string, company: string) => {
        try {
            const token = localStorage.getItem("token")
            await fetch(`/api/jobs/like`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ job_title: jobTitle, company: company })
            })
            setLikedJobs(prev => prev.filter(j => !(j.job_title === jobTitle && j.company === company)))
        } catch (err) {
            console.error("Failed to unbookmark job:", err)
        }
    }

    if (loading) return null
    if (!user) return null

    return (
        <Box bg="bg.subtle" minH="100vh">
            <Header />
            <Box maxW="1000px" mx="auto" pt="100px" px={4} pb={12}>
                <Text fontSize="2xl" fontWeight="bold" mb={8}>마이페이지</Text>

                <Flex gap={8} direction={{ base: "column", md: "row" }} align="flex-start">
                    {/* Profile Edit Section */}
                    <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm" flex="1" w="100%" maxW={{ md: "350px" }}>
                        <VStack gap={6} align="center">
                            <Box position="relative" cursor="pointer" onClick={() => fileInputRef.current?.click()}>
                                <Avatar.Root w="120px" h="120px">
                                    <Avatar.Fallback name={user.name || user.email} />
                                    <Avatar.Image src={previewUrl || user.profile_image_url || ""} />
                                </Avatar.Root>
                                <Flex
                                    position="absolute"
                                    bottom={0}
                                    right={0}
                                    bg="blue.600"
                                    color="white"
                                    w={8}
                                    h={8}
                                    borderRadius="full"
                                    align="center"
                                    justify="center"
                                    boxShadow="md"
                                >
                                    <Camera size={14} />
                                </Flex>
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    style={{ display: "none" }}
                                    onChange={handleFileChange}
                                />
                            </Box>

                            <VStack gap={4} w="100%">
                                <Box w="100%">
                                    <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">이름</Text>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="이름을 입력하세요"
                                        bg="bg.subtle"
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">닉네임</Text>
                                    <Input
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        placeholder="닉네임을 입력하세요"
                                        bg="bg.subtle"
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">이메일</Text>
                                    <Input value={user.email} disabled bg="gray.100" />
                                </Box>
                                <Button
                                    w="100%"
                                    colorPalette="blue"
                                    onClick={handleSave}
                                    loading={isSaving}
                                >
                                    프로필 저장
                                </Button>
                            </VStack>
                        </VStack>
                    </Box>

                    {/* Bookmarked Section */}
                    <Box flex="2" w="100%">
                        {/* 내 자소서·이력서 바로가기 */}
                        <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm" mb={6}>
                            <Flex justify="space-between" align="center" mb={4}>
                                <Text fontSize="lg" fontWeight="bold">내 자소서·이력서</Text>
                                <Button size="sm" variant="ghost" colorPalette="blue" onClick={() => navigate("/analyze-application")}>
                                    전체보기
                                </Button>
                            </Flex>
                            {loadingHistory ? (
                                <Flex justify="center" p={8}><Spinner /></Flex>
                            ) : resumes.length === 0 ? (
                                <Text color="gray.500" py={8} textAlign="center">작성한 자소서·이력서가 없습니다.</Text>
                            ) : (
                                <VStack align="stretch" gap={2}>
                                    {resumes.slice(0, 5).map((resume) => (
                                        <Flex
                                            key={resume.id}
                                            justify="space-between"
                                            align="center"
                                            p={3}
                                            border="1px solid"
                                            borderColor="gray.200"
                                            borderRadius="lg"
                                            cursor="pointer"
                                            _hover={{ bg: "bg.subtle" }}
                                            onClick={() => navigate("/analyze-application")}
                                        >
                                            <HStack gap={2}>
                                                <FileText size={16} color="var(--chakra-colors-blue-500)" />
                                                <Text fontWeight="medium" fontSize="sm">{resume.title}</Text>
                                            </HStack>
                                            <Text fontSize="xs" color="gray.500">
                                                {new Date(resume.updated_at).toLocaleDateString("ko-KR")}
                                            </Text>
                                        </Flex>
                                    ))}
                                </VStack>
                            )}
                        </Box>

                        {/* 최근 모의면접 기록 + 다시보기 */}
                        <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm" mb={6}>
                            <Text fontSize="lg" fontWeight="bold" mb={4}>최근 모의면접 기록</Text>
                            {loadingHistory ? (
                                <Flex justify="center" p={8}><Spinner /></Flex>
                            ) : interviewSessions.length === 0 ? (
                                <Text color="gray.500" py={8} textAlign="center">모의면접 기록이 없습니다.</Text>
                            ) : (
                                <VStack align="stretch" gap={3}>
                                    {interviewSessions.map((session) => {
                                        const isExpanded = expandedSessionId === session.id
                                        return (
                                            <Box
                                                key={session.id}
                                                border="1px solid"
                                                borderColor="gray.200"
                                                borderRadius="xl"
                                                overflow="hidden"
                                            >
                                                <Flex
                                                    justify="space-between"
                                                    align="center"
                                                    p={4}
                                                    cursor="pointer"
                                                    _hover={{ bg: "bg.subtle" }}
                                                    onClick={() =>
                                                        setExpandedSessionId(isExpanded ? null : session.id)
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
                                                    {isExpanded ? <ChevronUp size={16} color="gray" /> : <ChevronDown size={16} color="gray" />}
                                                </Flex>
                                                {isExpanded && (
                                                    <SessionReplay session={session} />
                                                )}
                                            </Box>
                                        )
                                    })}
                                </VStack>
                            )}
                        </Box>
                        <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm" mb={6}>
                            <Text fontSize="lg" fontWeight="bold" mb={4}>스크랩한 채용 공고</Text>
                            {loadingData ? (
                                <Flex justify="center" p={8}><Spinner /></Flex>
                            ) : likedPosts.length === 0 ? (
                                <Text color="gray.500" py={8} textAlign="center">스크랩한 채용 공고가 없습니다.</Text>
                            ) : (
                                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
                                    {likedPosts.map(post => (
                                        <Box key={post.id} p={4} border="1px solid" borderColor="gray.200" borderRadius="xl">
                                            <Flex justify="space-between" align="flex-start" mb={2}>
                                                <Box>
                                                    <Text fontWeight="bold" fontSize="md">{post.title}</Text>
                                                    <Text fontSize="sm" color="gray.500">{post.companyName}</Text>
                                                </Box>
                                                <Button variant="ghost" size="sm" color="red.500" onClick={() => unbookmarkPost(post.id)}>
                                                    <Heart size={16} fill="currentColor" />
                                                </Button>
                                            </Flex>
                                            <HStack gap={2} mt={3}>
                                                <Badge colorPalette="gray" variant="subtle">{post.location}</Badge>
                                                <Badge colorPalette="blue" variant="subtle">{post.jobCategory}</Badge>
                                            </HStack>
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            )}
                        </Box>

                        <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm">
                            <Text fontSize="lg" fontWeight="bold" mb={4}>추천받은 맞춤 공고 스크랩</Text>
                            {loadingData ? (
                                <Flex justify="center" p={8}><Spinner /></Flex>
                            ) : likedJobs.length === 0 ? (
                                <Text color="gray.500" py={8} textAlign="center">스크랩한 추천 공고가 없습니다.</Text>
                            ) : (
                                <SimpleGrid columns={{ base: 1, xl: 2 }} gap={4}>
                                    {likedJobs.map(job => (
                                        <Box key={job.id} p={4} border="1px solid" borderColor="gray.200" borderRadius="xl">
                                            <Flex justify="space-between" align="flex-start" mb={2}>
                                                <Box>
                                                    <Text fontWeight="bold" fontSize="md">{job.job_title}</Text>
                                                    <Text fontSize="sm" color="gray.500">{job.company}</Text>
                                                </Box>
                                                <Button variant="ghost" size="sm" color="red.500" onClick={() => unbookmarkJob(job.job_title, job.company)}>
                                                    <Heart size={16} fill="currentColor" />
                                                </Button>
                                            </Flex>
                                            {job.reason && (
                                                <Text fontSize="xs" color="fg.muted" mt={2} bg="bg.subtle" p={2} borderRadius="md">
                                                    {job.reason}
                                                </Text>
                                            )}
                                        </Box>
                                    ))}
                                </SimpleGrid>
                            )}
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}
