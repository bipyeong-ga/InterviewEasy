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
    Checkbox,
    Image,
} from "@chakra-ui/react"
import { FaLocationDot } from "react-icons/fa6";
import {
    FaSearch,
    FaMapMarkerAlt,
    FaBriefcase,
    FaHeart,
    FaRegHeart,
    FaChevronDown,
    FaChevronUp,
    FaChevronRight,
    FaCog,
    FaPlus,
    FaRedo,
} from "react-icons/fa"
import { useNavigate } from "react-router"
import Header from "../organisms/Header"
import { MOCK_POSTS, REGIONS, type Post, type Region } from "../../data/mockPosts"

// ────────────────────────────────────────────────
// Job Card
// ────────────────────────────────────────────────
function JobCard({
    post,
    onToggleBookmark,
}: {
    post: Post
    onToggleBookmark: (id: number) => void
}) {
    const navigate = useNavigate()
    const colors = ["#1a1a1a", "#0066CC", "#FF4500", "#E8001D", "#00B900", "#6B3FA0", "#005BAC"]
    const cardColor = colors[post.id % colors.length]

    return (
        <Box
            bg="white"
            border="1px solid"
            borderColor="gray.200"
            borderRadius="xl"
            p={4}
            cursor="pointer"
            transition="all 0.2s ease"
            _hover={{ boxShadow: "lg", borderColor: "blue.200" }}
            position="relative"
            onClick={() => navigate(`/post/${post.id}`)}
        >
            <Box
                position="absolute"
                top={3}
                right={3}
                onClick={(e) => {
                    e.stopPropagation()
                    onToggleBookmark(post.id)
                }}
                color={post.bookmarked ? "red.400" : "gray.300"}
                _hover={{ color: post.bookmarked ? "red.500" : "gray.400" }}
                transition="color 0.15s"
                zIndex={1}
            >
                {post.bookmarked ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
            </Box>

            <Box
                w="100%"
                h="80px"
                borderRadius="lg"
                mb={3}
                display="flex"
                alignItems="center"
                justifyContent="flex-start"
                overflow="hidden"
                p={2}
            >
                <Image
                    src={post.companyLogo}
                    alt={post.companyName}
                    maxH="60px"
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
                            fallback.innerHTML = `<span style="font-weight:900;font-size:18px;color:white;letter-spacing:-0.5px">${post.companyName.replace("(주) ", "").slice(0, 5)}</span>`
                            parent.appendChild(fallback)
                        }
                    }}
                />
            </Box>

            {/* Title */}
            <Text
                fontWeight="bold"
                fontSize="sm"
                color="gray.800"
                mb={1}
                pr={5}
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
            <Text fontSize="xs" color="gray.500" mb={1}>
                {post.companyName}
            </Text>

            {/* Location */}
            <HStack mb={3}>
                <FaLocationDot color="#9CA3AF" size={12} />
                <Text fontSize="xs" color="gray.400">
                    {post.location} · {post.district} · {post.experience}
                </Text>
            </HStack>

            {/* Bottom */}
            <Flex justify="space-between" align="center">
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
                    color={post.deadline === "채용 완료 시" ? "gray.400" : "gray.500"}
                    fontWeight="medium"
                >
                    {post.deadline}
                </Text>
            </Flex>
        </Box>
    )
}

