import React, { useEffect, useMemo, useState } from "react"
import { Footer } from "../organisms/Footer"
import Header from "../organisms/Header"
import FeatureSection from "../organisms/FeatureSection"
import BlockLink from "../atoms/BlockLink"
import {
    Box,
    Button,
    VStack,
    Text,
    HStack,
    Image,
    Link,
} from "@chakra-ui/react"
import { Search, Sparkles } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"

type PreviewJob = {
    id: number
    companyName: string
    companyLogo: string
    title: string
    techStack: string[]
    location: string
    fallbackBg: string
    fallbackColor: string
    fallbackLabel: string
}

// A small, real slice of the /post catalog (same ids/logos as mockPosts),
// used to preview actual listings instead of an abstract hero illustration.
const RECOMMENDED_PREVIEW_JOBS: PreviewJob[] = [
    {
        id: 1,
        companyName: "비바리퍼블리카(토스)",
        companyLogo: "https://www.google.com/s2/favicons?domain=toss.im&sz=128",
        title: "[토스뱅크 뱅킹플랫폼팀] 프론트엔드 엔지니어",
        techStack: ["React", "TypeScript"],
        location: "서울 강남구",
        fallbackBg: "#0064FF",
        fallbackColor: "#FFFFFF",
        fallbackLabel: "토스",
    },
    {
        id: 11,
        companyName: "카카오",
        companyLogo: "https://www.google.com/s2/favicons?domain=kakaocorp.com&sz=128",
        title: "[카카오페이 프론트엔드팀] 프론트엔드 엔지니어",
        techStack: ["Vue.js", "TypeScript"],
        location: "경기 성남시",
        fallbackBg: "#FEE500",
        fallbackColor: "#3C1E1E",
        fallbackLabel: "카카오",
    },
    {
        id: 31,
        companyName: "당근",
        companyLogo: "https://www.google.com/s2/favicons?domain=daangn.com&sz=128",
        title: "[중고거래 서비스팀] 프론트엔드 엔지니어",
        techStack: ["React", "Next.js"],
        location: "서울 구로구",
        fallbackBg: "#FF8A3D",
        fallbackColor: "#FFFFFF",
        fallbackLabel: "당근",
    },
]

function CompanyLogo({
    job,
    boxSize,
}: {
    job: PreviewJob
    boxSize: string
}) {
    const [failed, setFailed] = useState(false)

    if (failed) {
        return (
            <Box
                boxSize={boxSize}
                borderRadius="md"
                bg={job.fallbackBg}
                color={job.fallbackColor}
                display="flex"
                alignItems="center"
                justifyContent="center"
                fontSize="11px"
                fontWeight="800"
                flexShrink={0}
            >
                {job.fallbackLabel}
            </Box>
        )
    }

    return (
        <Image
            src={job.companyLogo}
            alt={job.companyName}
            boxSize={boxSize}
            borderRadius="md"
            objectFit="contain"
            bg="gray.50"
            p={1}
            flexShrink={0}
            onError={() => setFailed(true)}
        />
    )
}

const MotionScene = motion.create(Box)
const MotionBar = motion.create(Box)

const DEMO_SCENES = ["search", "resume", "report"] as const

function SearchScene() {
    const jobs = RECOMMENDED_PREVIEW_JOBS.slice(0, 2)
    return (
        <VStack align="stretch" gap={2} h="100%">
            <HStack
                bg="white"
                border="1px solid"
                borderColor="blue.200"
                borderRadius="md"
                px={2.5}
                py={1.5}
                gap={1.5}
            >
                <Search size={12} color="#2563EB" />
                <Text fontSize="11px" color="gray.400">
                    React 개발자
                </Text>
            </HStack>
            <VStack align="stretch" gap={1.5}>
                {jobs.map((job) => (
                    <HStack
                        key={job.id}
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="md"
                        p={2}
                        gap={2}
                    >
                        <CompanyLogo job={job} boxSize="26px" />
                        <VStack align="flex-start" gap={0} minW={0} flex={1}>
                            <Text
                                fontSize="10px"
                                fontWeight="bold"
                                color="gray.800"
                                style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    width: "100%",
                                }}
                            >
                                {job.title}
                            </Text>
                            <Text fontSize="9px" color="gray.400">
                                {job.companyName}
                            </Text>
                        </VStack>
                    </HStack>
                ))}
            </VStack>
        </VStack>
    )
}

