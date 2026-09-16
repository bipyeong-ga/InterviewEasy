import React, { useState, useMemo } from "react"
import {
    Box,
    Flex,
    HStack,
    VStack,
    Text,
    Input,
    InputGroup,
    Badge,
    SimpleGrid,
    Button,
    IconButton,
    Checkbox,
    Image,
} from "@chakra-ui/react"
import {
    Search,
    MapPin,
    Briefcase,
    Heart,
    ChevronDown,
    ChevronUp,
    ChevronRight,
    RotateCcw,
    Sparkles,
    X,
    SearchX,
} from "lucide-react"
import { useNavigate, useSearchParams } from "react-router"
import Header from "../organisms/Header"
import { type Post } from "../../data/mockPosts"
import { getRegionsWithCounts, type Region } from "../../data/regions"
import { useEffect } from "react"

// ────────────────────────────────────────────────
// Job Card
// ────────────────────────────────────────────────
const LOGO_COLORS = ["#1a1a1a", "#0066CC", "#FF4500", "#E8001D", "#00B900", "#6B3FA0", "#005BAC"]
const WEEKDAYS = ["일", "월", "화", "수", "목", "금", "토"]

function getDeadlineInfo(deadline: string): { label: string; tone: "urgent" | "soon" | "normal" | "neutral" } {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(deadline)
    if (!match) {
        return { label: deadline, tone: "neutral" }
    }
    const target = new Date(Number(match[1]), Number(match[2]) - 1, Number(match[3]))
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const diffDays = Math.round((target.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
    // "~10.09(금)" style, matching how other job boards format a plain due date.
    const formatted = `~${Number(match[2])}.${match[3]}(${WEEKDAYS[target.getDay()]})`

    if (diffDays < 0) return { label: "마감", tone: "neutral" }
    if (diffDays === 0) return { label: "오늘 마감", tone: "urgent" }
    if (diffDays <= 3) return { label: `D-${diffDays}`, tone: "urgent" }
    if (diffDays <= 14) return { label: `D-${diffDays}`, tone: "soon" }
    return { label: formatted, tone: "normal" }
}

function JobCard({
    post,
    onToggleBookmark,
    recommendReason,
}: {
    post: Post
    onToggleBookmark: (id: number) => void
    recommendReason?: string
}) {
    const navigate = useNavigate()
    const cardColor = LOGO_COLORS[post.id % LOGO_COLORS.length]
    const deadlineInfo = getDeadlineInfo(post.deadline)
    const deadlineColor = {
        urgent: "red.600",
        soon: "orange.700",
        normal: "gray.500",
        neutral: "gray.400",
    }[deadlineInfo.tone]
    // "urgent"/"soon" get a tinted chip (not just colored text) so the D-day
    // color still reads WCAG AA against its own background at 12px.
    const deadlineChipBg: Record<string, string | undefined> = {
        urgent: "red.50",
        soon: "orange.50",
    }
    const visibleStack = post.techStack.slice(0, 3)
    const extraStackCount = post.techStack.length - visibleStack.length

    return (
        <Box
            bg="bg.panel"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
            cursor="pointer"
            transition="all 0.18s ease"
            _hover={{ boxShadow: "lg", borderColor: "blue.200", transform: "translateY(-2px)" }}
            position="relative"
            onClick={() => navigate(`/post/${post.id}`)}
        >
            <IconButton
                aria-label={post.bookmarked ? "북마크 해제" : "북마크"}
                aria-pressed={post.bookmarked}
                variant="plain"
                position="absolute"
                top={3}
                right={3}
                w={8}
                h={8}
                minW={8}
                p={0}
                borderRadius="full"
                bg="whiteAlpha.900"
                boxShadow="xs"
                onClick={(e) => {
                    e.stopPropagation()
                    onToggleBookmark(post.id)
                }}
                color={post.bookmarked ? "red.400" : "gray.300"}
                _hover={{ color: post.bookmarked ? "red.500" : "gray.400" }}
                transition="color 0.15s"
                zIndex={1}
            >
                <Heart size={15} fill={post.bookmarked ? "currentColor" : "none"} />
            </IconButton>

            <Flex
                w="100%"
                h="88px"
                borderRadius="lg"
                mb={3}
                align="center"
                justify="center"
                overflow="hidden"
                p={3}
                bg="bg.subtle"
                border="1px solid"
                borderColor="border.muted"
            >
                <Image
                    src={post.companyLogo}
                    alt={post.companyName}
                    maxH="56px"
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
                                background:${cardColor};border-radius:8px;
                            `
                            fallback.innerHTML = `<span style="font-weight:900;font-size:16px;color:white;letter-spacing:-0.5px">${post.companyName.replace("(주) ", "").slice(0, 5)}</span>`
                            parent.appendChild(fallback)
                        }
                    }}
                />
            </Flex>

            {/* Title */}
            <Text
                fontWeight="bold"
                fontSize="16px"
                color="gray.900"
                mb={1}
                pr={5}
                lineHeight="1.35"
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                }}
            >
                {post.title}
            </Text>

            {/* Company */}
            <Text fontSize="xs" color="gray.500" fontWeight="medium" mb={2}>
                {post.companyName}
            </Text>

            {/* Tech stack chips */}
            {visibleStack.length > 0 && (
                <HStack gap={1.5} mb={2.5} flexWrap="wrap">
                    {visibleStack.map((tech) => (
                        <Badge
                            key={tech}
                            variant="outline"
                            colorPalette="gray"
                            fontSize="10px"
                            fontWeight="medium"
                            borderRadius="md"
                            px={1.5}
                            py={0.5}
                            color="gray.600"
                            borderColor="gray.200"
                        >
                            {tech}
                        </Badge>
                    ))}
                    {extraStackCount > 0 && (
                        <Text fontSize="10px" color="gray.400">
                            +{extraStackCount}
                        </Text>
                    )}
                </HStack>
            )}

            {/* Location */}
            <HStack mb={3} gap={1.5}>
                <Box color="gray.400" flexShrink={0} display="flex">
                    <MapPin size={12} />
                </Box>
                <Text fontSize="xs" color="gray.400">
                    {post.location} · {post.district} · {post.experience}
                </Text>
            </HStack>

            {/* Bottom */}
            <Flex justify="space-between" align="center" mt={3}>
                <Badge
                    colorPalette="blue"
                    variant="subtle"
                    fontSize="2xs"
                    borderRadius="full"
                    px={2}
                    py={0.5}
                >
                    {post.jobCategory}
                </Badge>
                <Text
                    fontSize="xs"
                    color={deadlineColor}
                    fontWeight={deadlineInfo.tone === "urgent" ? "bold" : "medium"}
                    {...(deadlineChipBg[deadlineInfo.tone] && {
                        bg: deadlineChipBg[deadlineInfo.tone],
                        px: 2,
                        py: 0.5,
                        borderRadius: "full",
                    })}
                >
                    {deadlineInfo.label}
                </Text>
            </Flex>

            {/* AI Recommend Reason */}
            {recommendReason && (
                <Box mt={3} pt={3} borderTop="1px dashed" borderColor="blue.100">
                    <HStack align="flex-start" gap={1.5}>
                        <Box color="blue.500" mt={0.5}>
                            <Sparkles size={12} />
                        </Box>
                        <Text fontSize="xs" color="blue.600" css={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                            {recommendReason}
                        </Text>
                    </HStack>
                </Box>
            )}
        </Box>
    )
}

// ────────────────────────────────────────────────
// Region Filter Panel (2-column region list)
// ────────────────────────────────────────────────
function RegionFilterPanel({
    regions,
    selectedRegion,
    selectedDistricts,
    onSelectRegion,
    onToggleDistrict,
}: {
    regions: Region[]
    selectedRegion: string
    selectedDistricts: string[]
    onSelectRegion: (r: string) => void
    onToggleDistrict: (d: string) => void
}) {
    const [regionSearch, setRegionSearch] = useState("")
    const region = regions.find((r) => r.name === selectedRegion)

    // Split regions into 2 columns
    const half = Math.ceil(regions.length / 2)
    const col1 = regions.slice(0, half)
    const col2 = regions.slice(half)

    const formatCount = (n: number) => n.toLocaleString()

    return (
        <Box borderTop="1px solid" borderColor="border.muted" bg="bg.panel">
            {/* Region search */}
            <Box px={4} pt={3} pb={2}>
                <InputGroup startElement={<Search color="gray.400" size={12} />} maxW="220px">
                    <Input
                        placeholder="지역명 입력"
                        size="sm"
                        borderRadius="md"
                        borderColor="gray.200"
                        fontSize="13px"
                        value={regionSearch}
                        onChange={(e) => setRegionSearch(e.target.value)}
                        _focus={{ borderColor: "blue.400", boxShadow: "none" }}
                    />
                </InputGroup>
            </Box>

            <Flex>
                {/* Left: 2-column region list */}
                <Box
                    borderRight="1px solid"
                    borderColor="border.muted"
                    minW="230px"
                    flexShrink={0}
                    maxH="280px"
                    overflowY="auto"
                >
                    <Flex>
                        {/* Column 1 */}
                        <VStack align="stretch" gap={0} flex={1}>
                            {col1
                                .filter((r) => r.name.includes(regionSearch))
                                .map((r) => (
                                    <RegionRow
                                        key={r.name}
                                        region={r}
                                        isSelected={selectedRegion === r.name}
                                        onSelect={() => onSelectRegion(r.name)}
                                        formatCount={formatCount}
                                    />
                                ))}
                        </VStack>

                        {/* Column 2 */}
                        <VStack align="stretch" gap={0} flex={1} borderLeft="1px solid" borderColor="border.muted">
                            {col2
                                .filter((r) => r.name.includes(regionSearch))
                                .map((r) => (
                                    <RegionRow
                                        key={r.name}
                                        region={r}
                                        isSelected={selectedRegion === r.name}
                                        onSelect={() => onSelectRegion(r.name)}
                                        formatCount={formatCount}
                                    />
                                ))}
                        </VStack>
                    </Flex>
                </Box>

                {/* Right: Districts in 3 columns */}
                <Box flex={1} px={4} py={3} maxH="280px" overflowY="auto">
                    <SimpleGrid columns={3} gap={1}>
                        {region?.districts.map((d) => (
                            <Flex
                                key={d.name}
                                align="center"
                                gap={1.5}
                                py={1}
                                px={1}
                                cursor="pointer"
                                borderRadius="sm"
                                _hover={{ bg: "gray.50" }}
                                onClick={() => onToggleDistrict(d.name)}
                            >
                                <Checkbox.Root
                                    checked={selectedDistricts.includes(d.name)}
                                    onCheckedChange={() => onToggleDistrict(d.name)}
                                    size="sm"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <Checkbox.HiddenInput />
                                    <Checkbox.Control
                                        _checked={{
                                            bg: "blue.600",
                                            borderColor: "blue.600",
                                            color: "white",
                                        }}
                                        borderRadius="sm"
                                        borderColor="gray.300"
                                    >
                                        <Checkbox.Indicator />
                                    </Checkbox.Control>
                                </Checkbox.Root>
                                <Text
                                    fontSize="12px"
                                    color="gray.700"
                                    whiteSpace="nowrap"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                >
                                    {d.name}{" "}
                                    <Text as="span" color="gray.400" fontSize="11px">
                                        ({formatCount(d.count)})
                                    </Text>
                                </Text>
                            </Flex>
                        ))}
                    </SimpleGrid>
                </Box>
            </Flex>
        </Box>
    )
}

function RegionRow({
    region,
    isSelected,
    onSelect,
    formatCount,
}: {
    region: Region
    isSelected: boolean
    onSelect: () => void
    formatCount: (n: number) => string
}) {
    return (
        <Flex
            align="center"
            justify="space-between"
            px={3}
            py={2}
            cursor="pointer"
            bg={isSelected ? "blue.50" : "transparent"}
            _hover={{ bg: "blue.50" }}
            onClick={onSelect}
            transition="background 0.1s"
        >
            <Flex align="center" gap={1}>
                <Text
                    fontSize="13px"
                    fontWeight={isSelected ? "bold" : "normal"}
                    color={isSelected ? "blue.600" : "gray.700"}
                >
                    {region.name}
                </Text>
                <Text fontSize="11px" color="gray.400">
                    ({formatCount(region.count)})
                </Text>
            </Flex>
            {isSelected && (
                <Box color="blue.500">
                    <ChevronRight size={10} />
                </Box>
            )}
        </Flex>
    )
}

// ────────────────────────────────────────────────
// Job Category Filter Panel
// ────────────────────────────────────────────────
const FLAT_JOB_CATEGORIES = [
    "서버/백엔드", "프론트엔드", "풀스택", "Android", "iOS",
    "AI/ML", "데이터분석", "DevOps", "QA", "보안",
    "게임클라이언트", "게임서버", "게임기획", "그래픽스",
    "UI/UX", "그래픽디자인", "디지털마케팅", "서비스기획",
]

const CAREER_TYPES = ["신입", "경력"]
const CAREER_YEARS = [
    "~1년",
    "1년",
    "2년",
    "3년",
    "4년",
    "5년",
    "6년",
    "7년",
    "8년",
    "9년",
    "10년",
    "11년",
    "12년",
    "13년",
    "14년",
    "15년",
    "16년",
    "17년",
    "18년",
    "19년",
    "20년",
    "20년~",
]

const EDUCATION_LEVELS = [
    "고교 졸업 이하",
    "고등학교 졸업",
    "대학 졸업 (2,3년제)",
    "대학교 졸업 (4년제)",
    "대학원 석사 졸업",
    "대학원 박사 졸업",
    "박사 졸업 이상",
]

function summarizeSelection(values: string[], fallback: string) {
    if (values.length === 0) return fallback
    if (values.length <= 2) return values.join(", ")
    return `${values.slice(0, 2).join(", ")} 외 ${values.length - 2}`
}

function matchesCareerFilter(experience: string, filters: string[]) {
    if (filters.length === 0) return true

    return filters.some((filter) => {
        if (filter === "경력무관") return experience.includes("무관")
        if (filter === "신입") return experience.includes("신입")
        if (filter === "경력") return experience.includes("경력")
        if (filter === "~1년") return experience.includes("1년") || experience.includes("신입")
        if (filter === "20년~") return experience.includes("20년")
        return experience.includes(filter)
    })
}

function toggleSelection(values: string[], value: string) {
    return values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
}

function PillButton({
    label,
    active,
    onClick,
}: {
    label: string
    active: boolean
    onClick: () => void
}) {
    return (
        <Box
            as="button"
            onClick={onClick}
            px={3}
            py={1.5}
            borderRadius="lg"
            border="1px solid"
            borderColor={active ? "blue.300" : "gray.200"}
            bg={active ? "blue.50" : "white"}
            color={active ? "blue.600" : "gray.600"}
            fontSize="13px"
            fontWeight={active ? "semibold" : "normal"}
            cursor="pointer"
            _hover={{ borderColor: "blue.300", color: "blue.600" }}
            transition="all 0.15s"
        >
            <HStack gap={1}>
                <Text>{label}</Text>
                {active ? <ChevronUp size={10} /> : <ChevronDown size={10} />}
            </HStack>
        </Box>
    )
}

function PopupFrame({
    children,
    width,
}: {
    children: React.ReactNode
    width: string
}) {
    return (
        <Box
            position="absolute"
            top="calc(100% + 8px)"
            left={0}
            zIndex={20}
            w={width}
            bg="bg.panel"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="0 8px 22px rgba(0, 0, 0, 0.10)"
        >
            {children}
        </Box>
    )
}

function CareerFilterPanel({
    selectedTypes,
    selectedYears,
    onToggleType,
    onToggleYear,
    onClear,
    onClose,
}: {
    selectedTypes: string[]
    selectedYears: string[]
    onToggleType: (value: string) => void
    onToggleYear: (value: string) => void
    onClear: () => void
    onClose: () => void
}) {
    return (
        <Box color="gray.700" px={4} py={4}>
            <Text fontSize="md" fontWeight="bold" mb={3}>
                경력 전체
            </Text>

            <Flex justify="space-between" align="center" mb={3} gap={3} flexWrap="wrap">
                <HStack gap={3} flexWrap="wrap">
                    {CAREER_TYPES.map((item) => (
                        <Checkbox.Root
                            key={item}
                            checked={selectedTypes.includes(item)}
                            onCheckedChange={() => onToggleType(item)}
                            size="sm"
                        >
                            <Checkbox.HiddenInput />
                            <Checkbox.Control
                                borderRadius="sm"
                                borderColor="gray.300"
                                bg="bg.panel"
                                _checked={{
                                    bg: "blue.500",
                                    borderColor: "blue.500",
                                    color: "white",
                                }}
                            >
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Label color="fg.muted" fontSize="xs">
                                {item}
                            </Checkbox.Label>
                        </Checkbox.Root>
                    ))}
                </HStack>

                <Checkbox.Root
                    checked={selectedTypes.includes("경력무관")}
                    onCheckedChange={() => onToggleType("경력무관")}
                    size="sm"
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control
                        borderRadius="sm"
                        borderColor="gray.300"
                        bg="bg.panel"
                        _checked={{
                            bg: "blue.500",
                            borderColor: "blue.500",
                            color: "white",
                        }}
                    >
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label color="fg.muted" fontSize="xs">
                        경력무관
                    </Checkbox.Label>
                </Checkbox.Root>
            </Flex>

            <SimpleGrid columns={5} gap={0} border="1px solid" borderColor="gray.200">
                {CAREER_YEARS.map((item) => {
                    const active = selectedYears.includes(item)
                    return (
                        <Box
                            key={item}
                            as="button"
                            minH="48px"
                            borderRight="1px solid"
                            borderBottom="1px solid"
                            borderColor="gray.200"
                            bg={active ? "blue.50" : "white"}
                            color={active ? "blue.600" : "gray.600"}
                            fontSize="xs"
                            fontWeight={active ? "bold" : "medium"}
                            _hover={{ bg: "gray.50" }}
                            transition="background 0.15s"
                            onClick={() => onToggleYear(item)}
                        >
                            {item}
                        </Box>
                    )
                })}
            </SimpleGrid>

            <Flex justify="space-between" align="center" mt={3}>
                <Button
                    size="sm"
                    variant="outline"
                    color="fg.muted"
                    borderColor="gray.300"
                    bg="bg.panel"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClear}
                >
                    <HStack gap={1}>
                        <RotateCcw size={10} />
                        <Text fontSize="xs">선택 초기화</Text>
                    </HStack>
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    color="fg.muted"
                    borderColor="gray.300"
                    bg="bg.panel"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClose}
                >
                    <Text fontSize="xs">닫기</Text>
                </Button>
            </Flex>
        </Box>
    )
}

function EducationFilterPanel({
    selectedLevels,
    onToggleLevel,
    onClear,
    onClose,
}: {
    selectedLevels: string[]
    onToggleLevel: (value: string) => void
    onClear: () => void
    onClose: () => void
}) {
    return (
        <Box color="gray.700" px={4} py={4}>
            <Flex justify="space-between" align="center" mb={3}>
                <Text fontSize="md" fontWeight="bold">
                    학력 전체
                </Text>
                <Checkbox.Root
                    checked={selectedLevels.includes("학력무관")}
                    onCheckedChange={() => onToggleLevel("학력무관")}
                    size="sm"
                >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control
                        borderRadius="sm"
                        borderColor="gray.300"
                        bg="bg.panel"
                        _checked={{
                            bg: "blue.500",
                            borderColor: "blue.500",
                            color: "white",
                        }}
                    >
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label color="fg.muted" fontSize="xs">
                        학력무관
                    </Checkbox.Label>
                </Checkbox.Root>
            </Flex>

            <SimpleGrid columns={4} gap={0} border="1px solid" borderColor="gray.200">
                {EDUCATION_LEVELS.map((item) => {
                    const active = selectedLevels.includes(item)
                    return (
                        <Box
                            key={item}
                            as="button"
                            minH="64px"
                            borderRight="1px solid"
                            borderBottom="1px solid"
                            borderColor="gray.200"
                            bg={active ? "blue.50" : "white"}
                            color={active ? "blue.600" : "gray.600"}
                            fontSize="xs"
                            fontWeight={active ? "bold" : "medium"}
                            whiteSpace="pre-line"
                            _hover={{ bg: "gray.50" }}
                            transition="background 0.15s"
                            onClick={() => onToggleLevel(item)}
                        >
                            {item}
                        </Box>
                    )
                })}
            </SimpleGrid>

            <Flex justify="space-between" align="center" mt={3}>
                <Button
                    size="sm"
                    variant="outline"
                    color="fg.muted"
                    borderColor="gray.300"
                    bg="bg.panel"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClear}
                >
                    <HStack gap={1}>
                        <RotateCcw size={10} />
                        <Text fontSize="xs">선택 초기화</Text>
                    </HStack>
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    color="fg.muted"
                    borderColor="gray.300"
                    bg="bg.panel"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClose}
                >
                    <Text fontSize="xs">닫기</Text>
                </Button>
            </Flex>
        </Box>
    )
}

function JobFilterPanel({
    selectedJobs,
    onToggleJob,
}: {
    selectedJobs: string[]
    onToggleJob: (j: string) => void
}) {
    return (
        <Box borderTop="1px solid" borderColor="border.muted" bg="bg.panel" px={4} py={4}>
            <SimpleGrid columns={{ base: 3, md: 6 }} gap={2}>
                {FLAT_JOB_CATEGORIES.map((cat) => {
                    const active = selectedJobs.includes(cat)
                    return (
                        <Box
                            key={cat}
                            as="button"
                            px={3}
                            py={2}
                            borderRadius="lg"
                            border="1px solid"
                            borderColor={active ? "blue.400" : "gray.200"}
                            bg={active ? "blue.50" : "white"}
                            color={active ? "blue.600" : "gray.600"}
                            fontSize="12px"
                            fontWeight={active ? "bold" : "normal"}
                            cursor="pointer"
                            onClick={() => onToggleJob(cat)}
                            _hover={{ bg: "blue.50", borderColor: "blue.300" }}
                            transition="all 0.15s"
                            textAlign="center"
                        >
                            {cat}
                        </Box>
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}
const PostTemplate: React.FC = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState<Post[]>([])
    const regions = useMemo(() => getRegionsWithCounts(posts), [posts])
    const [recommendedJobs, setRecommendedJobs] = useState<any[]>([])
    const [searchParams] = useSearchParams()
    const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "")
    const [selectedRegion, setSelectedRegion] = useState("서울")
    const [selectedDistricts, setSelectedDistricts] = useState<string[]>([])
    const [selectedJobs, setSelectedJobs] = useState<string[]>([])
    const [openPanel, setOpenPanel] = useState<"region" | "job" | null>(null)
    const [openTopPanel, setOpenTopPanel] = useState<"career" | "education" | null>(null)
    const [selectedCareerTypes, setSelectedCareerTypes] = useState<string[]>([])
    const [selectedCareerYears, setSelectedCareerYears] = useState<string[]>([])
    const [selectedEducationLevels, setSelectedEducationLevels] = useState<string[]>([])

    const togglePanel = (panel: "region" | "job") => {
        setOpenPanel((prev) => (prev === panel ? null : panel))
    }

    const toggleTopPanel = (panel: "career" | "education") => {
        setOpenTopPanel((prev) => (prev === panel ? null : panel))
    }

    useEffect(() => {
        setSearchQuery(searchParams.get("q") || "")
    }, [searchParams])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem("token")
                const resp = await fetch("/api/posts", {
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {})
                    }
                })
                if (resp.ok) {
                    const data = await resp.json()
                    const formatted = data.map((d: any) => ({
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
                    setPosts(formatted)
                }

                if (token) {
                    const resumeResp = await fetch("/api/resumes", {
                        headers: { Authorization: `Bearer ${token}` }
                    })
                    if (resumeResp.ok) {
                        const resumesData = await resumeResp.json()
                        const resumeWithRecs = resumesData.find((r: any) => r.recommended_jobs && Array.isArray(r.recommended_jobs) && r.recommended_jobs.length > 0)
                        if (resumeWithRecs) {
                            setRecommendedJobs(resumeWithRecs.recommended_jobs)
                        }
                    }
                }
            } catch (err) {
                console.error("Failed to fetch posts or resumes:", err)
            }
        }
        fetchPosts()
    }, [])


    const handleToggleDistrict = (d: string) => {
        setSelectedDistricts((prev) =>
            prev.includes(d) ? prev.filter((x) => x !== d) : [...prev, d]
        )
    }

    const handleToggleJob = (j: string) => {
        setSelectedJobs((prev) =>
            prev.includes(j) ? prev.filter((x) => x !== j) : [...prev, j]
        )
    }

    const handleToggleCareerType = (value: string) => {
        setSelectedCareerTypes((prev) => toggleSelection(prev, value))
    }

    const handleToggleCareerYear = (value: string) => {
        setSelectedCareerYears((prev) => toggleSelection(prev, value))
    }

    const handleToggleEducationLevel = (value: string) => {
        setSelectedEducationLevels((prev) => toggleSelection(prev, value))
    }

    const clearCareerFilters = () => {
        setSelectedCareerTypes([])
        setSelectedCareerYears([])
    }

    const clearEducationFilters = () => {
        setSelectedEducationLevels([])
    }

    const handleToggleBookmark = async (id: number) => {
        try {
            const post = posts.find(p => p.id === id)
            if (!post) return

            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/posts/${id}/bookmark`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {})
                },
                body: JSON.stringify({ isBookmarked: !post.bookmarked })
            })

            if (resp.ok) {
                setPosts((prev) =>
                    prev.map((p) => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
                )
            }
        } catch (err) {
            console.error("Failed to toggle bookmark:", err)
        }
    }

    const filteredPosts = useMemo(() => {
        return posts.filter((post) => {
            const matchSearch =
                searchQuery === "" ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.techStack.some((t) =>
                    t.toLowerCase().includes(searchQuery.toLowerCase())
                )

            const matchDistrict =
                selectedDistricts.length === 0 ||
                selectedDistricts.some(
                    (d) =>
                        d.includes("전체") ||
                        post.district === d ||
                        post.location === selectedRegion
                )

            const matchCareer = matchesCareerFilter(post.experience, [
                ...selectedCareerTypes,
                ...selectedCareerYears,
            ])

            const matchJob =
                selectedJobs.length === 0 ||
                selectedJobs.includes(post.jobCategory)

            return matchSearch && matchDistrict && matchCareer && matchJob
        })
    }, [posts, searchQuery, selectedDistricts, selectedRegion, selectedCareerTypes, selectedCareerYears, selectedJobs])

    const activeFilters = [
        ...selectedDistricts,
        ...selectedJobs,
        ...selectedCareerTypes,
        ...selectedCareerYears,
        ...selectedEducationLevels,
    ]

    return (
        <>
            <Header />
            <Box pt="72px" minH="100vh" bg="bg.subtle">
                <Box maxW="1200px" mx="auto" px={6} py={6}>

                    <Box position="relative" mb={3}>
                        {/* ── Top mini bar: 경력/학력 ── */}
                        <Flex align="center" justify="space-between" mb={2}>
                            <HStack gap={3}>
                                <PillButton
                                    label={summarizeSelection(
                                        selectedCareerTypes.concat(selectedCareerYears),
                                        "경력 선택"
                                    )}
                                    active={openTopPanel === "career"}
                                    onClick={() => toggleTopPanel("career")}
                                />
                                <PillButton
                                    label={summarizeSelection(selectedEducationLevels, "학력 선택")}
                                    active={openTopPanel === "education"}
                                    onClick={() => toggleTopPanel("education")}
                                />
                            </HStack>
                        </Flex>

                        {openTopPanel === "career" && (
                            <PopupFrame width="420px">
                                <CareerFilterPanel
                                    selectedTypes={selectedCareerTypes}
                                    selectedYears={selectedCareerYears}
                                    onToggleType={handleToggleCareerType}
                                    onToggleYear={handleToggleCareerYear}
                                    onClear={clearCareerFilters}
                                    onClose={() => setOpenTopPanel(null)}
                                />
                            </PopupFrame>
                        )}

                        {openTopPanel === "education" && (
                            <PopupFrame width="420px">
                                <EducationFilterPanel
                                    selectedLevels={selectedEducationLevels}
                                    onToggleLevel={handleToggleEducationLevel}
                                    onClear={clearEducationFilters}
                                    onClose={() => setOpenTopPanel(null)}
                                />
                            </PopupFrame>
                        )}
                    </Box>

                    {/* ── Filter Bar ── */}
                    <Box
                        bg="bg.panel"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="xl"
                        mb={activeFilters.length > 0 ? 3 : 6}
                        overflow="hidden"
                    // boxShadow="sm"
                    >
                        {/* Filter Row */}
                        <Flex align="stretch" minH="48px">
                            {/* 지역 선택 */}
                            <Flex
                                flex={1}
                                align="center"
                                gap={2}
                                px={4}
                                py={0}
                                cursor="pointer"
                                borderRight="1px solid"
                                borderColor="border.muted"
                                onClick={() => togglePanel("region")}
                                bg={openPanel === "region" ? "blue.50" : "white"}
                                _hover={{ bg: "blue.50" }}
                                transition="background 0.15s"
                                userSelect="none"
                            >
                                <Box color="blue.500" flexShrink={0}>
                                    <MapPin size={13} />
                                </Box>
                                <Text
                                    fontSize="sm"
                                    color={selectedDistricts.length > 0 ? "blue.600" : "gray.500"}
                                    fontWeight={selectedDistricts.length > 0 ? "bold" : "normal"}
                                    flex={1}
                                    whiteSpace="nowrap"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                >
                                    {selectedDistricts.length > 0
                                        ? selectedDistricts.slice(0, 2).join(", ") +
                                        (selectedDistricts.length > 2
                                            ? ` 외 ${selectedDistricts.length - 2}`
                                            : "")
                                        : "지역 선택"}
                                </Text>
                                <Box color="gray.400" flexShrink={0}>
                                    {openPanel === "region" ? (
                                        <ChevronUp size={11} />
                                    ) : (
                                        <ChevronDown size={11} />
                                    )}
                                </Box>
                            </Flex>

                            {/* 직업 선택 */}
                            <Flex
                                flex={1}
                                align="center"
                                gap={2}
                                px={4}
                                py={0}
                                cursor="pointer"
                                borderRight="1px solid"
                                borderColor="border.muted"
                                onClick={() => togglePanel("job")}
                                bg={openPanel === "job" ? "blue.50" : "white"}
                                _hover={{ bg: "blue.50" }}
                                transition="background 0.15s"
                                userSelect="none"
                            >
                                <Box color="blue.500" flexShrink={0}>
                                    <Briefcase size={13} />
                                </Box>
                                <Text
                                    fontSize="sm"
                                    color={selectedJobs.length > 0 ? "blue.600" : "gray.500"}
                                    fontWeight={selectedJobs.length > 0 ? "bold" : "normal"}
                                    flex={1}
                                    whiteSpace="nowrap"
                                    overflow="hidden"
                                    textOverflow="ellipsis"
                                >
                                    {selectedJobs.length > 0
                                        ? selectedJobs.slice(0, 2).join(", ") +
                                        (selectedJobs.length > 2
                                            ? ` 외 ${selectedJobs.length - 2}`
                                            : "")
                                        : "직업 선택"}
                                </Text>
                                <Box color="gray.400" flexShrink={0}>
                                    {openPanel === "job" ? (
                                        <ChevronUp size={11} />
                                    ) : (
                                        <ChevronDown size={11} />
                                    )}
                                </Box>
                            </Flex>

                            {/* 검색 */}
                            <Flex flex={2} align="center" px={4}>
                                <InputGroup
                                    startElement={<Search color="gray.400" size={13} />}
                                    flex={1}
                                >
                                    <Input
                                        placeholder="검색어 입력"
                                        size="sm"
                                        border="none"
                                        _focus={{ outline: "none", boxShadow: "none" }}
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        fontSize="sm"
                                        color="gray.700"
                                        _placeholder={{ color: "gray.400" }}
                                        bg="transparent"
                                    />
                                </InputGroup>
                            </Flex>


                        </Flex>

                        {/* Region Panel */}
                        {openPanel === "region" && (
                            <RegionFilterPanel
                                regions={regions}
                                selectedRegion={selectedRegion}
                                selectedDistricts={selectedDistricts}
                                onSelectRegion={setSelectedRegion}
                                onToggleDistrict={handleToggleDistrict}
                            />
                        )}

                        {/* Job Panel */}
                        {openPanel === "job" && (
                            <JobFilterPanel
                                selectedJobs={selectedJobs}
                                onToggleJob={handleToggleJob}
                            />
                        )}
                    </Box>

                    {/* Active filter tags */}
                    {activeFilters.length > 0 && (
                        <Flex align="center" gap={2} mb={5} flexWrap="wrap">
                            {selectedDistricts.map((d) => (
                                <Badge
                                    key={d}
                                    colorPalette="blue"
                                    variant="subtle"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    cursor="pointer"
                                    fontSize="xs"
                                    onClick={() => handleToggleDistrict(d)}
                                >
                                    <HStack as="span" gap={1}>{d}<X size={10} /></HStack>
                                </Badge>
                            ))}
                            {selectedJobs.map((j) => (
                                <Badge
                                    key={j}
                                    colorPalette="purple"
                                    variant="subtle"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    cursor="pointer"
                                    fontSize="xs"
                                    onClick={() => handleToggleJob(j)}
                                >
                                    <HStack as="span" gap={1}>{j}<X size={10} /></HStack>
                                </Badge>
                            ))}
                            {selectedCareerTypes.map((c) => (
                                <Badge
                                    key={c}
                                    colorPalette="cyan"
                                    variant="subtle"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    cursor="pointer"
                                    fontSize="xs"
                                    onClick={() => handleToggleCareerType(c)}
                                >
                                    <HStack as="span" gap={1}>{c}<X size={10} /></HStack>
                                </Badge>
                            ))}
                            {selectedCareerYears.map((y) => (
                                <Badge
                                    key={y}
                                    colorPalette="orange"
                                    variant="subtle"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    cursor="pointer"
                                    fontSize="xs"
                                    onClick={() => handleToggleCareerYear(y)}
                                >
                                    <HStack as="span" gap={1}>{y}<X size={10} /></HStack>
                                </Badge>
                            ))}
                            {selectedEducationLevels.map((e) => (
                                <Badge
                                    key={e}
                                    colorPalette="green"
                                    variant="subtle"
                                    borderRadius="full"
                                    px={3}
                                    py={1}
                                    cursor="pointer"
                                    fontSize="xs"
                                    onClick={() => handleToggleEducationLevel(e)}
                                >
                                    <HStack as="span" gap={1}>{e}<X size={10} /></HStack>
                                </Badge>
                            ))}
                            <Button
                                size="xs"
                                variant="ghost"
                                color="gray.400"
                                fontSize="xs"
                                onClick={() => {
                                    setSelectedDistricts([])
                                    setSelectedJobs([])
                                    setSelectedCareerTypes([])
                                    setSelectedCareerYears([])
                                    setSelectedEducationLevels([])
                                }}
                            >
                                전체 초기화
                            </Button>
                        </Flex>
                    )}

                    {/* Map placeholder */}
                    {/* <Box
                        w="100%"
                        h="150px"
                        bg="gray.200"
                        borderRadius="xl"
                        mb={8}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        border="1px solid"
                        borderColor="gray.300"
                        color="gray.400"
                        fontSize="sm"
                    >
                        AD
                    </Box> */}

                    {/* Result count
                    <Flex align="center" justify="space-between" mb={4}>
                        <Text fontSize="sm" color="gray.500">
                            총{" "}
                            <Text as="span" fontWeight="bold" color="blue.600">
                                {filteredPosts.length}
                            </Text>
                            개의 공고
                        </Text>
                    </Flex> */}

                    {/* AI Recommended Jobs */}
                    {recommendedJobs.length > 0 && (
                        <Box mb={8} bg="blue.50" p={5} borderRadius="xl" border="1px solid" borderColor="blue.100">
                            <Flex align="center" gap={2} mb={4}>
                                <Briefcase color="#3182CE" size={14} />
                                <Text fontSize="lg" fontWeight="bold" color="blue.700">이력서 기반 AI 맞춤 추천 공고</Text>
                            </Flex>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={4}>
                                {recommendedJobs.map((job, idx) => {
                                    const matchedPost = posts.find(p => p.title === job.job_title && p.companyName === job.company)
                                    if (!matchedPost) return null
                                    return (
                                        <JobCard
                                            key={idx}
                                            post={matchedPost}
                                            onToggleBookmark={handleToggleBookmark}
                                            recommendReason={job.reason}
                                        />
                                    )
                                })}
                            </SimpleGrid>
                        </Box>
                    )}

                    {/* Grid */}
                    {filteredPosts.length > 0 ? (
                        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={5}>
                            {filteredPosts.map((post) => (
                                <JobCard
                                    key={post.id}
                                    post={post}
                                    onToggleBookmark={handleToggleBookmark}
                                />
                            ))}
                        </SimpleGrid>
                    ) : (
                        <Flex
                            direction="column"
                            align="center"
                            justify="center"
                            py={20}
                            gap={3}
                        >
                            <Box color="gray.300"><SearchX size={48} /></Box>
                            <Text fontSize="lg" fontWeight="bold" color="fg.muted">
                                검색 결과가 없습니다
                            </Text>
                            <Text fontSize="sm" color="gray.400">
                                다른 키워드나 필터를 사용해 보세요
                            </Text>
                        </Flex>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default PostTemplate
