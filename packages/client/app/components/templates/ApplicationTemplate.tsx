import React, { useEffect, useState, useRef } from "react"
import {
    Box,
    Flex,
    Heading,
    Text,
    Button,
    Input,
    VStack,
    HStack,
    Spinner,
    Code,
    CodeBlock,
    Icon,
    createShikiAdapter,
    Clipboard,
    IconButton,
    Menu,
    Badge,
    SimpleGrid,
    Image,
} from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router"
import { useAuth } from "../../hooks/useAuth"
import Header from "../organisms/Header"
import { toaster } from "../ui/toaster"
import { IoSparklesSharp } from "react-icons/io5"
import { FaLocationDot } from "react-icons/fa6"
import {
    FaPlus,
    FaTrash,
    FaArrowRight,
    FaFileAlt,
    FaCheck,
    FaTimes,
    FaCloudUploadAlt,
    FaEdit,
    FaCode,
    FaHtml5,
    FaCss3,
    FaJs,
    FaPython,
    FaTerminal,
    FaDatabase,
    FaFileCode,
    FaEllipsisV,
    FaHeart,
    FaRegHeart,
    FaSyncAlt,
    FaBriefcase,
} from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import type { DropResult } from "@hello-pangea/dnd"
import "katex/dist/katex.min.css"
import { Prose } from "../ui/prose"
import type { HighlighterGeneric } from "shiki"

const shikiAdapter = createShikiAdapter<HighlighterGeneric<any, any>>({
    async load() {
        const { createHighlighter } = await import("shiki")
        return createHighlighter({
            langs: [
                "tsx",
                "scss",
                "html",
                "bash",
                "json",
                "python",
                "javascript",
                "typescript",
                "css",
                "sql",
                "xml",
                "js",
                "ts",
                "sh",
            ],
            themes: ["github-dark"],
        })
    },
    theme: "github-dark",
})

// Space Invader pixel art icon
const SpaceInvaderIcon = () => (
    <Box width="44px" height="32px" display="inline-block" color="#5B21B6">
        <svg viewBox="0 0 11 8" width="100%" height="100%" fill="currentColor">
            {/* Row 0 */}
            <rect x="2" y="0" width="1" height="1" />
            <rect x="8" y="0" width="1" height="1" />
            {/* Row 1 */}
            <rect x="3" y="1" width="1" height="1" />
            <rect x="7" y="1" width="1" height="1" />
            {/* Row 2 */}
            <rect x="2" y="2" width="7" height="1" />
            {/* Row 3 */}
            <rect x="1" y="3" width="2" height="1" />
            <rect x="4" y="3" width="3" height="1" />
            <rect x="8" y="3" width="2" height="1" />
            {/* Row 4 */}
            <rect x="0" y="4" width="11" height="1" />
            {/* Row 5 */}
            <rect x="0" y="5" width="1" height="1" />
            <rect x="2" y="5" width="7" height="1" />
            <rect x="10" y="5" width="1" height="1" />
            {/* Row 6 */}
            <rect x="0" y="6" width="1" height="1" />
            <rect x="2" y="6" width="1" height="1" />
            <rect x="8" y="6" width="1" height="1" />
            <rect x="10" y="6" width="1" height="1" />
            {/* Row 7 */}
            <rect x="3" y="7" width="2" height="1" />
            <rect x="6" y="7" width="2" height="1" />
        </svg>
    </Box>
)

import { CitationPopover } from "../molecules/CitationPopover"
import type { CitationItem } from "../molecules/CitationPopover"

// Markdown rendering component supporting KaTeX and CodeBlock
interface MarkdownRendererProps {
    content: string
    citations?: CitationItem[]
    onViewSource?: (citation: CitationItem) => void
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
    content,
    citations = [],
    onViewSource,
}) => {
    const preprocessedContent = React.useMemo(() => {
        if (!content) return ""
        // Convert \\[ ... \\] or \[ ... \] to $$ ... $$
        let processed = content.replace(
            /\\+\[([\s\S]*?)\\+\]/g,
            (_, math) => `$$${math}$$`,
        )
        // Convert \\( ... \\) or \( ... \) to $ ... $
        processed = processed.replace(
            /\\+\(([\s\S]*?)\\+\)/g,
            (_, math) => `$${math}$`,
        )

        // Convert [1], [2], [1, 2] to markdown links for citations
        processed = processed.replace(
            /(?<![!\[])\[(\d+(?:\s*,\s*\d+)*)\](?!\()/g,
            (match, ids) => {
                const cleanIds = ids.replace(/\s+/g, "")
                return `[${match}](#cite:${cleanIds})`
            },
        )

        return processed
    }, [content])

    const components = {
        a({ href, children, ...props }: any) {
            if (href && href.startsWith("#cite:")) {
                const idsStr = href.replace("#cite:", "")
                const ids = idsStr
                    .split(",")
                    .map((n: string) => parseInt(n.trim(), 10))
                    .filter((n: number) => !isNaN(n))
                return (
                    <CitationPopover
                        citationIds={ids}
                        allCitations={citations}
                        onViewSource={onViewSource}
                    />
                )
            }
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {children}
                </a>
            )
        },
        code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "")
            const language = match ? match[1] : ""
            const codeText = String(children).replace(/\n$/, "")

            if (match) {
                const getLanguageIcon = (lang: string) => {
                    switch (lang.toLowerCase()) {
                        case "html":
                        case "xml":
                            return { icon: FaHtml5, color: "orange.400" }
                        case "css":
                        case "scss":
                            return { icon: FaCss3, color: "blue.400" }
                        case "javascript":
                        case "js":
                        case "json":
                            return { icon: FaJs, color: "yellow.400" }
                        case "typescript":
                        case "ts":
                        case "tsx":
                            return { icon: FaCode, color: "blue.500" }
                        case "python":
                            return { icon: FaPython, color: "blue.300" }
                        case "bash":
                        case "sh":
                            return { icon: FaTerminal, color: "gray.300" }
                        case "sql":
                            return { icon: FaDatabase, color: "blue.200" }
                        default:
                            return { icon: FaFileCode, color: "gray.400" }
                    }
                }
                const langConfig = getLanguageIcon(language)

                return (
                    <CodeBlock.Root
                        maxW="100%"
                        size="sm"
                        mt={3}
                        mb={3}
                        code={codeText}
                        language={language}
                    >
                        <CodeBlock.Header
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <CodeBlock.Title>
                                <Icon
                                    as={langConfig.icon}
                                    color={langConfig.color}
                                    mr={2}
                                />
                                {language}
                            </CodeBlock.Title>
                            <Clipboard.Root value={codeText}>
                                <Clipboard.Trigger asChild>
                                    <IconButton
                                        aria-label="코드 복사"
                                        variant="ghost"
                                        size="xs"
                                        color="gray.400"
                                        _hover={{
                                            color: "white",
                                            bg: "whiteAlpha.200",
                                        }}
                                        minW="8"
                                        h="8"
                                    >
                                        <Clipboard.Indicator />
                                    </IconButton>
                                </Clipboard.Trigger>
                            </Clipboard.Root>
                        </CodeBlock.Header>
                        <CodeBlock.Content>
                            <CodeBlock.Code
                                fontFamily="'JetBrains Mono', Consolas, monospace"
                                fontSize="sm"
                            >
                                <CodeBlock.CodeText />
                            </CodeBlock.Code>
                        </CodeBlock.Content>
                    </CodeBlock.Root>
                )
            }

            return (
                <Code
                    fontFamily="'JetBrains Mono', Consolas, monospace"
                    bg="gray.100"
                    color="blue.700"
                    px={1.5}
                    py={0.5}
                    borderRadius="md"
                    fontSize="xs"
                    fontWeight="semibold"
                    {...props}
                >
                    {children}
                </Code>
            )
        },
    }

    return (
        <CodeBlock.AdapterProvider value={shikiAdapter}>
            <Prose maxW="100%" color="gray.800">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={components}
                >
                    {preprocessedContent}
                </ReactMarkdown>
            </Prose>
        </CodeBlock.AdapterProvider>
    )
}