function ResumeScene() {
    return (
        <VStack align="stretch" gap={2.5} h="100%" justify="center">
            <Box bg="white" border="1px solid" borderColor="gray.200" borderRadius="md" p={3}>
                <Text fontSize="11px" color="gray.700" lineHeight="1.7">
                    저는 사용자 경험을{" "}
                    <Box as="span" bg="yellow.300" px={1} borderRadius="sm">
                        최우선으로 고민하며
                    </Box>{" "}
                    문제를 해결하는 개발자입니다.
                </Text>
            </Box>
            <HStack
                align="flex-start"
                gap={2}
                bg="blue.50"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="md"
                p={2.5}
            >
                <Box color="blue.600" mt={0.5} flexShrink={0}>
                    <Sparkles size={12} />
                </Box>
                <Text fontSize="10px" color="blue.700" lineHeight="1.6">
                    이 부분에 구체적인 성과 수치를 추가하면 더 설득력 있어요
                </Text>
            </HStack>
        </VStack>
    )
}

function ReportScene({ animateKey }: { animateKey: number }) {
    const metrics = [
        { label: "논리적 구조", value: 82 },
        { label: "직무 전문성", value: 75 },
        { label: "답변 구체성", value: 90 },
        { label: "핵심 키워드", value: 68 },
    ]
    return (
        <VStack align="stretch" gap={2} h="100%" justify="center">
            <HStack justify="space-between" mb={0.5}>
                <Text fontSize="11px" fontWeight="bold" color="gray.700">
                    역량 리포트
                </Text>
                <Text fontSize="11px" fontWeight="bold" color="blue.600">
                    79점
                </Text>
            </HStack>
            {metrics.map((m) => (
                <VStack key={m.label} align="stretch" gap={1}>
                    <HStack justify="space-between">
                        <Text fontSize="9px" color="gray.500">
                            {m.label}
                        </Text>
                        <Text fontSize="9px" color="gray.500">
                            {m.value}
                        </Text>
                    </HStack>
                    <Box h="6px" bg="gray.100" borderRadius="full" overflow="hidden">
                        <MotionBar
                            key={animateKey}
                            h="100%"
                            bg="blue.500"
                            borderRadius="full"
                            initial={{ width: 0 }}
                            animate={{ width: `${m.value}%` }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </Box>
                </VStack>
            ))}
        </VStack>
    )
}

function ProductShowcase() {
    const reduceMotion = useReducedMotion()
    const [active, setActive] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const id = setInterval(() => {
            setActive((prev) => (prev + 1) % DEMO_SCENES.length)
        }, 3200)
        return () => clearInterval(id)
    }, [reduceMotion])

    return (
        <VStack w="100%" h="100%" justify="center" gap={4}>
            <Box
                w="100%"
                maxW="420px"
                bg="white"
                borderRadius="16px"
                boxShadow="0 24px 60px rgba(30,58,138,0.14)"
                border="1px solid"
                borderColor="gray.200"
                overflow="hidden"
            >
                <HStack
                    px={3}
                    py={2}
                    gap={1.5}
                    bg="gray.50"
                    borderBottom="1px solid"
                    borderColor="gray.200"
                >
                    <Box boxSize="8px" borderRadius="full" bg="red.300" />
                    <Box boxSize="8px" borderRadius="full" bg="yellow.300" />
                    <Box boxSize="8px" borderRadius="full" bg="green.300" />
                    <Box
                        ml={2}
                        flex={1}
                        bg="white"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="full"
                        px={3}
                        py={0.5}
                    >
                        <Text fontSize="10px" color="gray.400">
                            면접easy.com
                        </Text>
                    </Box>
                </HStack>

                <Box
                    position="relative"
                    h={{ base: "220px", md: "260px" }}
                    overflow="hidden"
                    bg="gray.50"
                >
                    <AnimatePresence mode="wait">
                        <MotionScene
                            key={DEMO_SCENES[active]}
                            position="absolute"
                            inset={0}
                            p={3.5}
                            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {active === 0 && <SearchScene />}
                            {active === 1 && <ResumeScene />}
                            {active === 2 && <ReportScene animateKey={active} />}
                        </MotionScene>
                    </AnimatePresence>
                </Box>
            </Box>

            <HStack gap={1.5}>
                {DEMO_SCENES.map((scene, i) => (
                    <Box
                        key={scene}
                        w={active === i ? "18px" : "6px"}
                        h="6px"
                        borderRadius="full"
                        bg={active === i ? "blue.600" : "gray.300"}
                        transition="all 0.25s ease"
                    />
                ))}
            </HStack>
        </VStack>
    )
}

