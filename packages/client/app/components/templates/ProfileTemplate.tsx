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
import { Camera, Heart, FileText, Mic, TrendingUp, Bookmark } from "lucide-react"
import Header from "../organisms/Header"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate, useLocation } from "react-router"
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

export default function ProfileTemplate() {
    const { user, refreshUser, loading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [name, setName] = useState(user?.name || "")
    const [nickname, setNickname] = useState(user?.nickname || "")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [isChangingPassword, setIsChangingPassword] = useState(false)

    const [likedPosts, setLikedPosts] = useState<Post[]>([])
    const [likedJobs, setLikedJobs] = useState<LikedJob[]>([])
    const [loadingData, setLoadingData] = useState(true)

    const [resumes, setResumes] = useState<ResumeSummary[]>([])
    const [interviewSessions, setInterviewSessions] = useState<
        InterviewSessionSummary[]
    >([])
    const [loadingHistory, setLoadingHistory] = useState(true)

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

    useEffect(() => {
        if (!location.hash) return
        const id = location.hash.slice(1)
        const el = document.getElementById(id)
        el?.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [location.hash, loadingHistory])

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

    const handleChangePassword = async () => {
        setPasswordError("")

        if (!currentPassword || !newPassword || !confirmPassword) {
            setPasswordError("모든 항목을 입력해주세요.")
            return
        }
        if (newPassword.length < 8) {
            setPasswordError("새 비밀번호는 8자 이상이어야 합니다.")
            return
        }
        if (newPassword !== confirmPassword) {
            setPasswordError("새 비밀번호가 일치하지 않습니다.")
            return
        }

        setIsChangingPassword(true)
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch("/api/users/password", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ currentPassword, newPassword })
            })
            const data = await resp.json()

            if (resp.ok) {
                setCurrentPassword("")
                setNewPassword("")
                setConfirmPassword("")
                alert("비밀번호가 변경되었습니다.")
            } else {
                setPasswordError(data.error || "비밀번호 변경에 실패했습니다.")
            }
        } catch (err) {
            console.error("Password change failed:", err)
            setPasswordError("오류가 발생했습니다.")
        } finally {
            setIsChangingPassword(false)
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

    const scoredSessions = interviewSessions.filter(
        (s) => typeof s.report_data?.overallScore === "number",
    )
    const avgScore =
        scoredSessions.length > 0
            ? Math.round(
                  scoredSessions.reduce(
                      (sum, s) => sum + (s.report_data.overallScore as number),
                      0,
                  ) / scoredSessions.length,
              )
            : null
    const totalScraps = likedPosts.length + likedJobs.length

    const summaryStats = [
        {
            label: "누적 모의면접",
            value: `${interviewSessions.length}회`,
            icon: Mic,
        },
        {
            label: "평균 점수",
            value: avgScore !== null ? `${avgScore}점` : "-",
            icon: TrendingUp,
        },
        {
            label: "작성한 자소서·이력서",
            value: `${resumes.length}개`,
            icon: FileText,
        },
        {
            label: "스크랩한 공고",
            value: `${totalScraps}개`,
            icon: Bookmark,
        },
    ]

    return (
        <Box bg="bg.subtle" minH="100vh">
            <Header />
            <Box maxW="1000px" mx="auto" pt="100px" px={4} pb={12}>
                <Text fontSize="2xl" fontWeight="bold" mb={8}>마이페이지</Text>

                {loadingHistory || loadingData ? (
                    <Flex justify="center" p={6} mb={8}>
                        <Spinner size="sm" />
                    </Flex>
                ) : (
                    <SimpleGrid columns={{ base: 2, md: 4 }} gap={4} mb={8}>
                        {summaryStats.map((stat) => (
                            <Box
                                key={stat.label}
                                bg="bg.panel"
                                p={4}
                                borderRadius="2xl"
                                boxShadow="sm"
                            >
                                <HStack gap={2} color="blue.600" mb={1.5}>
                                    <stat.icon size={16} />
                                    <Text fontSize="xs" color="gray.500" fontWeight="semibold">
                                        {stat.label}
                                    </Text>
                                </HStack>
                                <Text fontSize="xl" fontWeight="bold" color="gray.900">
                                    {stat.value}
                                </Text>
                            </Box>
                        ))}
                    </SimpleGrid>
                )}

                <Flex gap={8} direction={{ base: "column", md: "row" }} align="flex-start">
                    <VStack gap={6} flex="1" w="100%" maxW={{ md: "350px" }} align="stretch">
                    {/* Profile Edit Section */}
                    <Box bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm">
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

                    {/* 계정/보안 설정 */}
                    <Box id="account-settings" bg="bg.panel" p={6} borderRadius="2xl" boxShadow="sm">
                        <Text fontSize="lg" fontWeight="bold" mb={4}>계정/보안 설정</Text>
                        <VStack gap={4} align="stretch">
                            <Box>
                                <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">현재 비밀번호</Text>
                                <Input
                                    type="password"
                                    value={currentPassword}
                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                    placeholder="현재 비밀번호"
                                    bg="bg.subtle"
                                />
                            </Box>
                            <Box>
                                <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">새 비밀번호</Text>
                                <Input
                                    type="password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="8자 이상 입력하세요"
                                    bg="bg.subtle"
                                />
                            </Box>
                            <Box>
                                <Text fontSize="sm" fontWeight="semibold" mb={1} color="fg.muted">새 비밀번호 확인</Text>
                                <Input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="새 비밀번호를 다시 입력하세요"
                                    bg="bg.subtle"
                                />
                            </Box>
                            {passwordError && (
                                <Text fontSize="xs" color="red.500">{passwordError}</Text>
                            )}
                            <Button
                                w="100%"
                                colorPalette="blue"
                                variant="outline"
                                onClick={handleChangePassword}
                                loading={isChangingPassword}
                            >
                                비밀번호 변경
                            </Button>
                        </VStack>
                    </Box>
                    </VStack>

                    {/* Bookmarked Section */}
                    <Box flex="2" w="100%">
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