const handleJsonResponse = async (resp: Response) => {
    const contentType = resp.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error(
            "서버로부터 올바른 응답(JSON)을 받지 못했습니다. 백엔드 서버(Port 3000)가 정상적으로 실행 중인지 확인해 주세요.",
        )
    }
    return resp.json()
}

const ApplicationTemplate: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, loading } = useAuth()

    const [resumes, setResumes] = useState<any[]>([])
    const [selectedResume, setSelectedResume] = useState<any | null>(null)
    const [isFetchingResumes, setIsFetchingResumes] = useState(true)
    const [isUploading, setIsUploading] = useState(false)
    const [isReanalyzing, setIsReanalyzing] = useState(false)
    const [isGenerating, setIsGenerating] = useState(false)
    const [prompt, setPrompt] = useState("")

    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [editTitleText, setEditTitleText] = useState("")

    const [messages, setMessages] = useState<any[]>([])
    const [likedJobs, setLikedJobs] = useState<any[]>([])
    const [highlightedText, setHighlightedText] = useState<string | null>(null)
    const highlightTimerRef = useRef<any>(null)
    const chatEndRef = useRef<HTMLDivElement>(null)

    const handleViewSource = (citation: any) => {
        if (!citation) return
        const targetQuote =
            citation.quote ||
            citation.keywords ||
            citation.title ||
            citation.objective
        if (targetQuote) {
            setHighlightedText(targetQuote)
            if (highlightTimerRef.current)
                clearTimeout(highlightTimerRef.current)

            const doScroll = () => {
                const el = document.getElementById("source-highlight-target")
                if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "center" })
                    const container =
                        document.getElementById("raw-text-container")
                    if (container) {
                        const elRect = el.getBoundingClientRect()
                        const containerRect = container.getBoundingClientRect()
                        const offset =
                            elRect.top -
                            containerRect.top +
                            container.scrollTop -
                            container.clientHeight / 2 +
                            elRect.height / 2
                        container.scrollTo({
                            top: Math.max(0, offset),
                            behavior: "smooth",
                        })
                    }
                }
            }

            setTimeout(doScroll, 50)
            setTimeout(doScroll, 200)

            highlightTimerRef.current = setTimeout(() => {
                setHighlightedText(null)
            }, 8000)
        }
    }

    const renderRawTextWithHighlight = (
        rawText: string,
        highlight: string | null,
    ) => {
        if (!rawText) return null
        if (!highlight || highlight.trim().length === 0) {
            return (
                <Text
                    fontSize="sm"
                    color="gray.700"
                    whiteSpace="pre-wrap"
                    lineHeight="1.7"
                >
                    {rawText}
                </Text>
            )
        }

        const trimmed = highlight.trim()
        const lowerRaw = rawText.toLowerCase()
        let matchStart = -1
        let matchEnd = -1

        // 1. Direct slice matching (try varying lengths)
        const sampleLengths = [trimmed.length, 60, 40, 25, 15]
        for (const len of sampleLengths) {
            if (len <= trimmed.length) {
                const query = trimmed.slice(0, len).toLowerCase()
                const idx = lowerRaw.indexOf(query)
                if (idx !== -1) {
                    matchStart = idx
                    matchEnd =
                        idx + Math.min(rawText.length - idx, trimmed.length)
                    break
                }
            }
        }

        // 2. Whitespace-flexible regex matching
        if (matchStart === -1) {
            const escaped = trimmed
                .slice(0, 30)
                .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                .replace(/\s+/g, "\\s+")
            try {
                const regex = new RegExp(escaped, "i")
                const match = regex.exec(rawText)
                if (match) {
                    matchStart = match.index
                    matchEnd = match.index + match[0].length
                }
            } catch (e) {
                // Ignore regex syntax errors
            }
        }

        // 3. Keyword token matching
        if (matchStart === -1) {
            const words = trimmed
                .replace(/[^\w가-힣\s]/g, " ")
                .split(/\s+/)
                .filter((w) => w.length >= 2)

            for (const word of words) {
                const idx = lowerRaw.indexOf(word.toLowerCase())
                if (idx !== -1) {
                    matchStart = idx
                    matchEnd = idx + word.length
                    break
                }
            }
        }

        if (matchStart === -1) {
            return (
                <Text
                    fontSize="sm"
                    color="gray.700"
                    whiteSpace="pre-wrap"
                    lineHeight="1.7"
                >
                    {rawText}
                </Text>
            )
        }

        const before = rawText.slice(0, matchStart)
        const matchedStr = rawText.slice(matchStart, matchEnd)
        const after = rawText.slice(matchEnd)

        return (
            <Text
                fontSize="sm"
                color="gray.700"
                whiteSpace="pre-wrap"
                lineHeight="1.7"
            >
                {before}
                <Box
                    as="mark"
                    id="source-highlight-target"
                    bg="#FDE047"
                    color="gray.950"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontWeight="bold"
                    border="2px solid"
                    borderColor="#EAB308"
                    shadow="lg"
                    display="inline"
                    outline="3px solid rgba(234, 179, 8, 0.4)"
                    transition="all 0.3s ease"
                >
                    {matchedStr}
                </Box>
                {after}
            </Text>
        )
    }