const FILTER_TAGS = ["서울", "경력 3년+", "React"]

function FilterDemoVisual() {
    const reduceMotion = useReducedMotion()
    const [activeFilter, setActiveFilter] = useState(0)
    const [cycle, setCycle] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const id = setInterval(() => {
            setActiveFilter((prev) => (prev + 1) % FILTER_TAGS.length)
            setCycle((c) => c + 1)
        }, 2200)
        return () => clearInterval(id)
    }, [reduceMotion])

    return (
        <Box
            w="100%"
            minH={{ base: "300px", md: "380px" }}
            bg="white"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            p={{ base: 5, md: 7 }}
        >
            <HStack gap={2} mb={5} flexWrap="wrap">
                {FILTER_TAGS.map((tag, i) => (
                    <Box
                        key={tag}
                        borderRadius="full"
                        px={3}
                        py={1.5}
                        fontSize="sm"
                        fontWeight="semibold"
                        border="1px solid"
                        borderColor={i === activeFilter ? "blue.600" : "gray.200"}
                        bg={i === activeFilter ? "blue.600" : "white"}
                        color={i === activeFilter ? "white" : "gray.600"}
                        transition="all 0.3s ease"
                    >
                        {tag}
                    </Box>
                ))}
            </HStack>
            <VStack align="stretch" gap={3}>
                {RECOMMENDED_PREVIEW_JOBS.map((job, i) => (
                    <MotionScene
                        key={`${job.id}-${cycle}`}
                        bg="gray.50"
                        border="1px solid"
                        borderColor="gray.200"
                        borderRadius="lg"
                        p={3}
                        initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.12 }}
                    >
                        <HStack gap={3}>
                            <CompanyLogo job={job} boxSize="36px" />
                            <VStack align="flex-start" gap={0} flex={1} minW={0}>
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="gray.800"
                                    style={{
                                        whiteSpace: "nowrap",
                                        overflow: "hidden",
                                        textOverflow: "ellipsis",
                                        width: "100%",
                                    }}
                                >
                                    {job.title}
                                </Text>
                                <Text fontSize="xs" color="gray.400">
                                    {job.companyName}
                                </Text>
                            </VStack>
                        </HStack>
                    </MotionScene>
                ))}
            </VStack>
        </Box>
    )
}

