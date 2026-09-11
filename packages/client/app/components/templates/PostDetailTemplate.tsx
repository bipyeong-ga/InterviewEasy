import React, { useState } from "react"
import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Badge,
    Button,
    SimpleGrid,
    Image,
} from "@chakra-ui/react"
import {
    FaArrowLeft,
    FaHeart,
    FaRegHeart,
    FaMapMarkerAlt,
    FaBriefcase,
    FaMoneyBillWave,
    FaClock,
    FaUser,
    FaCode,
    FaCheckCircle,
} from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";

import { useNavigate, useParams } from "react-router"
import Header from "../organisms/Header"
import { type Post } from "../../data/mockPosts"
import { useEffect } from "react"

// ────────────────────────────────────────────────
// Info Badge Row
// ────────────────────────────────────────────────
function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <Flex align="center" gap={3} py={3} borderBottom="1px solid" borderColor="border.muted">
            <Box color="blue.500" minW="16px">{icon}</Box>
            <Text fontSize="sm" color="gray.500" minW="80px">{label}</Text>
            <Text fontSize="sm" fontWeight="medium" color="gray.800">{value}</Text>
        </Flex>
    )
}

// ────────────────────────────────────────────────
// Section Block
// ────────────────────────────────────────────────
function SectionBlock({ title, items }: { title: string; items: string[] }) {
    return (
        <Box mb={8}>
            <Flex align="center" gap={2} mb={4}>
                <Box w="4px" h="20px" bg="blue.500" borderRadius="full" />
                <Text fontSize="lg" fontWeight="bold" color="gray.800">{title}</Text>
            </Flex>
            <VStack align="stretch" gap={2} pl={4}>
                {items.map((item, idx) => (
                    <Flex key={idx} align="flex-start" gap={2}>
                        <Box mt="6px" color="blue.400" flexShrink={0}>
                            <FaCheckCircle size={12} />
                        </Box>
                        <Text fontSize="sm" color="gray.700" lineHeight="1.7">{item}</Text>
                    </Flex>
                ))}
            </VStack>
        </Box>
    )
}

// ────────────────────────────────────────────────
// Company Logo
// ────────────────────────────────────────────────
function CompanyLogo({ post }: { post: Post }) {
    const colors = ["#1a1a1a", "#0066CC", "#FF4500", "#E8001D", "#00B900", "#6B3FA0"]
    const fallbackBg = colors[post.id % colors.length]
    const displayName = post.companyName.replace("(주) ", "").replace("코리아", "")

    return (
        <Box
            w="100%"
            h="120px"
            bg="bg.subtle"
            border="1px solid"
            borderColor="border.muted"
            borderRadius="xl"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={4}
            overflow="hidden"
            p={3}
        >
            <Image
                src={post.companyLogo}
                alt={post.companyName}
                maxH="90px"
                maxW="100%"
                objectFit="contain"
                onError={(e) => {
                    const el = e.currentTarget as HTMLImageElement
                    el.style.display = "none"
                    const parent = el.parentElement
                    if (parent && !parent.querySelector(".logo-fallback")) {
                        const fallback = document.createElement("div")
                        fallback.className = "logo-fallback"
                        fallback.style.cssText = `
                            width:100%;height:100%;display:flex;
                            align-items:center;justify-content:center;
                            background:${fallbackBg};border-radius:12px;
                        `
                        fallback.innerHTML = `<span style="font-weight:900;font-size:24px;color:white;letter-spacing:-1px">${displayName.slice(0, 8)}</span>`
                        parent.appendChild(fallback)
                    }
                }}
            />
        </Box>
    )
}

// ────────────────────────────────────────────────
// Related Jobs
// ────────────────────────────────────────────────
function RelatedJobCard({ post }: { post: Post }) {
    const navigate = useNavigate()
    return (
        <Box
            bg="bg.panel"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ boxShadow: "md", transform: "translateY(-1px)" }}
            onClick={() => navigate(`/post/${post.id}`)}
        >
            <Box
                w="100%"
                h="56px"
                bg="bg.subtle"
                borderRadius="lg"
                mb={3}
                display="flex"
                alignItems="center"
                px={3}
                border="1px solid"
                borderColor="border.muted"
            >
                <Text fontWeight="800" fontSize="16px" color="gray.700">
                    {post.companyName.replace("(주) ", "").slice(0, 6)}
                </Text>
            </Box>
            <Text
                fontWeight="bold"
                fontSize="sm"
                color="gray.800"
                mb={1}
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {post.title}
            </Text>
            <Text fontSize="xs" color="gray.500" mb={2}>{post.companyName}</Text>
            <Badge colorPalette="blue" variant="subtle" fontSize="2xs" borderRadius="full" px={2}>
                {post.jobCategory}
            </Badge>
        </Box>
    )
}