function RecommendedJobCard({
    job,
    onNavigate,
}: {
    job: any
    onNavigate: (id: number) => void
}) {
    const techStack: string[] = Array.isArray(job.tech_stack)
        ? job.tech_stack
        : typeof job.tech_stack === "string"
        ? JSON.parse(job.tech_stack || "[]")
        : []

    return (
        <Box
            bg="white"
            border="1px solid"
            borderColor="blue.100"
            borderRadius="xl"
            p={3.5}
            shadow="xs"
            _hover={{
                shadow: "sm",
                borderColor: "blue.300",
                transform: "translateY(-1px)",
            }}
            transition="all 0.15s ease"
            cursor="pointer"
            onClick={() => onNavigate(job.id)}
            position="relative"
        >
            <Flex justify="space-between" align="start" gap={2} mb={2}>
                <HStack gap={2.5} align="center" flex={1} minW={0}>
                    <Box
                        w="36px"
                        h="36px"
                        borderRadius="lg"
                        bg="gray.50"
                        border="1px solid"
                        borderColor="gray.100"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        overflow="hidden"
                        p={1}
                        flexShrink={0}
                    >
                        {job.company_logo ? (
                            <Image
                                src={job.company_logo}
                                alt={job.company}
                                maxH="26px"
                                maxW="100%"
                                objectFit="contain"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                }}
                            />
                        ) : (
                            <Text
                                fontSize="xs"
                                fontWeight="bold"
                                color="blue.600"
                            >
                                {job.company?.slice(0, 2) || "채용"}
                            </Text>
                        )}
                    </Box>
                    <Box minW={0} flex={1}>
                        <Text
                            fontSize="2xs"
                            fontWeight="semibold"
                            color="gray.500"
                            truncate
                        >
                            {job.company}
                        </Text>
                        <Text
                            fontSize="xs"
                            fontWeight="bold"
                            color="gray.900"
                            lineHeight="1.3"
                            lineClamp={1}
                        >
                            {job.job_title}
                        </Text>
                    </Box>
                </HStack>
                {job.location && (
                    <Badge
                        colorPalette="blue"
                        variant="subtle"
                        size="xs"
                        flexShrink={0}
                        fontSize="2xs"
                    >
                        {job.location} {job.district || ""}
                    </Badge>
                )}
            </Flex>

            {/* Tech Stack */}
            {techStack.length > 0 && (
                <HStack gap={1} mb={2.5} wrap="wrap">
                    {techStack.slice(0, 3).map((tech, i) => (
                        <Badge
                            key={i}
                            variant="surface"
                            colorPalette="gray"
                            fontSize="2xs"
                            px={1.5}
                            py={0.2}
                        >
                            {tech}
                        </Badge>
                    ))}
                    {techStack.length > 3 && (
                        <Text fontSize="2xs" color="gray.400">
                            +{techStack.length - 3}
                        </Text>
                    )}
                </HStack>
            )}

            {/* AI Recommendation Reason */}
            {job.reason && (
                <Box
                    bg="blue.50/70"
                    p={2}
                    borderRadius="md"
                    borderLeft="3px solid"
                    borderColor="blue.400"
                    mb={2}
                >
                    <HStack align="flex-start" gap={1.5}>
                        <Box color="blue.500" mt={0.5} flexShrink={0}>
                            <IoSparklesSharp size={11} />
                        </Box>
                        <Text
                            fontSize="2xs"
                            color="blue.900"
                            lineHeight="1.4"
                            lineClamp={2}
                        >
                            {job.reason}
                        </Text>
                    </HStack>
                </Box>
            )}

            {/* Action button */}
            <Flex justify="flex-end" align="center">
                <Button
                    size="xs"
                    colorPalette="blue"
                    variant="subtle"
                    h="24px"
                    fontSize="2xs"
                    onClick={(e) => {
                        e.stopPropagation()
                        onNavigate(job.id)
                    }}
                >
                    공고 상세보기 →
                </Button>
            </Flex>
        </Box>
    )
}

    // Check Authentication
    useEffect(() => {
        if (!loading && !user) {
            navigate(`/login?callback=${encodeURIComponent(location.pathname)}`)
        }
    }, [user, loading, navigate, location])

    // Fetch Resumes on mount
    useEffect(() => {
        if (user) {
            fetchResumes()
            fetchLikedJobs()
        }
    }, [user])

    // Fetch Messages when selected resume changes
    useEffect(() => {
        if (selectedResume) {
            fetchMessages(selectedResume.id)
        }
    }, [selectedResume?.id])

    // Auto-scroll chat to bottom
    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const fetchLikedJobs = async () => {
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch("/api/jobs/liked", {
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            })
            if (resp.ok) {
                const data = await handleJsonResponse(resp)
                setLikedJobs(data)
            }
        } catch (err) {
            console.error(err)
        }
    }

    const toggleLikeJob = async (job: any, isLiked: boolean) => {
        try {
            const token = localStorage.getItem("token")
            const method = isLiked ? "DELETE" : "POST"
            const resp = await fetch("/api/jobs/like", {
                method,
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({
                    job_title: job.job_title,
                    company: job.company,
                    reason: job.reason,
                    link: job.link,
                }),
            })

            if (resp.ok) {
                if (isLiked) {
                    setLikedJobs((prev) =>
                        prev.filter(
                            (j) =>
                                !(
                                    j.job_title === job.job_title &&
                                    j.company === job.company
                                ),
                        ),
                    )
                } else {
                    const data = await handleJsonResponse(resp)
                    setLikedJobs((prev) => [data.likedJob, ...prev])
                }
            }
        } catch (err) {
            console.error(err)
        }
    }

    const fetchResumes = async () => {
        setIsFetchingResumes(true)
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch("/api/resumes", {
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            })

            if (!resp.ok) {
                throw new Error("이력서 목록을 불러오는 데 실패했습니다.")
            }

            const data = await handleJsonResponse(resp)
            setResumes(data)

            if (data.length > 0) {
                // Keep selected resume if it still exists
                const currentSelected = selectedResume
                    ? data.find((r: any) => r.id === selectedResume.id)
                    : null
                setSelectedResume(currentSelected || data[0])
            } else {
                setSelectedResume(null)
            }
        } catch (err: any) {
            toaster.create({
                title: "에러",
                description: err.message,
                type: "error",
            })
        } finally {
            setIsFetchingResumes(false)
        }
    }

    const handleDragEnd = async (result: DropResult) => {
        if (!result.destination) return
        if (result.destination.index === result.source.index) return

        const items = Array.from(resumes)
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        // Optimistic update
        setResumes(items)

        // Persist
        const orderPayload = items.map((item, index) => ({
            id: item.id,
            orderIndex: index,
        }))

        try {
            const token = localStorage.getItem("token")
            await fetch("/api/resumes/reorder", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ order: orderPayload }),
            })
        } catch (e) {
            console.error("Failed to save reorder", e)
        }
    }

    const handleCreateResume = async () => {
        if (resumes.length >= 10) {
            toaster.create({
                title: "제한 초과",
                description: "이력서는 최대 10개까지만 생성할 수 있습니다.",
                type: "warning",
            })
            return
        }

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch("/api/resumes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({
                    title: `자기소개서 ${resumes.length + 1}`,
                }),
            })

            if (!resp.ok) {
                const errData = await handleJsonResponse(resp)
                throw new Error(
                    errData.error || "자기소개서 생성에 실패했습니다.",
                )
            }

            const newResume = await handleJsonResponse(resp)
            setResumes((prev) => [newResume, ...prev])
            setSelectedResume(newResume)
            setMessages([])
            toaster.create({
                title: "성공",
                description: "새 자기소개서 문서가 생성되었습니다.",
                type: "success",
            })
        } catch (err: any) {
            toaster.create({
                title: "에러",
                description: err.message,
                type: "error",
            })
        }
    }

    const handleSaveTitle = async () => {
        if (!selectedResume || !editTitleText.trim()) return

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/resumes/${selectedResume.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ title: editTitleText.trim() }),
            })

            if (!resp.ok) {
                throw new Error("제목 수정에 실패했습니다.")
            }

            const updated = await handleJsonResponse(resp)
            setResumes((prev) =>
                prev.map((r) => (r.id === updated.id ? updated : r)),
            )
            setSelectedResume(updated)
            setIsEditingTitle(false)
        } catch (err: any) {
            toaster.create({
                title: "에러",
                description: err.message,
                type: "error",
            })
        }
    }

    const handleDeleteResume = async (id: number, e: React.MouseEvent) => {
        e.stopPropagation()
        if (!window.confirm("이 자기소개서 문서를 삭제하시겠습니까?")) return

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/resumes/${id}`, {
                method: "DELETE",
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            })

            if (!resp.ok) {
                throw new Error("자기소개서 삭제에 실패했습니다.")
            }

            setResumes((prev) => prev.filter((r) => r.id !== id))
            if (selectedResume?.id === id) {
                setSelectedResume(null)
            }
            toaster.create({
                title: "성공",
                description: "자기소개서 문서가 삭제되었습니다.",
                type: "success",
            })
        } catch (err: any) {
            toaster.create({
                title: "에러",
                description: err.message,
                type: "error",
            })
        }
    }

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file || !selectedResume) return

        setIsUploading(true)
        const formData = new FormData()
        formData.append("file", file)

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(
                `/api/resumes/${selectedResume.id}/upload`,
                {
                    method: "POST",
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    body: formData,
                },
            )

            if (!resp.ok) {
                const errData = await handleJsonResponse(resp)
                throw new Error(
                    errData.error || "PDF 파일 분석에 실패했습니다.",
                )
            }

            const updatedResume = await handleJsonResponse(resp)
            setResumes((prev) =>
                prev.map((r) =>
                    r.id === updatedResume.id ? updatedResume : r,
                ),
            )
            setSelectedResume(updatedResume)
            setMessages([])
            toaster.create({
                title: "성공",
                description: "이력서 PDF 업로드 및 AI 분석이 완료되었습니다.",
                type: "success",
            })
        } catch (err: any) {
            toaster.create({
                title: "업로드 실패",
                description: err.message,
                type: "error",
            })
        } finally {
            setIsUploading(false)
        }
    }

    const handleReanalyze = async () => {
        if (!selectedResume || isReanalyzing) return

        setIsReanalyzing(true)
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(
                `/api/resumes/${selectedResume.id}/reanalyze`,
                {
                    method: "POST",
                    headers: {
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                },
            )

            if (!resp.ok) {
                const errData = await handleJsonResponse(resp)
                throw new Error(errData.error || "AI 재분석에 실패했습니다.")
            }

            const updatedResume = await handleJsonResponse(resp)
            setResumes((prev) =>
                prev.map((r) =>
                    r.id === updatedResume.id ? updatedResume : r,
                ),
            )
            setSelectedResume(updatedResume)
            toaster.create({
                title: "재분석 완료",
                description:
                    "PDF 원본 대조를 마친 정밀 참조 분석이 갱신되었습니다.",
                type: "success",
            })
        } catch (err: any) {
            toaster.create({
                title: "재분석 실패",
                description: err.message,
                type: "error",
            })
        } finally {
            setIsReanalyzing(false)
        }
    }

    const fetchMessages = async (resumeId: number) => {
        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/resumes/${resumeId}/messages`, {
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
            })

            if (!resp.ok) {
                throw new Error("메시지 내역을 가져오지 못했습니다.")
            }

            const data = await handleJsonResponse(resp)
            setMessages(data)
        } catch (err: any) {
            console.error(err)
        }
    }

    const handleSendPromptOrChat = async (customMsg?: string) => {
        const textToSend = (customMsg !== undefined ? customMsg : prompt).trim()
        if (!textToSend || !selectedResume) return

        const userMsgText = textToSend
        if (customMsg === undefined) {
            setPrompt("")
        }

        // Optimistically append user message
        const tempUserMsg = { sender: "user", message: userMsgText }
        setMessages((prev) => [...prev, tempUserMsg])
        setIsGenerating(true)

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(
                `/api/resumes/${selectedResume.id}/messages`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(token ? { Authorization: `Bearer ${token}` } : {}),
                    },
                    body: JSON.stringify({ message: userMsgText }),
                },
            )

            if (!resp.ok) {
                throw new Error("AI 응답을 생성하는 중에 오류가 발생했습니다.")
            }

            const reply = await handleJsonResponse(resp)
            setMessages((prev) => [
                ...prev.slice(0, -1),
                reply.userMessage,
                reply.assistantMessage,
            ])
        } catch (err: any) {
            toaster.create({
                title: "채팅 오류",
                description: err.message,
                type: "error",
            })
        } finally {
            setIsGenerating(false)
        }
    }

    const formatDate = (dateStr: string) => {
        const d = new Date(dateStr)
        if (isNaN(d.getTime())) return ""
        return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`
    }

    return (
        <Box
            h={{ base: "auto", md: "100vh" }}
            minH="100vh"
            w="100vw"
            overflow="hidden"
            bg="#F3F7FA"
            display="flex"
            flexDirection="column"
        >
            <Header />
            <Flex
                h={{ base: "auto", md: "calc(100vh - 72px)" }}
                mt="72px"
                w="100%"
                overflow={{ base: "visible", md: "hidden" }}
                direction={{ base: "column", md: "row" }}
                p={{ base: 3, md: 6 }}
                gap={{ base: 3, md: 6 }}
            >
                {/* Left Sidebar Card */}
                <Box
                    w={{ base: "100%", md: "280px" }}
                    minW={{ base: "100%", md: "280px" }}
                    maxH={{ base: "260px", md: "none" }}
                    borderRadius="2xl"
                    shadow="sm"
                    h={{ base: "auto", md: "100%" }}
                    bg="white"
                    display="flex"
                    flexDirection="column"
                    p={5}
                >
                    <Button
                        onClick={handleCreateResume}
                        w="100%"
                        variant="outline"
                        borderColor="gray.200"
                        color="gray.400"
                        bg="transparent"
                        borderRadius="full"
                        _hover={{
                            bg: "gray.50",
                            borderColor: "gray.300",
                            color: "gray.600",
                        }}
                        fontWeight="medium"
                        fontSize="xs"
                        h="40px"
                        mb={4}
                    >
                        + 문서 추가
                    </Button>

                    <VStack
                        flex={1}
                        overflowY="auto"
                        align="stretch"
                        gap={1.5}
                        pr={1}
                    >
                        {isFetchingResumes ? (
                            <Flex justify="center" align="center" py={8}>
                                <Spinner size="sm" color="blue.600" />
                            </Flex>
                        ) : resumes.length === 0 ? (
                            <Flex
                                direction="column"
                                align="center"
                                justify="center"
                                py={12}
                                textAlign="center"
                            >
                                <Text
                                    fontSize="2xs"
                                    color="gray.400"
                                    lineHeight="1.6"
                                >
                                    추가된 자소서가 없습니다.
                                    <br />
                                    위의 버튼을 눌러 새 문서를 만들어보세요!
                                </Text>
                            </Flex>
                        ) : (
                            <DragDropContext onDragEnd={handleDragEnd}>
                                <Droppable droppableId="resumes-list">
                                    {(provided) => (
                                        <Box
                                            display="flex"
                                            flexDirection="column"
                                            gap={1.5}
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                        >
                                            {resumes.map((resume, index) => {
                                                const isSelected =
                                                    selectedResume?.id ===
                                                    resume.id
                                                return (
                                                    <Draggable
                                                        key={resume.id.toString()}
                                                        draggableId={resume.id.toString()}
                                                        index={index}
                                                    >
                                                        {(
                                                            provided,
                                                            snapshot,
                                                        ) => (
                                                            <HStack
                                                                ref={
                                                                    provided.innerRef
                                                                }
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                p={3.5}
                                                                bg={
                                                                    isSelected
                                                                        ? "#EBF3FF"
                                                                        : snapshot.isDragging
                                                                          ? "gray.50"
                                                                          : "transparent"
                                                                }
                                                                borderRadius="xl"
                                                                _hover={{
                                                                    bg: isSelected
                                                                        ? "#EBF3FF"
                                                                        : "gray.50",
                                                                }}
                                                                cursor="pointer"
                                                                onClick={() => {
                                                                    setSelectedResume(
                                                                        resume,
                                                                    )
                                                                    setMessages(
                                                                        [],
                                                                    )
                                                                }}
                                                                justifyContent="space-between"
                                                                transition="all 0.2s"
                                                                data-group
                                                            >
                                                                <HStack
                                                                    gap={3}
                                                                    overflow="hidden"
                                                                    flex={1}
                                                                >
                                                                    <Box
                                                                        color={
                                                                            isSelected
                                                                                ? "blue.600"
                                                                                : "gray.400"
                                                                        }
                                                                        mt="2px"
                                                                    >
                                                                        <FaFileAlt
                                                                            size={
                                                                                12
                                                                            }
                                                                        />
                                                                    </Box>
                                                                    <Text
                                                                        fontSize="sm"
                                                                        fontWeight={
                                                                            isSelected
                                                                                ? "semibold"
                                                                                : "medium"
                                                                        }
                                                                        color={
                                                                            isSelected
                                                                                ? "blue.600"
                                                                                : "gray.600"
                                                                        }
                                                                        truncate
                                                                        w="100%"
                                                                    >
                                                                        {
                                                                            resume.title
                                                                        }
                                                                    </Text>
                                                                </HStack>
                                                                {isSelected && (
                                                                    <HStack
                                                                        gap={1}
                                                                    >
                                                                        <Menu.Root>
                                                                            <Menu.Trigger
                                                                                asChild
                                                                            >
                                                                                <Button
                                                                                    variant="ghost"
                                                                                    size="2xs"
                                                                                    p={
                                                                                        1
                                                                                    }
                                                                                    borderRadius="md"
                                                                                    color="gray.400"
                                                                                    _hover={{
                                                                                        color: "gray.600",
                                                                                        bg: "gray.100",
                                                                                    }}
                                                                                    onClick={(
                                                                                        e,
                                                                                    ) =>
                                                                                        e.stopPropagation()
                                                                                    }
                                                                                >
                                                                                    <FaEllipsisV
                                                                                        size={
                                                                                            10
                                                                                        }
                                                                                    />
                                                                                </Button>
                                                                            </Menu.Trigger>
                                                                            <Menu.Positioner>
                                                                                <Menu.Content
                                                                                    minW="auto"
                                                                                    py={
                                                                                        1
                                                                                    }
                                                                                    px={
                                                                                        1
                                                                                    }
                                                                                    borderRadius="md"
                                                                                    shadow="sm"
                                                                                    border="1px solid"
                                                                                    borderColor="gray.100"
                                                                                    bg="white"
                                                                                    zIndex={
                                                                                        10
                                                                                    }
                                                                                >
                                                                                    <Menu.Item
                                                                                        value="delete"
                                                                                        color="red.600"
                                                                                        px={
                                                                                            2
                                                                                        }
                                                                                        py={
                                                                                            1.5
                                                                                        }
                                                                                        fontSize="xs"
                                                                                        cursor="pointer"
                                                                                        _hover={{
                                                                                            bg: "red.50",
                                                                                            color: "red.700",
                                                                                        }}
                                                                                        onClick={(
                                                                                            e,
                                                                                        ) => {
                                                                                            e.stopPropagation()
                                                                                            handleDeleteResume(
                                                                                                resume.id,
                                                                                                e,
                                                                                            )
                                                                                        }}
                                                                                    >
                                                                                        <FaTrash
                                                                                            size={
                                                                                                10
                                                                                            }
                                                                                            style={{
                                                                                                marginRight:
                                                                                                    "6px",
                                                                                            }}
                                                                                        />
                                                                                        삭제
                                                                                    </Menu.Item>
                                                                                </Menu.Content>
                                                                            </Menu.Positioner>
                                                                        </Menu.Root>
                                                                    </HStack>
                                                                )}
                                                            </HStack>
                                                        )}
                                                    </Draggable>
                                                )
                                            })}
                                            {provided.placeholder}
                                        </Box>
                                    )}
                                </Droppable>
                            </DragDropContext>
                        )}
                    </VStack>
                </Box>

                {/* Right Main Panel Card */}
                <Box
                    flex={1}
                    h={{ base: "auto", md: "100%" }}
                    minH={{ base: "60vh", md: "auto" }}
                    bg="white"
                    borderRadius="2xl"
                    shadow="sm"
                    display="flex"
                    flexDirection="column"
                    p={{ base: 4, md: 8 }}
                    overflow="hidden"
                    position="relative"
                >
                    {selectedResume ? (
                        <>
                            {/* Document Title Header */}
                            <Flex
                                justify="space-between"
                                align="start"
                                borderBottom="1px solid"
                                borderColor="gray.100"
                                pb={5}
                                mb={6}
                            >
                                <VStack align="start" gap={3}>
                                    <Box>
                                        {isEditingTitle ? (
                                            <HStack maxW="400px">
                                                <Input
                                                    value={editTitleText}
                                                    onChange={(e) =>
                                                        setEditTitleText(
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter")
                                                            handleSaveTitle()
                                                        if (
                                                            e.key === "Escape"
                                                        ) {
                                                            setIsEditingTitle(
                                                                false,
                                                            )
                                                            setEditTitleText(
                                                                selectedResume.title,
                                                            )
                                                        }
                                                    }}
                                                    fontSize="xl"
                                                    fontWeight="bold"
                                                    color="gray.900"
                                                    autoFocus
                                                    px={2}
                                                    py={1}
                                                    variant="flushed"
                                                />
                                                <Button
                                                    onClick={handleSaveTitle}
                                                    size="sm"
                                                    bg="blue.500"
                                                    color="white"
                                                    borderRadius="md"
                                                    p={2}
                                                >
                                                    <FaCheck size={10} />
                                                </Button>
                                                <Button
                                                    onClick={() =>
                                                        setIsEditingTitle(false)
                                                    }
                                                    size="sm"
                                                    variant="outline"
                                                    borderColor="gray.200"
                                                    borderRadius="md"
                                                    p={2}
                                                >
                                                    <FaTimes size={10} />
                                                </Button>
                                            </HStack>
                                        ) : (
                                            <Heading
                                                fontSize="2xl"
                                                fontWeight="bold"
                                                color="gray.900"
                                                cursor="pointer"
                                                _hover={{
                                                    textDecoration: "underline",
                                                }}
                                                onClick={() => {
                                                    setIsEditingTitle(true)
                                                    setEditTitleText(
                                                        selectedResume.title,
                                                    )
                                                }}
                                            >
                                                {selectedResume.title}
                                            </Heading>
                                        )}
                                        <HStack
                                            gap={2}
                                            mt={1.5}
                                            wrap="wrap"
                                            alignItems="center"
                                        >
                                            <Text
                                                fontSize="xs"
                                                color="gray.400"
                                            >
                                                {formatDate(
                                                    selectedResume.updated_at,
                                                )}
                                            </Text>
                                            {selectedResume.pdf_name && (
                                                <>
                                                    <Text
                                                        fontSize="2xs"
                                                        color="gray.300"
                                                    >
                                                        •
                                                    </Text>
                                                    <Text
                                                        fontSize="xs"
                                                        color="gray.500"
                                                        fontWeight="medium"
                                                    >
                                                        첨부파일:{" "}
                                                        {
                                                            selectedResume.pdf_name
                                                        }
                                                    </Text>
                                                </>
                                            )}
                                        </HStack>
                                    </Box>
                                </VStack>

                                {selectedResume.raw_text && (
                                    <HStack gap={2}>
                                        <Button
                                            variant="outline"
                                            size="xs"
                                            color="blue.600"
                                            borderColor="blue.200"
                                            borderRadius="lg"
                                            bg="blue.50/40"
                                            _hover={{
                                                color: "blue.700",
                                                bg: "blue.100/50",
                                                borderColor: "blue.300",
                                            }}
                                            loading={isReanalyzing}
                                            onClick={handleReanalyze}
                                        >
                                            <HStack gap={1.5}>
                                                <FaSyncAlt size={10} />
                                                <Text>
                                                    AI 분석 & 참조 다시 실행
                                                </Text>
                                            </HStack>
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="xs"
                                            color="gray.500"
                                            borderColor="gray.200"
                                            borderRadius="lg"
                                            _hover={{
                                                color: "blue.600",
                                                bg: "blue.50/30",
                                                borderColor: "blue.200",
                                            }}
                                            onClick={() =>
                                                document
                                                    .getElementById(
                                                        "pdf-file-input-re",
                                                    )
                                                    ?.click()
                                            }
                                        >
                                            이력서 변경 (PDF)
                                        </Button>
                                    </HStack>
                                )}
                                <input
                                    id="pdf-file-input-re"
                                    type="file"
                                    accept=".pdf"
                                    style={{ display: "none" }}
                                    onChange={handleFileUpload}
                                />
                            </Flex>

                            {/* Main Content Area */}
                            {selectedResume.raw_text ? (
                                <Flex
                                    flex={1}
                                    gap={5}
                                    overflow="hidden"
                                    direction={{ base: "column", lg: "row" }}
                                >
                                    {/* 원본 자소서·이력서 텍스트 */}
                                    <Box
                                        id="raw-text-container"
                                        flex="1"
                                        minW={0}
                                        maxH={{ base: "260px", lg: "none" }}
                                        h={{ base: "auto", lg: "100%" }}
                                        overflowY="auto"
                                        border="1px solid"
                                        borderColor={
                                            highlightedText
                                                ? "blue.200"
                                                : "gray.100"
                                        }
                                        borderRadius="xl"
                                        bg={
                                            highlightedText
                                                ? "blue.50/20"
                                                : "gray.50"
                                        }
                                        p={4}
                                        transition="all 0.3s ease"
                                    >
                                        <Flex
                                            justify="space-between"
                                            align="center"
                                            mb={3}
                                        >
                                            <Heading
                                                fontSize="xs"
                                                fontWeight="bold"
                                                color="gray.500"
                                                textTransform="uppercase"
                                                letterSpacing="wider"
                                            >
                                                원본 문서
                                            </Heading>
                                            {highlightedText && (
                                                <Text
                                                    fontSize="2xs"
                                                    color="blue.600"
                                                    fontWeight="bold"
                                                >
                                                    [참조 위치로 이동됨]
                                                </Text>
                                            )}
                                        </Flex>
                                        {renderRawTextWithHighlight(
                                            selectedResume.raw_text,
                                            highlightedText,
                                        )}
                                    </Box>

                                    {/* AI 피드백 & 대화 */}
                                    <Box
                                        flex="1"
                                        minW={0}
                                        h={{ base: "auto", lg: "100%" }}
                                        display="flex"
                                        flexDirection="column"
                                        overflow="hidden"
                                    >
                                        {/* Unified Scrolling View */}
                                        <Box
                                            flex={1}
                                            overflowY="auto"
                                            pr={2}
                                            mb={4}
                                            position="relative"
                                        >
                                            {(isUploading || isReanalyzing) && (
                                                <Flex
                                                    position="absolute"
                                                    inset={0}
                                                    bg="white/80"
                                                    align="center"
                                                    justify="center"
                                                    zIndex={10}
                                                    backdropFilter="blur(2px)"
                                                >
                                                    <VStack gap={3}>
                                                        <Spinner
                                                            size="lg"
                                                            color="blue.600"
                                                        />
                                                        <Text
                                                            fontSize="sm"
                                                            fontWeight="medium"
                                                            color="blue.700"
                                                        >
                                                            {isUploading
                                                                ? "새 이력서 PDF를 업로드하고 분석하고 있습니다..."
                                                                : "PDF 원본 대조를 거쳐 AI 분석 및 정밀 참조를 다시 실행하고 있습니다..."}
                                                        </Text>
                                                    </VStack>
                                                </Flex>
                                            )}

                                            <VStack align="stretch" gap={8}>
                                                {/* Analysis Content */}
                                                <VStack align="stretch" gap={6}>
                                                    <Box>
                                                        <MarkdownRenderer
                                                            content={
                                                                selectedResume.summary
                                                            }
                                                            citations={
                                                                typeof selectedResume.citations ===
                                                                "string"
                                                                    ? JSON.parse(
                                                                          selectedResume.citations ||
                                                                              "[]",
                                                                      )
                                                                    : selectedResume.citations ||
                                                                      []
                                                            }
                                                            onViewSource={
                                                                handleViewSource
                                                            }
                                                        />
                                                    </Box>
                                                    <Box
                                                        borderTop="1px solid"
                                                        borderColor="gray.100"
                                                        pt={6}
                                                    >
                                                        <Heading
                                                            fontSize="sm"
                                                            fontWeight="bold"
                                                            color="blue.600"
                                                            mb={4}
                                                        >
                                                            개선할 부분 & 피드백
                                                        </Heading>
                                                        <MarkdownRenderer
                                                            content={
                                                                selectedResume.improvements
                                                            }
                                                            citations={
                                                                typeof selectedResume.citations ===
                                                                "string"
                                                                    ? JSON.parse(
                                                                          selectedResume.citations ||
                                                                              "[]",
                                                                      )
                                                                    : selectedResume.citations ||
                                                                      []
                                                            }
                                                            onViewSource={
                                                                handleViewSource
                                                            }
                                                        />
                                                    </Box>
                                                </VStack>

                                                {/* Chat Conversation Logs */}
                                                {messages.length > 0 && (
                                                    <VStack
                                                        align="stretch"
                                                        gap={6}
                                                        borderTop="1px solid"
                                                        borderColor="gray.100"
                                                        pt={6}
                                                    >
                                                        <Heading
                                                            fontSize="xs"
                                                            fontWeight="bold"
                                                            color="blue.600"
                                                            mb={2}
                                                            textTransform="uppercase"
                                                            letterSpacing="wider"
                                                        >
                                                            AI 피드백 대화 내역
                                                        </Heading>
                                                        {messages.map(
                                                            (msg, idx) => {
                                                                const isUser =
                                                                    msg.sender ===
                                                                    "user"
                                                                const msgCitations =
                                                                    typeof msg.citations ===
                                                                    "string"
                                                                        ? JSON.parse(
                                                                              msg.citations ||
                                                                                  "[]",
                                                                          )
                                                                        : msg.citations ||
                                                                          (typeof selectedResume.citations ===
                                                                          "string"
                                                                              ? JSON.parse(
                                                                                    selectedResume.citations ||
                                                                                        "[]",
                                                                                )
                                                                              : selectedResume.citations ||
                                                                                [])
                                                                const msgRecommendedJobs =
                                                                    typeof msg.recommended_jobs === "string"
                                                                        ? JSON.parse(msg.recommended_jobs || "[]")
                                                                        : msg.recommended_jobs || []
                                                                return (
                                                                    <Flex
                                                                        key={
                                                                            idx
                                                                        }
                                                                        justify={
                                                                            isUser
                                                                                ? "flex-end"
                                                                                : "flex-start"
                                                                        }
                                                                        gap={3}
                                                                        align="start"
                                                                    >
                                                                        {!isUser && (
                                                                            <Box
                                                                                bg="blue.50"
                                                                                p={
                                                                                    2
                                                                                }
                                                                                borderRadius="lg"
                                                                                color="blue.600"
                                                                                mt={
                                                                                    1.5
                                                                                }
                                                                            >
                                                                                <FaFileAlt
                                                                                    size={
                                                                                        10
                                                                                    }
                                                                                />
                                                                            </Box>
                                                                        )}
                                                                        {isUser ? (
                                                                            <Box
                                                                                bg="blue.600"
                                                                                color="white"
                                                                                p={
                                                                                    3.5
                                                                                }
                                                                                borderRadius="2xl"
                                                                                borderTopRightRadius="none"
                                                                                maxW="80%"
                                                                            >
                                                                                <Text
                                                                                    fontSize="sm"
                                                                                    lineHeight="1.6"
                                                                                    whiteSpace="pre-line"
                                                                                >
                                                                                    {
                                                                                        msg.message
                                                                                    }
                                                                                </Text>
                                                                            </Box>
                                                                        ) : (
                                                                            <Box
                                                                                flex={
                                                                                    1
                                                                                }
                                                                                pt={
                                                                                    1
                                                                                }
                                                                            >
                                                                                <MarkdownRenderer
                                                                                    content={
                                                                                        msg.message
                                                                                    }
                                                                                    citations={
                                                                                        msgCitations
                                                                                    }
                                                                                    onViewSource={
                                                                                        handleViewSource
                                                                                    }
                                                                                />
                                                                                {msgRecommendedJobs.length > 0 && (
                                                                                    <Box
                                                                                        mt={4}
                                                                                        pt={3.5}
                                                                                        borderTop="1px solid"
                                                                                        borderColor="blue.100"
                                                                                    >
                                                                                        <HStack gap={2} mb={3}>
                                                                                            <Box color="blue.600">
                                                                                                <FaBriefcase size={13} />
                                                                                            </Box>
                                                                                            <Text
                                                                                                fontSize="xs"
                                                                                                fontWeight="bold"
                                                                                                color="blue.700"
                                                                                            >
                                                                                                AI 맞춤 추천 채용 공고 ({msgRecommendedJobs.length}개)
                                                                                            </Text>
                                                                                        </HStack>
                                                                                        <SimpleGrid
                                                                                            columns={{
                                                                                                base: 1,
                                                                                                md: msgRecommendedJobs.length === 1 ? 1 : 2,
                                                                                            }}
                                                                                            gap={3}
                                                                                        >
                                                                                            {msgRecommendedJobs.map(
                                                                                                (
                                                                                                    job: any,
                                                                                                    jIdx: number,
                                                                                                ) => (
                                                                                                    <RecommendedJobCard
                                                                                                        key={
                                                                                                            job.id ||
                                                                                                            jIdx
                                                                                                        }
                                                                                                        job={
                                                                                                            job
                                                                                                        }
                                                                                                        onNavigate={(
                                                                                                            id,
                                                                                                        ) =>
                                                                                                            navigate(
                                                                                                                `/post/${id}`,
                                                                                                            )
                                                                                                        }
                                                                                                    />
                                                                                                ),
                                                                                            )}
                                                                                        </SimpleGrid>
                                                                                    </Box>
                                                                                )}
                                                                            </Box>
                                                                        )}
                                                                    </Flex>
                                                                )
                                                            },
                                                        )}
                                                    </VStack>
                                                )}

                                                {isGenerating && (
                                                    <Flex
                                                        gap={3}
                                                        align="start"
                                                        pt={4}
                                                    >
                                                        <Box
                                                            bg="blue.50"
                                                            p={2}
                                                            borderRadius="lg"
                                                            color="blue.600"
                                                            mt={1.5}
                                                        >
                                                            <FaFileAlt
                                                                size={10}
                                                            />
                                                        </Box>
                                                        <Box pt={2.5}>
                                                            <Spinner
                                                                size="xs"
                                                                color="blue.600"
                                                            />
                                                        </Box>
                                                    </Flex>
                                                )}
                                                <div ref={chatEndRef} />
                                            </VStack>
                                        </Box>

                                        {/* Prompt/Chat Input Box */}
                                        <Box mt="auto" pt={2}>
                                            {/* Quick Action Suggestion Buttons (Shown only at the beginning of chat) */}
                                            {messages.length === 0 && (
                                                <HStack
                                                    gap={2}
                                                    mb={2.5}
                                                    wrap="wrap"
                                                >
                                                    <Button
                                                        size="xs"
                                                        variant="subtle"
                                                        color="blue.700"
                                                        bg="blue.50"
                                                        border="1px solid"
                                                        borderColor="blue.200"
                                                        borderRadius="full"
                                                        px={3}
                                                        py={1.5}
                                                        _hover={{
                                                            bg: "blue.100",
                                                            borderColor:
                                                                "blue.300",
                                                            transform:
                                                                "translateY(-1px)",
                                                            shadow: "xs",
                                                        }}
                                                        transition="all 0.15s ease"
                                                        disabled={
                                                            isGenerating ||
                                                            isUploading ||
                                                            isReanalyzing
                                                        }
                                                        onClick={() =>
                                                            handleSendPromptOrChat(
                                                                "이력서 요약해줘",
                                                            )
                                                        }
                                                    >
                                                        <HStack gap={1.5}>
                                                            <FaFileAlt
                                                                size={11}
                                                                color="#2563EB"
                                                            />
                                                            <Text
                                                                fontWeight="semibold"
                                                                fontSize="xs"
                                                            >
                                                                이력서 요약해줘
                                                            </Text>
                                                        </HStack>
                                                    </Button>
                                                    <Button
                                                        size="xs"
                                                        variant="subtle"
                                                        color="blue.700"
                                                        bg="blue.50"
                                                        border="1px solid"
                                                        borderColor="blue.200"
                                                        borderRadius="full"
                                                        px={3}
                                                        py={1.5}
                                                        _hover={{
                                                            bg: "blue.100",
                                                            borderColor:
                                                                "blue.300",
                                                            transform:
                                                                "translateY(-1px)",
                                                            shadow: "xs",
                                                        }}
                                                        transition="all 0.15s ease"
                                                        disabled={
                                                            isGenerating ||
                                                            isUploading ||
                                                            isReanalyzing
                                                        }
                                                        onClick={() =>
                                                            handleSendPromptOrChat(
                                                                "관련 공고 추천해줘",
                                                            )
                                                        }
                                                    >
                                                        <HStack gap={1.5}>
                                                            <FaBriefcase
                                                                size={11}
                                                                color="#2563EB"
                                                            />
                                                            <Text
                                                                fontWeight="semibold"
                                                                fontSize="xs"
                                                            >
                                                                관련 공고
                                                                추천해줘
                                                            </Text>
                                                        </HStack>
                                                    </Button>
                                                </HStack>
                                            )}

                                            <Flex
                                                position="relative"
                                                align="center"
                                                border="1px solid"
                                                borderColor="gray.200"
                                                borderRadius="2xl"
                                                p={1.5}
                                                bg="white"
                                                shadow="sm"
                                                _focusWithin={{
                                                    borderColor: "blue.400",
                                                    boxShadow:
                                                        "0 0 0 1px blue.600",
                                                }}
                                            >
                                                <Input
                                                    value={prompt}
                                                    onChange={(e) =>
                                                        setPrompt(
                                                            e.target.value,
                                                        )
                                                    }
                                                    onKeyDown={(e) => {
                                                        if (
                                                            e.key === "Enter" &&
                                                            !isGenerating
                                                        ) {
                                                            handleSendPromptOrChat()
                                                        }
                                                    }}
                                                    placeholder="무엇이든 질문하세요"
                                                    fontSize="sm"
                                                    border="none"
                                                    outline="none"
                                                    _focus={{
                                                        outline: "none",
                                                        boxShadow: "none",
                                                    }}
                                                    pl={4}
                                                    pr={12}
                                                    disabled={
                                                        isGenerating ||
                                                        isUploading
                                                    }
                                                />
                                                <Button
                                                    onClick={() =>
                                                        handleSendPromptOrChat()
                                                    }
                                                    position="absolute"
                                                    right="1.5"
                                                    w="9"
                                                    h="9"
                                                    minW="9"
                                                    p={0}
                                                    borderRadius="full"
                                                    bg="gray.100"
                                                    color="gray.600"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    _hover={{
                                                        bg: "blue.50",
                                                        color: "blue.600",
                                                    }}
                                                    _disabled={{
                                                        opacity: 0.5,
                                                        cursor: "not-allowed",
                                                    }}
                                                    disabled={
                                                        isGenerating ||
                                                        isUploading ||
                                                        prompt.trim() === ""
                                                    }
                                                    transition="all 0.2s"
                                                >
                                                    <FaArrowRight size={12} />
                                                </Button>
                                            </Flex>
                                        </Box>
                                    </Box>
                                </Flex>
                            ) : (
                                /* Empty state - Drag & Drop / Upload Box */
                                <Box
                                    flex={1}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                    h="100%"
                                    w="100%"
                                >
                                    <Flex
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        w="100%"
                                        h="340px"
                                        border="1px dashed"
                                        borderColor="gray.200"
                                        borderRadius="2xl"
                                        p={10}
                                        bg="white"
                                        shadow="sm"
                                        _hover={{
                                            bg: "blue.50/5",
                                            borderColor: "blue.400",
                                            shadow: "md",
                                        }}
                                        transition="all 0.3s ease"
                                        cursor="pointer"
                                        onClick={() =>
                                            document
                                                .getElementById(
                                                    "pdf-file-input",
                                                )
                                                ?.click()
                                        }
                                        position="relative"
                                    >
                                        <input
                                            id="pdf-file-input"
                                            type="file"
                                            accept=".pdf"
                                            style={{ display: "none" }}
                                            onChange={handleFileUpload}
                                        />
                                        {isUploading ? (
                                            <VStack gap={4}>
                                                <Spinner
                                                    size="lg"
                                                    color="blue.500"
                                                />
                                                <Text
                                                    fontWeight="medium"
                                                    color="blue.700"
                                                    fontSize="xs"
                                                >
                                                    이력서 PDF를 분석하고
                                                    요약하는 중입니다...
                                                </Text>
                                            </VStack>
                                        ) : (
                                            <VStack gap={5} textAlign="center">
                                                <Box
                                                    bg="gray.50"
                                                    border="1px solid"
                                                    borderColor="gray.100"
                                                    p={4}
                                                    borderRadius="full"
                                                    color="gray.400"
                                                    display="flex"
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    w="14"
                                                    h="14"
                                                >
                                                    <FaCloudUploadAlt
                                                        size={24}
                                                    />
                                                </Box>
                                                <VStack gap={1.5}>
                                                    <Text
                                                        fontWeight="semibold"
                                                        fontSize="sm"
                                                        color="gray.800"
                                                    >
                                                        이력서 PDF 업로드
                                                    </Text>
                                                    <Text
                                                        fontSize="xs"
                                                        color="gray.400"
                                                        maxW="320px"
                                                        lineHeight="1.6"
                                                    >
                                                        자소서 또는 이력서 PDF
                                                        파일을 업로드하면 AI
                                                        요약, 개선점 피드백 및
                                                        실시간 챗 기능을
                                                        이용하실 수 있습니다.
                                                    </Text>
                                                </VStack>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    borderRadius="full"
                                                    borderColor="gray.200"
                                                    color="gray.600"
                                                    px={6}
                                                    bg="white"
                                                    _hover={{
                                                        bg: "gray.50",
                                                        borderColor: "gray.300",
                                                        color: "gray.800",
                                                    }}
                                                    mt={1}
                                                >
                                                    파일 선택
                                                </Button>
                                            </VStack>
                                        )}
                                    </Flex>
                                </Box>
                            )}
                        </>
                    ) : (
                        <Flex
                            flex={1}
                            direction="column"
                            align="center"
                            justify="center"
                            textAlign="center"
                            p={8}
                        >
                            <Text color="gray.400" fontSize="md" mb={4}>
                                작성중인 자기소개서가 없습니다.
                            </Text>
                            <Button
                                onClick={handleCreateResume}
                                bg="blue.600"
                                color="white"
                                borderRadius="xl"
                                _hover={{ bg: "blue.700" }}
                                size="sm"
                                px={6}
                            >
                                자기소개서 새로 만들기
                            </Button>
                        </Flex>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export default ApplicationTemplate