// ────────────────────────────────────────────────
// Region Filter Panel (2-column region list)
// ────────────────────────────────────────────────
function RegionFilterPanel({
    selectedRegion,
    selectedDistricts,
    onSelectRegion,
    onToggleDistrict,
}: {
    selectedRegion: string
    selectedDistricts: string[]
    onSelectRegion: (r: string) => void
    onToggleDistrict: (d: string) => void
}) {
    const [regionSearch, setRegionSearch] = useState("")
    const region = REGIONS.find((r) => r.name === selectedRegion)

    // Split regions into 2 columns
    const half = Math.ceil(REGIONS.length / 2)
    const col1 = REGIONS.slice(0, half)
    const col2 = REGIONS.slice(half)

    const formatCount = (n: number) => n.toLocaleString()

    return (
        <Box borderTop="1px solid" borderColor="gray.100" bg="white">
            {/* Region search */}
            <Box px={4} pt={3} pb={2}>
                <InputGroup startElement={<FaSearch color="#9CA3AF" size={12} />} maxW="220px">
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
                    borderColor="gray.100"
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
                        <VStack align="stretch" gap={0} flex={1} borderLeft="1px solid" borderColor="gray.100">
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
                                            bg: "#2563EB",
                                            borderColor: "#2563EB",
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
                    <FaChevronRight size={10} />
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
                {active ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
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
            bg="white"
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
                                bg="white"
                                _checked={{
                                    bg: "blue.500",
                                    borderColor: "blue.500",
                                    color: "white",
                                }}
                            >
                                <Checkbox.Indicator />
                            </Checkbox.Control>
                            <Checkbox.Label color="gray.600" fontSize="xs">
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
                        bg="white"
                        _checked={{
                            bg: "blue.500",
                            borderColor: "blue.500",
                            color: "white",
                        }}
                    >
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label color="gray.600" fontSize="xs">
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
                    color="gray.600"
                    borderColor="gray.300"
                    bg="white"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClear}
                >
                    <HStack gap={1}>
                        <FaRedo size={10} />
                        <Text fontSize="xs">선택 초기화</Text>
                    </HStack>
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    color="gray.600"
                    borderColor="gray.300"
                    bg="white"
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
                        bg="white"
                        _checked={{
                            bg: "blue.500",
                            borderColor: "blue.500",
                            color: "white",
                        }}
                    >
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label color="gray.600" fontSize="xs">
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
                    color="gray.600"
                    borderColor="gray.300"
                    bg="white"
                    _hover={{ bg: "gray.50" }}
                    borderRadius="md"
                    px={3}
                    h="30px"
                    onClick={onClear}
                >
                    <HStack gap={1}>
                        <FaRedo size={10} />
                        <Text fontSize="xs">선택 초기화</Text>
                    </HStack>
                </Button>
                <Button
                    size="sm"
                    variant="outline"
                    color="gray.600"
                    borderColor="gray.300"
                    bg="white"
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
        <Box borderTop="1px solid" borderColor="gray.100" bg="white" px={4} py={4}>
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
    const [posts, setPosts] = useState<Post[]>(MOCK_POSTS)
    const [searchQuery, setSearchQuery] = useState("")
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

    const handleToggleBookmark = (id: number) => {
        setPosts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, bookmarked: !p.bookmarked } : p))
        )
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

            return matchSearch && matchDistrict && matchCareer
        })
    }, [posts, searchQuery, selectedDistricts, selectedRegion, selectedCareerTypes, selectedCareerYears])

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
            <Box pt="72px" minH="100vh" bg="gray.50">
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
                        bg="white"
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
                                borderColor="gray.100"
                                onClick={() => togglePanel("region")}
                                bg={openPanel === "region" ? "blue.50" : "white"}
                                _hover={{ bg: "blue.50" }}
                                transition="background 0.15s"
                                userSelect="none"
                            >
                                <Box color="blue.500" flexShrink={0}>
                                    <FaMapMarkerAlt size={13} />
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
                                        <FaChevronUp size={11} />
                                    ) : (
                                        <FaChevronDown size={11} />
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
                                borderColor="gray.100"
                                onClick={() => togglePanel("job")}
                                bg={openPanel === "job" ? "blue.50" : "white"}
                                _hover={{ bg: "blue.50" }}
                                transition="background 0.15s"
                                userSelect="none"
                            >
                                <Box color="blue.500" flexShrink={0}>
                                    <FaBriefcase size={13} />
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
                                        <FaChevronUp size={11} />
                                    ) : (
                                        <FaChevronDown size={11} />
                                    )}
                                </Box>
                            </Flex>

                            {/* 검색 */}
                            <Flex flex={2} align="center" px={4}>
                                <InputGroup
                                    startElement={<FaSearch color="#9CA3AF" size={13} />}
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
                                    {d} ✕
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
                                    {j} ✕
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
                                    {c} ✕
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
                                    {y} ✕
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
                                    {e} ✕
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
                    <Box
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
                        지도 영역
                    </Box>

                    {/* Result count */}
                    <Flex align="center" justify="space-between" mb={4}>
                        <Text fontSize="sm" color="gray.500">
                            총{" "}
                            <Text as="span" fontWeight="bold" color="blue.600">
                                {filteredPosts.length}
                            </Text>
                            개의 공고
                        </Text>
                    </Flex>

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
                            <Text fontSize="4xl">🔍</Text>
                            <Text fontSize="lg" fontWeight="bold" color="gray.600">
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
