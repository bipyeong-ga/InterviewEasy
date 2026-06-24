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
import { FaCamera, FaHeart } from "react-icons/fa"
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

export default function ProfileTemplate() {
    const { user, refreshUser, loading } = useAuth()
    const navigate = useNavigate()
    const fileInputRef = useRef<HTMLInputElement>(null)

    const [name, setName] = useState(user?.name || "")
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [isSaving, setIsSaving] = useState(false)

    const [likedPosts, setLikedPosts] = useState<Post[]>([])
    const [likedJobs, setLikedJobs] = useState<LikedJob[]>([])
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        if (loading) return
        if (!user) {
            navigate("/login")
            return
        }
        setName(user.name || "")
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
        <Box bg="gray.50" minH="100vh">
            <Header />
            <Box maxW="1000px" mx="auto" pt="100px" px={4} pb={12}>
                <Text fontSize="2xl" fontWeight="bold" mb={8}>마이페이지</Text>

                <Flex gap={8} direction={{ base: "column", md: "row" }} align="flex-start">
                    {/* Profile Edit Section */}
                    <Box bg="white" p={6} borderRadius="2xl" boxShadow="sm" flex="1" w="100%" maxW={{ md: "350px" }}>
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
                                    bg="blue.500"
                                    color="white"
                                    w={8}
                                    h={8}
                                    borderRadius="full"
                                    align="center"
                                    justify="center"
                                    boxShadow="md"
                                >
                                    <FaCamera size={14} />
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
                                    <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.600">이름</Text>
                                    <Input
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="이름을 입력하세요"
                                        bg="gray.50"
                                    />
                                </Box>
                                <Box w="100%">
                                    <Text fontSize="sm" fontWeight="semibold" mb={1} color="gray.600">이메일</Text>
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
                        <Box bg="white" p={6} borderRadius="2xl" boxShadow="sm" mb={6}>
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
                                                    <FaHeart />
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

                        <Box bg="white" p={6} borderRadius="2xl" boxShadow="sm">
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
                                                    <FaHeart />
                                                </Button>
                                            </Flex>
                                            {job.reason && (
                                                <Text fontSize="xs" color="gray.600" mt={2} bg="gray.50" p={2} borderRadius="md">
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
