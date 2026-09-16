import React, { useState, useEffect } from "react"
import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Badge,
    Button,
    IconButton,
    SimpleGrid,
    Image,
} from "@chakra-ui/react"
import { ArrowLeft, Heart, Share2, SearchX } from "lucide-react"

import { useNavigate, useParams } from "react-router"
import Header from "../organisms/Header"
import { toaster } from "../ui/toaster"
import { type Post } from "../../data/mockPosts"

// ────────────────────────────────────────────────
// Structured info grid (label / value pairs, no decorative icons)
// ────────────────────────────────────────────────
function InfoGrid({
    rows,
}: {
    rows: { label: string; value: string; accent?: boolean }[]
}) {
    return (
        <SimpleGrid columns={2} gapX={8} gapY={3}>
            {rows.map((r) => (
                <Flex
                    key={r.label}
                    justify="space-between"
                    borderBottom="1px solid"
                    borderColor="gray.100"
                    pb={2}
                >
                    <Text fontSize="sm" color="gray.500">
                        {r.label}
                    </Text>
                    <Text
                        fontSize="sm"
                        fontWeight="semibold"
                        color={r.accent ? "red.500" : "gray.800"}
                    >
                        {r.value}
                    </Text>
                </Flex>
            ))}
        </SimpleGrid>
    )
}

// ────────────────────────────────────────────────
// Content section: plain heading + hairline divider (no accent bar)
// ────────────────────────────────────────────────
function ContentSection({
    title,
    children,
}: {
    title: string
    children: React.ReactNode
}) {
    return (
        <Box pt={6} mt={6} borderTop="1px solid" borderColor="gray.100">
            <Text fontSize="md" fontWeight="bold" color="gray.900" mb={3}>
                {title}
            </Text>
            {children}
        </Box>
    )
}

function BulletList({ items }: { items: string[] }) {
    return (
        <VStack align="stretch" gap={2}>
            {items.map((item, idx) => (
                <HStack key={idx} align="flex-start" gap={2.5}>
                    <Text color="gray.300" fontSize="sm" lineHeight="1.75">
                        –
                    </Text>
                    <Text fontSize="sm" color="gray.700" lineHeight="1.75">
                        {item}
                    </Text>
                </HStack>
            ))}
        </VStack>
    )
}