// ────────────────────────────────────────────────
// Main Template
// ────────────────────────────────────────────────
const PostDetailTemplate: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()

    const [bookmarked, setBookmarked] = useState(false)

    const [post, setPost] = useState<Post | null>(null)
    const [relatedPosts, setRelatedPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true)
            try {
                const token = localStorage.getItem("token")
                const headers = { ...(token ? { Authorization: `Bearer ${token}` } : {}) }
                
                const resp = await fetch(`/api/posts/${id}`, { headers })
                if (resp.ok) {
                    const d = await resp.json()
                    const formattedPost = {
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
                    }
                    setPost(formattedPost)
                    setBookmarked(formattedPost.bookmarked)

                    const allResp = await fetch("/api/posts", { headers })
                    if (allResp.ok) {
                        const allData = await allResp.json()
                        const formattedAll = allData.map((d: any) => ({
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
                        }))
                        setRelatedPosts(formattedAll.filter(
                            (p: any) => p.id !== formattedPost.id && (p.jobCategory === formattedPost.jobCategory || p.location === formattedPost.location)
                        ).slice(0, 3))
                    }
                }
            } catch (err) {
                console.error("Failed to fetch post:", err)
            } finally {
                setLoading(false)
            }
        }
        if (id) {
            fetchPost()
        }
    }, [id])

    const handleToggleBookmark = async () => {
        if (!post) return
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/posts/${post.id}/bookmark`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ isBookmarked: !bookmarked })
            })

            if (resp.ok) {
                setBookmarked(!bookmarked)
            }
        } catch (err) {
            console.error("Failed to toggle bookmark:", err)
        }
    }

    if (loading) {
        return (
            <>
                <Header />
                <Flex pt="72px" minH="100vh" align="center" justify="center">
                    <Text>로딩 중...</Text>
                </Flex>
            </>
        )
    }

    if (!post) {
        return (
            <>
                <Header />
                <Flex pt="72px" minH="100vh" align="center" justify="center" direction="column" gap={4}>
                    <Text fontSize="5xl">😢</Text>
                    <Text fontSize="xl" fontWeight="bold" color="fg.muted">공고를 찾을 수 없습니다</Text>
                    <Button onClick={() => navigate("/post")} bg="blue.500" color="white" borderRadius="full">
                        목록으로 돌아가기
                    </Button>
                </Flex>
            </>
        )
    }

    const isExpired = post.deadline === "채용 완료 시"

    return (
        <>
            <Header />
            <Box pt="72px" minH="100vh" bg="bg.subtle">
                <Box maxW="1200px" mx="auto" px={6} py={8}>

                    {/* Back button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        color="gray.500"
                        mb={6}
                        onClick={() => navigate("/post")}
                        _hover={{ color: "blue.500", bg: "blue.50" }}
                    >
                        <FaArrowLeft />
                        <Text ml={1}>공고 목록</Text>
                    </Button>

                    <Flex gap={8} align="flex-start" flexDirection={{ base: "column", lg: "row" }}>

                        {/* ── Left Column: Main Content ── */}
                        <Box flex={1} minW={0}>

                            {/* Hero Card */}
                            <Box
                                bg="bg.panel"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                p={6}
                                mb={6}
                                boxShadow="sm"
                            >
                                <CompanyLogo post={post} />

                                <Flex justify="space-between" align="flex-start" gap={4}>
                                    <Box flex={1}>
                                        <Text fontSize="xl" fontWeight="bold" color="fg" mb={1}>
                                            {post.title}
                                        </Text>
                                        <Text fontSize="sm" color="gray.500" mb={3}>{post.companyName}</Text>

                                        <HStack gap={2} flexWrap="wrap">
                                            <Badge colorPalette="blue" variant="subtle" borderRadius="full" px={3} py={1}>
                                                {post.jobCategory}
                                            </Badge>
                                            <Badge colorPalette="gray" variant="subtle" borderRadius="full" px={3} py={1}>
                                                {post.employmentType}
                                            </Badge>
                                            <Badge
                                                colorPalette={isExpired ? "red" : "green"}
                                                variant="subtle"
                                                borderRadius="full"
                                                px={3}
                                                py={1}
                                            >
                                                {isExpired ? "채용 완료 시 마감" : `~${post.deadline}`}
                                            </Badge>
                                        </HStack>
                                    </Box>

                                    {/* Bookmark + Apply */}
                                    <VStack gap={2}>
                                        <Button
                                            variant="outline"
                                            colorPalette="red"
                                            borderRadius="full"
                                            px={6}
                                            onClick={handleToggleBookmark}
                                        >
                                            {bookmarked ? <FaHeart color="var(--chakra-colors-red-500)" /> : <FaRegHeart />}
                                            <Text ml={2}>{bookmarked ? "스크랩 됨" : "스크랩"}</Text>
                                        </Button>
                                    </VStack>
                                </Flex>
                            </Box>

                            {/* Info Card */}
                            <Box
                                bg="bg.panel"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                px={6}
                                py={4}
                                mb={6}
                                boxShadow="sm"
                            >
                                <Text fontSize="md" fontWeight="bold" color="gray.800" mb={2}>공고 정보</Text>
                                <InfoItem icon={<FaMapMarkerAlt size={14} />} label="근무지" value={`${post.location} ${post.district}`} />
                                <InfoItem icon={<FaUser size={14} />} label="경력" value={post.experience} />
                                <InfoItem icon={<FaBriefcase size={14} />} label="고용형태" value={post.employmentType} />
                                <InfoItem icon={<FaMoneyBillWave size={14} />} label="급여" value={post.salary} />
                                <InfoItem icon={<FaClock size={14} />} label="마감일" value={post.deadline} />
                            </Box>

                            <Box
                                bg="bg.panel"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                px={6}
                                py={5}
                                mb={6}
                                boxShadow="sm"
                            >
                                <Flex align="center" gap={2} mb={4}>
                                    <FaCode color="blue.600" size={16} />
                                    <Text fontSize="md" fontWeight="bold" color="gray.800">기술 스택</Text>
                                </Flex>
                                <HStack gap={2} flexWrap="wrap">
                                    {post.techStack.map((t) => (
                                        <Badge
                                            key={t}
                                            colorPalette="blue"
                                            variant="outline"
                                            borderRadius="lg"
                                            px={3}
                                            py={1}
                                            fontSize="sm"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </HStack>
                            </Box>

                            {/* Description + sections */}
                            <Box
                                bg="bg.panel"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                px={6}
                                py={6}
                                mb={6}
                                boxShadow="sm"
                            >
                                {/* Description */}
                                <Box mb={8}>
                                    <Flex align="center" gap={2} mb={4}>
                                        <Box w="4px" h="20px" bg="blue.500" borderRadius="full" />
                                        <Text fontSize="lg" fontWeight="bold" color="gray.800">회사 소개</Text>
                                    </Flex>
                                    <Text fontSize="sm" color="fg.muted" lineHeight="1.8" pl={4}>
                                        {post.description}
                                    </Text>
                                </Box>

                                <SectionBlock title="주요 업무" items={post.responsibilities} />
                                <SectionBlock title="자격 요건" items={post.requirements} />
                                <SectionBlock title="우대 사항" items={post.preferredRequirements} />
                                <SectionBlock title="복리 후생" items={post.benefits} />
                            </Box>
                        </Box>

                        {/* ── Right Column: Sticky apply + related ── */}
                        <Box w={{ base: "100%", lg: "320px" }} flexShrink={0}>
                            {/* Sticky Apply Card */}
                            <Box
                                bg="bg.panel"
                                borderRadius="2xl"
                                border="1px solid"
                                borderColor="gray.200"
                                p={5}
                                mb={6}
                                boxShadow="sm"
                                position={{ base: "static", lg: "sticky" }}
                                top="90px"
                            >
                                <Text fontSize="md" fontWeight="bold" color="gray.800" mb={1}>
                                    {post.title}
                                </Text>
                                <Text fontSize="sm" color="gray.500" mb={4}>{post.companyName}</Text>

                                <VStack gap={2} mb={4}>
                                    <Flex w="100%" justify="space-between" fontSize="xs">
                                        <Text color="gray.500">근무지</Text>
                                        <Text fontWeight="medium">{post.district}</Text>
                                    </Flex>
                                    <Flex w="100%" justify="space-between" fontSize="xs">
                                        <Text color="gray.500">마감일</Text>
                                        <Text fontWeight="medium" color={isExpired ? "red.500" : "gray.700"}>
                                            {post.deadline}
                                        </Text>
                                    </Flex>
                                    <Flex w="100%" justify="space-between" fontSize="xs">
                                        <Text color="gray.500">경력</Text>
                                        <Text fontWeight="medium">{post.experience}</Text>
                                    </Flex>
                                </VStack>

                                <Button
                                    w="100%"
                                    bg="blue.500"
                                    color="white"
                                    borderRadius="xl"
                                    size="lg"
                                    _hover={{ bg: "blue.600" }}
                                    mb={3}
                                    fontWeight="bold"
                                >
                                    지원하기
                                </Button>

                                <Button
                                    w="100%"
                                    variant="outline"
                                    borderColor={bookmarked ? "red.300" : "gray.200"}
                                    color={bookmarked ? "red.500" : "gray.600"}
                                    borderRadius="xl"
                                    onClick={() => setBookmarked((v) => !v)}
                                    _hover={{ bg: bookmarked ? "red.50" : "gray.50" }}
                                >
                                    {bookmarked ? <FaHeart /> : <FaRegHeart />}
                                    <Text ml={1}>{bookmarked ? "북마크 해제" : "북마크"}</Text>
                                </Button>
                            </Box>

                            {/* Related Jobs */}
                            {relatedPosts.length > 0 && (
                                <Box>
                                    <Text fontSize="md" fontWeight="bold" color="gray.700" mb={3}>
                                        관련 공고
                                    </Text>
                                    <VStack gap={3}>
                                        {relatedPosts.map((p) => (
                                            <RelatedJobCard key={p.id} post={p} />
                                        ))}
                                    </VStack>
                                </Box>
                            )}
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </>
    )
}

export default PostDetailTemplate