function ResumeFeedbackVisual() {
    const reduceMotion = useReducedMotion()
    const [cycle, setCycle] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const id = setInterval(() => setCycle((c) => c + 1), 3400)
        return () => clearInterval(id)
    }, [reduceMotion])

    return (
        <Box
            w="100%"
            minH={{ base: "260px", md: "320px" }}
            bg="white"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            p={{ base: 5, md: 8 }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={6}
        >
            <VStack align="stretch" gap={3}>
                <Box h="12px" bg="gray.100" borderRadius="full" w="92%" />
                <Box h="12px" bg="gray.100" borderRadius="full" w="80%" />
                <Text fontSize="md" color="gray.700" lineHeight="1.8">
                    저는 사용자 경험을{" "}
                    <MotionScene
                        as="span"
                        key={`hl-${cycle}`}
                        display="inline"
                        bg="yellow.300"
                        px={1}
                        borderRadius="sm"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        최우선으로 고민하며
                    </MotionScene>{" "}
                    문제를 해결하는 개발자입니다.
                </Text>
                <Box h="12px" bg="gray.100" borderRadius="full" w="60%" />
            </VStack>

            <MotionScene
                key={`fb-${cycle}`}
                bg="blue.50"
                border="1px solid"
                borderColor="blue.100"
                borderRadius="lg"
                p={4}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1.2 }}
            >
                <HStack align="flex-start" gap={2.5}>
                    <Box color="blue.600" mt={0.5} flexShrink={0}>
                        <Sparkles size={16} />
                    </Box>
                    <Text fontSize="sm" color="blue.700" lineHeight="1.6">
                        이 부분에 구체적인 성과 수치를 추가하면 더 설득력 있어요
                    </Text>
                </HStack>
            </MotionScene>
        </Box>
    )
}

const INTERVIEW_METRICS = [
    { label: "논리적 구조", value: 82 },
    { label: "직무 전문성", value: 75 },
    { label: "답변 구체성", value: 90 },
    { label: "핵심 키워드 활용", value: 68 },
]

function InterviewReportVisual() {
    const reduceMotion = useReducedMotion()
    const [cycle, setCycle] = useState(0)

    useEffect(() => {
        if (reduceMotion) return
        const id = setInterval(() => setCycle((c) => c + 1), 4200)
        return () => clearInterval(id)
    }, [reduceMotion])

    return (
        <Box
            w="100%"
            minH={{ base: "220px", md: "420px" }}
            bg="white"
            borderRadius="md"
            border="1px solid"
            borderColor="gray.200"
            boxShadow="sm"
            p={{ base: 5, md: 8 }}
        >
            <HStack justify="space-between" mb={5}>
                <Text fontSize="md" fontWeight="bold" color="gray.800">
                    역량 리포트
                </Text>
                <Text fontSize="md" fontWeight="bold" color="blue.600">
                    79점
                </Text>
            </HStack>
            <VStack align="stretch" gap={4}>
                {INTERVIEW_METRICS.map((m) => (
                    <VStack key={m.label} align="stretch" gap={1.5}>
                        <HStack justify="space-between">
                            <Text fontSize="sm" color="gray.600">
                                {m.label}
                            </Text>
                            <Text fontSize="sm" color="gray.600">
                                {m.value}점
                            </Text>
                        </HStack>
                        <Box h="8px" bg="gray.100" borderRadius="full" overflow="hidden">
                            <MotionBar
                                key={`${m.label}-${cycle}`}
                                h="100%"
                                bg="blue.500"
                                borderRadius="full"
                                initial={{ width: 0 }}
                                animate={{ width: `${m.value}%` }}
                                transition={{ duration: 0.9, ease: "easeOut" }}
                            />
                        </Box>
                    </VStack>
                ))}
            </VStack>
        </Box>
    )
}