// ────────────────────────────────────────────────
// Company Logo
// ────────────────────────────────────────────────
function CompanyLogo({ post, size }: { post: Post; size: string }) {
    const colors = ["#1a1a1a", "#0066CC", "#FF4500", "#E8001D", "#00B900", "#6B3FA0"]
    const fallbackBg = colors[post.id % colors.length]
    const displayName = post.companyName.replace("(주) ", "").replace("코리아", "")

    return (
        <Box
            w={size}
            h={size}
            bg="gray.50"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            overflow="hidden"
            p={1.5}
            flexShrink={0}
        >
            <Image
                src={post.companyLogo}
                alt={post.companyName}
                maxH="100%"
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
                            background:${fallbackBg};border-radius:6px;
                        `
                        fallback.innerHTML = `<span style="font-weight:900;font-size:13px;color:white;letter-spacing:-0.5px">${displayName.slice(0, 4)}</span>`
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
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="md"
            p={3.5}
            cursor="pointer"
            transition="border-color 0.15s"
            _hover={{ borderColor: "blue.300" }}
            onClick={() => navigate(`/post/${post.id}`)}
        >
            <HStack gap={3} align="flex-start">
                <CompanyLogo post={post} size="36px" />
                <Box minW={0} flex={1}>
                    <Text
                        fontWeight="bold"
                        fontSize="sm"
                        color="gray.800"
                        mb={0.5}
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            overflow: "hidden",
                        }}
                    >
                        {post.title}
                    </Text>
                    <Text fontSize="xs" color="gray.500">
                        {post.companyName}
                    </Text>
                </Box>
            </HStack>
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
                        bookmarked: d.bookmarked,
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
                            bookmarked: d.bookmarked,
                        }))
                        setRelatedPosts(
                            formattedAll
                                .filter(
                                    (p: any) =>
                                        p.id !== formattedPost.id &&
                                        (p.jobCategory === formattedPost.jobCategory ||
                                            p.location === formattedPost.location),
                                )
                                .slice(0, 3),
                        )
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
        const next = !bookmarked
        setBookmarked(next)
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/posts/${post.id}/bookmark`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ isBookmarked: next }),
            })
            if (!resp.ok) {
                setBookmarked(!next)
            }
        } catch (err) {
            console.error("Failed to toggle bookmark:", err)
            setBookmarked(!next)
        }
    }

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
            toaster.create({
                title: "링크가 복사되었습니다",
                type: "success",
            })
        } catch (err) {
            console.error("Failed to copy link:", err)
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
                    <Box color="gray.300">
                        <SearchX size={56} />
                    </Box>
                    <Text fontSize="xl" fontWeight="bold" color="fg.muted">
                        공고를 찾을 수 없습니다
                    </Text>
                    <Button
                        onClick={() => navigate("/post")}
                        bg="blue.600"
                        _hover={{ bg: "blue.700" }}
                        color="white"
                        borderRadius="lg"
                    >
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
            <Box pt="72px" minH="100vh" bg="gray.50">
                <Box maxW="1160px" mx="auto" px={6} py={8}>
                    <Button
                        variant="ghost"
                        size="sm"
                        color="gray.500"
                        mb={5}
                        onClick={() => navigate("/post")}
                        _hover={{ color: "blue.600", bg: "blue.50" }}
                    >
                        <ArrowLeft size={16} />
                        <Text ml={1}>공고 목록</Text>
                    </Button>

                    <Flex gap={6} align="flex-start" flexDirection={{ base: "column", lg: "row" }}>
                        {/* ── Left Column: Main Content ── */}
                        <Box
                            flex={1}
                            minW={0}
                            w="100%"
                            bg="white"
                            border="1px solid"
                            borderColor="gray.200"
                            borderRadius="lg"
                            p={{ base: 5, md: 7 }}
                        >
                            {/* Header */}
                            <Flex justify="space-between" align="flex-start" gap={4} mb={5}>
                                <HStack gap={4} align="flex-start">
                                    <CompanyLogo post={post} size="56px" />
                                    <Box>
                                        <Text fontSize="sm" color="blue.600" fontWeight="semibold" mb={1}>
                                            {post.companyName}
                                        </Text>
                                        <Text fontSize="xl" fontWeight="bold" color="gray.900" lineHeight="1.4">
                                            {post.title}
                                        </Text>
                                    </Box>
                                </HStack>

                                <HStack gap={1} flexShrink={0}>
                                    <IconButton
                                        aria-label={bookmarked ? "북마크 해제" : "북마크"}
                                        aria-pressed={bookmarked}
                                        variant="ghost"
                                        size="sm"
                                        color={bookmarked ? "red.500" : "gray.400"}
                                        onClick={handleToggleBookmark}
                                    >
                                        <Heart size={18} fill={bookmarked ? "currentColor" : "none"} />
                                    </IconButton>
                                    <IconButton
                                        aria-label="링크 공유"
                                        variant="ghost"
                                        size="sm"
                                        color="gray.400"
                                        onClick={handleShare}
                                    >
                                        <Share2 size={18} />
                                    </IconButton>
                                </HStack>
                            </Flex>

                            <Badge
                                variant="outline"
                                colorPalette="gray"
                                borderRadius="md"
                                px={2.5}
                                py={1}
                                fontSize="xs"
                                fontWeight="medium"
                                mb={6}
                            >
                                {post.jobCategory}
                            </Badge>

                            <InfoGrid
                                rows={[
                                    { label: "근무지", value: `${post.location} ${post.district}` },
                                    { label: "경력", value: post.experience },
                                    { label: "고용형태", value: post.employmentType },
                                    { label: "급여", value: post.salary },
                                    {
                                        label: "마감일",
                                        value: isExpired ? "채용 완료 시 마감" : post.deadline,
                                        accent: !isExpired,
                                    },
                                ]}
                            />

                            <ContentSection title="기술 스택">
                                <HStack gap={2} flexWrap="wrap">
                                    {post.techStack.map((t) => (
                                        <Badge
                                            key={t}
                                            colorPalette="blue"
                                            variant="subtle"
                                            borderRadius="md"
                                            px={2.5}
                                            py={1}
                                            fontSize="xs"
                                        >
                                            {t}
                                        </Badge>
                                    ))}
                                </HStack>
                            </ContentSection>

                            <ContentSection title="회사 소개">
                                <Text fontSize="sm" color="gray.600" lineHeight="1.8">
                                    {post.description}
                                </Text>
                            </ContentSection>

                            <ContentSection title="주요 업무">
                                <BulletList items={post.responsibilities} />
                            </ContentSection>

                            <ContentSection title="자격 요건">
                                <BulletList items={post.requirements} />
                            </ContentSection>

                            <ContentSection title="우대 사항">
                                <BulletList items={post.preferredRequirements} />
                            </ContentSection>

                            <ContentSection title="복리 후생">
                                <BulletList items={post.benefits} />
                            </ContentSection>
                        </Box>

                        {/* ── Right Column: Sticky apply + related ── */}
                        <Box w={{ base: "100%", lg: "300px" }} flexShrink={0}>
                            <Box
                                bg="white"
                                border="1px solid"
                                borderColor="gray.200"
                                borderRadius="lg"
                                p={5}
                                mb={5}
                                position={{ base: "static", lg: "sticky" }}
                                top="90px"
                            >
                                <Flex justify="space-between" align="center" mb={4}>
                                    <Text fontSize="xs" color="gray.500">
                                        마감일
                                    </Text>
                                    <Text
                                        fontSize="xs"
                                        fontWeight="bold"
                                        color={isExpired ? "gray.400" : "red.500"}
                                    >
                                        {isExpired ? "채용 완료 시" : post.deadline}
                                    </Text>
                                </Flex>

                                <Button
                                    w="100%"
                                    bg="blue.600"
                                    color="white"
                                    borderRadius="md"
                                    size="lg"
                                    _hover={{ bg: "blue.700" }}
                                    fontWeight="bold"
                                    mb={2}
                                >
                                    지원하기
                                </Button>

                                <Button
                                    w="100%"
                                    variant="outline"
                                    borderColor={bookmarked ? "red.200" : "gray.200"}
                                    color={bookmarked ? "red.500" : "gray.600"}
                                    borderRadius="md"
                                    onClick={handleToggleBookmark}
                                    _hover={{ bg: bookmarked ? "red.50" : "gray.50" }}
                                >
                                    <Heart size={15} fill={bookmarked ? "currentColor" : "none"} />
                                    <Text ml={1.5} fontSize="sm">
                                        {bookmarked ? "스크랩 됨" : "스크랩"}
                                    </Text>
                                </Button>
                            </Box>

                            {relatedPosts.length > 0 && (
                                <Box>
                                    <Text fontSize="sm" fontWeight="bold" color="gray.700" mb={3}>
                                        관련 공고
                                    </Text>
                                    <VStack gap={2.5}>
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