const MainTemplate: React.FC = () => {
    return (
        <>
            <Header />

            <Box
                w="100%"
                h="100vh"
                py="6rem"
                px="2rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
                bg="transparent"
                overflow="hidden"
            >
                <Box
                    w="100%"
                    maxW="6xl"
                    py="5rem"
                    px="2rem"
                    display="flex"
                    flexDirection={{ base: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems="center"
                    gap={{ base: "3rem", md: "1rem" }}
                >
                    {/* Left Column: Texts and Button */}
                    <VStack
                        alignItems={{ base: "center", md: "flex-start" }}
                        textAlign={{ base: "center", md: "left" }}
                        gap={0}
                        flex={1}
                    >
                        <Text
                            fontSize={{ base: "3xl", md: "6xl" }}
                            fontWeight="800"
                            lineHeight="short"
                            color="black"
                        >
                            면접, 이제
                        </Text>
                        <HStack
                            gap={2}
                            fontSize={{ base: "3xl", md: "6xl" }}
                            fontWeight="bold"
                        >
                            <Text color="blue.600">쉽게</Text>
                            <Text>준비하세요</Text>
                        </HStack>
                        <HStack mt={10} gap={5} flexWrap="wrap">
                            <BlockLink to="/register">
                                <Button
                                    size="xl"
                                    bg={"blue.600"}
                                    _hover={{ bg: "blue.700" }}
                                    px="2.5rem"
                                    borderRadius="xl"
                                    fontWeight="bold"
                                >
                                    무료로 시작하기
                                </Button>
                            </BlockLink>
                            <Link
                                href="#target-section"
                                color="gray.600"
                                fontWeight="semibold"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const el =
                                        document.getElementById(
                                            "target-section",
                                        )
                                    if (el) {
                                        el.scrollIntoView({
                                            behavior: "smooth",
                                        })
                                    }
                                }}
                            >
                                서비스 둘러보기 →
                            </Link>
                        </HStack>
                    </VStack>

                    {/* Right Column: live product showcase */}
                    <Box
                        flex={1}
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        position="relative"
                        w={{ base: "280px", md: "500px" }}
                        h={{ base: "280px", md: "500px" }}
                    >
                        <ProductShowcase />
                    </Box>
                </Box>
            </Box>
            <FeatureSection
                id="target-section"
                title="딱 맞는 공고만 골라보세요"
                lines={[
                    "지역, 경력, 기술 스택으로 원하는 공고만 필터링하고",
                    "마음에 드는 공고는 북마크로 모아두세요",
                ]}
                visual={<FilterDemoVisual />}
                imageOnLeft={true}
            />

            <FeatureSection
                title="AI가 함께 고쳐주는 자소서"
                lines={[
                    "강점과 보완점을 짚어주는 AI 피드백부터",
                    "궁금한 부분을 바로 물어보는 AI 대화까지",
                ]}
                visual={<ResumeFeedbackVisual />}
                imageOnLeft={false}
            />

            <FeatureSection
                title="실전처럼 답변하고 AI 리포트로 복기하세요"
                lines={[
                    "STT로 답변 내용을 정밀 분석하고",
                    "4가지 역량 리포트와 다시보기 영상으로 약점을 잡아드려요",
                ]}
                visual={<InterviewReportVisual />}
                layout="stacked"
                comingSoon="표정·시선 분석 기능 준비 중이에요"
            />

            <Box
                w="100%"
                py="6rem"
                px="2rem"
                display="flex"
                justifyContent="center"
                bg={"blue.600"}
            >
                <Box w="100%" maxW="6xl" py="5rem" px="2rem" textAlign="center">
                    <VStack gap="1.5rem">
                        <Text
                            fontSize={{ base: "lg", md: "4xl" }}
                            fontWeight="800"
                            lineHeight="short"
                            color="white"
                        >
                            지금 바로 면접 역량을 강화하세요
                        </Text>

                        <Text fontSize={{ base: "md", md: "xl" }} color="white">
                            공고 탐색부터 자소서 첨삭, 모의면접까지, 면접
                            준비 전 과정을 무료로 시작해보세요.
                        </Text>

                        <BlockLink to="/register">
                            <Button
                                size="xl"
                                bg={"white"}
                                _hover={{ bg: "gray.100" }}
                                px="2.5rem"
                                borderRadius="xl"
                                color={"blue.600"}
                                fontWeight="bold"
                            >
                                무료로 시작하기
                            </Button>
                        </BlockLink>
                    </VStack>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default MainTemplate
