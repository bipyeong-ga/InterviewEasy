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
import {
    Trash2,
    ArrowRight,
    FileText,
    Check,
    X,
    UploadCloud,
    Code2,
    Palette,
    Braces,
    FileCode,
    Terminal,
    Database,
    File,
    MoreVertical,
    RefreshCw,
    Briefcase,
    Sparkles,
} from "lucide-react"
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
                            return { icon: Code2, color: "orange.400" }
                        case "css":
                        case "scss":
                            return { icon: Palette, color: "blue.400" }
                        case "javascript":
                        case "js":
                        case "json":
                            return { icon: Braces, color: "yellow.400" }
                        case "typescript":
                        case "ts":
                        case "tsx":
                            return { icon: Code2, color: "blue.500" }
                        case "python":
                            return { icon: FileCode, color: "blue.300" }
                        case "bash":
                        case "sh":
                            return { icon: Terminal, color: "gray.300" }
                        case "sql":
                            return { icon: Database, color: "blue.200" }
                        default:
                            return { icon: File, color: "gray.400" }
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

    const [rawTextViewMode, setRawTextViewMode] = useState<"inline" | "raw">(
        "inline",
    )
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
                    bg="yellow.300"
                    color="gray.950"
                    px={2}
                    py={1}
                    borderRadius="md"
                    fontWeight="bold"
                    border="2px solid"
                    borderColor="yellow.500"
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

    // AI 인라인 첨삭 피드백 뷰 (형광펜 하이라이트 + 카드 코멘트)
    const renderInlineFeedbackView = (
        rawText: string,
        improvementsStr: string,
        citationsData: any,
    ) => {
        if (!rawText) return null

        // 1. 인용 데이터 및 개선점 파싱
        const citations: any[] =
            typeof citationsData === "string"
                ? (() => {
                      try {
                          return JSON.parse(citationsData || "[]")
                      } catch {
                          return []
                      }
                  })()
                : Array.isArray(citationsData)
                  ? citationsData
                  : []

        interface FeedbackItem {
            id: number
            quote: string
            feedbackText: string
            title?: string
        }

        const feedbackItems: FeedbackItem[] = []
        const lines = (improvementsStr || "")
            .split("\n")
            .map((l) => l.trim())
            .filter((l) => l.length > 0)

        // 문맥 및 인용구 분석을 통해 "어떻게 보완하면 더 좋은지" 첨삭 가이드 생성 도우미
        const getActionableFeedback = (quote: string, candidateText?: string): string => {
            const trimmedCandidate = (candidateText || "").trim()

            // 1. 이미 개선 조언 형태인 경우 (~좋아요, ~보강, ~추가, ~설득력, ~하세요 등)
            const isAdvicePattern = /(보강|추가|설명|서술|구체화|강조|작성|제시|언급|좋아요|있어요|높아집니다|돋보여요|해 보세요|바랍니다)/.test(trimmedCandidate)
            const isJustFact = /(달성|확보|구축|진행|완료|수행|사용함|개발함|기여함|수준 확보)/.test(trimmedCandidate) && !isAdvicePattern

            if (trimmedCandidate && isAdvicePattern && !isJustFact && trimmedCandidate.length > 8) {
                return trimmedCandidate
            }

            // 2. 본문 인용구(quote)의 내용에 따라 맞춤형 첨삭 피드백 생성
            const lowerQuote = (quote || "").toLowerCase()

            if (/데이터셋|dataset|이미지|image|yolo|모델|실험|학습|epoch/i.test(lowerQuote)) {
                return "데이터셋을 구축하고 반복 개선하는 과정에서 겪은 문제점(라벨링 오차, 불균형 등)과 이를 해결한 접근 방식을 함께 서술하면 문제 해결력이 훨씬 돋보여요"
            }
            if (/map|fps|속도|지연|성능|최적화|초과|달성|latency|throughput/i.test(lowerQuote)) {
                return "달성한 수치 지표와 더불어, 실제 서비스 환경의 요구 조건을 어떻게 충족했는지 또는 성능 병목을 해결한 기술적 과정을 덧붙이면 더 설득력 있어요"
            }
            if (/react|typescript|javascript|spring|node|docker|db|sql|아키텍처|라이브러리/i.test(lowerQuote)) {
                return "단순 기술 스택 나열을 넘어, 해당 기술을 선택한 타당한 이유와 기존 방식 대비 어떤 개선을 이끌어냈는지 구체화하면 좋아요"
            }
            if (/팀|협업|동료|커뮤니케이션|리뷰|기여/i.test(lowerQuote)) {
                return "팀 협업 과정에서 본인이 주도적으로 수행한 역할과 문제 발생 시 동료들과 어떻게 조율했는지를 구체적으로 드러내면 좋아요"
            }

            return "이 부분에 구체적인 트러블슈팅 경험이나 수치적 근거(어떻게 해결했는지)를 1~2문장 추가하면 더 설득력 있는 자소서가 돼요"
        }

        lines.forEach((line, idx) => {
            const citeMatches = [...line.matchAll(/\[(\d+)\]/g)]
            const citeIds = citeMatches.map((m) => parseInt(m[1], 10))

            let cleanLine = line
                .replace(/^[-*]\s*/, "")
                .replace(/\[\d+\]/g, "")
                .trim()
            let title = ""
            let rawFeedback = cleanLine
            const boldMatch = cleanLine.match(/^\*\*([^*]+)\*\*[:\s]*(.*)/)
            if (boldMatch) {
                title = boldMatch[1].trim()
                rawFeedback = boldMatch[2].trim()
            }

            if (citeIds.length > 0) {
                citeIds.forEach((cid) => {
                    const citeObj = citations.find((c: any) => c.id === cid)
                    if (citeObj && citeObj.quote) {
                        feedbackItems.push({
                            id: cid,
                            quote: citeObj.quote,
                            feedbackText: getActionableFeedback(citeObj.quote, rawFeedback || citeObj.feedback),
                            title,
                        })
                    }
                })
            } else if (citations[idx] && citations[idx].quote) {
                feedbackItems.push({
                    id: citations[idx].id || idx + 1,
                    quote: citations[idx].quote,
                    feedbackText: getActionableFeedback(citations[idx].quote, rawFeedback || citations[idx].feedback),
                    title,
                })
            }
        })

        // fallback: citations에서 첨삭 조언 생성
        if (feedbackItems.length === 0 && citations.length > 0) {
            citations.forEach((c: any) => {
                if (c.quote) {
                    feedbackItems.push({
                        id: c.id,
                        quote: c.quote,
                        feedbackText: getActionableFeedback(c.quote, c.feedback),
                        title: c.title,
                    })
                }
            })
        }

        // 2. rawText 내에서 quote 위치 탐색
        interface MatchedAnnotation {
            item: FeedbackItem
            matchStart: number
            matchEnd: number
            sentenceEnd: number
        }

        const matchedAnnotations: MatchedAnnotation[] = []
        const lowerRaw = rawText.toLowerCase()

        feedbackItems.forEach((item) => {
            const trimmed = item.quote.trim()
            if (!trimmed) return

            let matchStart = -1
            let matchEnd = -1

            // 1단계: 직접 슬라이스 매칭
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

            // 2단계: 정규식 유연 매칭
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
                } catch {
                    // ignore
                }
            }

            // 3단계: 핵심 단어 토큰 매칭
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

            if (matchStart !== -1) {
                // 구절이 포함된 문장의 종결 위치(마침표나 줄바꿈) 탐색
                let sentenceEnd = matchEnd
                const nextPeriod = rawText.indexOf(".", matchEnd)
                const nextNewline = rawText.indexOf("\n", matchEnd)
                const candidates = [nextPeriod, nextNewline].filter(
                    (i) => i !== -1,
                )

                if (candidates.length > 0) {
                    const earliest = Math.min(...candidates)
                    sentenceEnd =
                        earliest === nextPeriod ? nextPeriod + 1 : earliest
                } else {
                    sentenceEnd = rawText.length
                }

                matchedAnnotations.push({
                    item,
                    matchStart,
                    matchEnd,
                    sentenceEnd,
                })
            }
        })

        // 매칭된 항목이 없으면 기본 텍스트 렌더링
        if (matchedAnnotations.length === 0) {
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

        // 시작 위치 기준 오름차순 정렬 및 겹침 제거
        matchedAnnotations.sort((a, b) => a.matchStart - b.matchStart)
        const nonOverlapping: MatchedAnnotation[] = []
        let lastCovered = -1

        matchedAnnotations.forEach((ann) => {
            if (ann.matchStart >= lastCovered) {
                nonOverlapping.push(ann)
                lastCovered = ann.sentenceEnd
            }
        })

        // 3. 인라인 첨삭 UI 렌더링 (이미지와 동일한 스타일 적용)
        const segments: React.ReactNode[] = []
        let cursor = 0

        nonOverlapping.forEach((ann, idx) => {
            // 하이라이트 전 일반 본문
            if (ann.matchStart > cursor) {
                segments.push(
                    <Text
                        as="span"
                        key={`text-before-${idx}`}
                        fontSize="sm"
                        color="gray.700"
                        whiteSpace="pre-wrap"
                        lineHeight="1.7"
                    >
                        {rawText.slice(cursor, ann.matchStart)}
                    </Text>,
                )
            }

            // 노란색 형광펜 하이라이트된 문장/구절
            segments.push(
                <Box
                    as="mark"
                    key={`highlight-${idx}`}
                    bg="#FDE047"
                    color="gray.950"
                    px={1.5}
                    py={0.5}
                    borderRadius="md"
                    fontWeight="semibold"
                    display="inline"
                    boxDecorationBreak="clone"
                    WebkitBoxDecorationBreak="clone"
                    fontSize="sm"
                    lineHeight="1.7"
                >
                    {rawText.slice(ann.matchStart, ann.matchEnd)}
                </Box>,
            )

            // 하이라이트 끝부터 문장 끝까지의 텍스트
            if (ann.sentenceEnd > ann.matchEnd) {
                segments.push(
                    <Text
                        as="span"
                        key={`text-sentence-end-${idx}`}
                        fontSize="sm"
                        color="gray.700"
                        whiteSpace="pre-wrap"
                        lineHeight="1.7"
                    >
                        {rawText.slice(ann.matchEnd, ann.sentenceEnd)}
                    </Text>,
                )
            }

            // 문장 바로 아래 인라인 AI 피드백 카드
            segments.push(
                <Box
                    key={`card-${idx}`}
                    my={3}
                    p={3.5}
                    bg="blue.50/80"
                    border="1px solid"
                    borderColor="blue.100"
                    borderRadius="xl"
                    shadow="2xs"
                    transition="all 0.2s ease"
                    _hover={{
                        borderColor: "blue.300",
                        bg: "blue.50",
                        shadow: "xs",
                        transform: "translateY(-1px)",
                    }}
                    cursor="pointer"
                    onClick={() => handleViewSource({ quote: ann.item.quote })}
                >
                    <Flex align="center" gap={2.5}>
                        <Box
                            color="blue.500"
                            flexShrink={0}
                            display="flex"
                            alignItems="center"
                        >
                            <Sparkles size={16} />
                        </Box>
                        <Text
                            fontSize="sm"
                            fontWeight="medium"
                            color="blue.700"
                            lineHeight="1.5"
                            flex={1}
                        >
                            {ann.item.feedbackText}
                        </Text>
                    </Flex>
                </Box>,
            )

            cursor = ann.sentenceEnd
        })

        // 마지막 남은 텍스트
        if (cursor < rawText.length) {
            segments.push(
                <Text
                    as="span"
                    key="text-tail"
                    fontSize="sm"
                    color="gray.700"
                    whiteSpace="pre-wrap"
                    lineHeight="1.7"
                >
                    {rawText.slice(cursor)}
                </Text>,
            )
        }

        return <Box>{segments}</Box>
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
                                <Sparkles size={11} />
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
            bg="gray.50"
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
                                                                        ? "blue.50"
                                                                        : snapshot.isDragging
                                                                          ? "gray.50"
                                                                          : "transparent"
                                                                }
                                                                borderRadius="xl"
                                                                _hover={{
                                                                    bg: isSelected
                                                                        ? "blue.50"
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
                                                                        <FileText
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
                                                                                    <MoreVertical
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
                                                                                        <Trash2
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
                                                    bg="blue.600"
                                                    _hover={{ bg: "blue.700" }}
                                                    color="white"
                                                    borderRadius="md"
                                                    p={2}
                                                >
                                                    <Check size={10} />
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
                                                    <X size={10} />
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
                                                <RefreshCw size={10} />
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
                                            wrap="wrap"
                                            gap={2}
                                        >
                                            <HStack gap={2} align="center">
                                                <Heading
                                                    fontSize="xs"
                                                    fontWeight="bold"
                                                    color="gray.500"
                                                    textTransform="uppercase"
                                                    letterSpacing="wider"
                                                >
                                                    문서 뷰
                                                </Heading>
                                                <HStack
                                                    gap={1}
                                                    bg="gray.200/70"
                                                    p="3px"
                                                    borderRadius="lg"
                                                >
                                                    <Button
                                                        size="xs"
                                                        variant="ghost"
                                                        bg={
                                                            rawTextViewMode ===
                                                            "inline"
                                                                ? "white"
                                                                : "transparent"
                                                        }
                                                        color={
                                                            rawTextViewMode ===
                                                            "inline"
                                                                ? "blue.600"
                                                                : "gray.600"
                                                        }
                                                        fontWeight={
                                                            rawTextViewMode ===
                                                            "inline"
                                                                ? "bold"
                                                                : "medium"
                                                        }
                                                        shadow={
                                                            rawTextViewMode ===
                                                            "inline"
                                                                ? "xs"
                                                                : "none"
                                                        }
                                                        onClick={() =>
                                                            setRawTextViewMode(
                                                                "inline",
                                                            )
                                                        }
                                                        h="24px"
                                                        fontSize="2xs"
                                                        px={2.5}
                                                        borderRadius="md"
                                                        _hover={{
                                                            bg:
                                                                rawTextViewMode ===
                                                                "inline"
                                                                    ? "white"
                                                                    : "gray.200/80",
                                                        }}
                                                    >
                                                        <Sparkles
                                                            size={11}
                                                            style={{
                                                                marginRight: 4,
                                                            }}
                                                        />
                                                        AI 첨삭 피드백
                                                    </Button>
                                                    <Button
                                                        size="xs"
                                                        variant="ghost"
                                                        bg={
                                                            rawTextViewMode ===
                                                            "raw"
                                                                ? "white"
                                                                : "transparent"
                                                        }
                                                        color={
                                                            rawTextViewMode ===
                                                            "raw"
                                                                ? "blue.600"
                                                                : "gray.600"
                                                        }
                                                        fontWeight={
                                                            rawTextViewMode ===
                                                            "raw"
                                                                ? "bold"
                                                                : "medium"
                                                        }
                                                        shadow={
                                                            rawTextViewMode ===
                                                            "raw"
                                                                ? "xs"
                                                                : "none"
                                                        }
                                                        onClick={() =>
                                                            setRawTextViewMode(
                                                                "raw",
                                                            )
                                                        }
                                                        h="24px"
                                                        fontSize="2xs"
                                                        px={2.5}
                                                        borderRadius="md"
                                                        _hover={{
                                                            bg:
                                                                rawTextViewMode ===
                                                                "raw"
                                                                    ? "white"
                                                                    : "gray.200/80",
                                                        }}
                                                    >
                                                        원본 텍스트
                                                    </Button>
                                                </HStack>
                                            </HStack>
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
                                        {rawTextViewMode === "inline"
                                            ? renderInlineFeedbackView(
                                                  selectedResume.raw_text,
                                                  selectedResume.improvements,
                                                  selectedResume.citations,
                                              )
                                            : renderRawTextWithHighlight(
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
                                                                    typeof msg.recommended_jobs ===
                                                                    "string"
                                                                        ? JSON.parse(
                                                                              msg.recommended_jobs ||
                                                                                  "[]",
                                                                          )
                                                                        : msg.recommended_jobs ||
                                                                          []
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
                                                                                <FileText
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
                                                                                {msgRecommendedJobs.length >
                                                                                    0 && (
                                                                                    <Box
                                                                                        mt={
                                                                                            4
                                                                                        }
                                                                                        pt={
                                                                                            3.5
                                                                                        }
                                                                                        borderTop="1px solid"
                                                                                        borderColor="blue.100"
                                                                                    >
                                                                                        <HStack
                                                                                            gap={
                                                                                                2
                                                                                            }
                                                                                            mb={
                                                                                                3
                                                                                            }
                                                                                        >
                                                                                            <Box color="blue.600">
                                                                                                <Briefcase
                                                                                                    size={
                                                                                                        13
                                                                                                    }
                                                                                                />
                                                                                            </Box>
                                                                                            <Text
                                                                                                fontSize="xs"
                                                                                                fontWeight="bold"
                                                                                                color="blue.700"
                                                                                            >
                                                                                                AI
                                                                                                맞춤
                                                                                                추천
                                                                                                채용
                                                                                                공고
                                                                                                (
                                                                                                {
                                                                                                    msgRecommendedJobs.length
                                                                                                }
                                                                                                개)
                                                                                            </Text>
                                                                                        </HStack>
                                                                                        <SimpleGrid
                                                                                            columns={{
                                                                                                base: 1,
                                                                                                md:
                                                                                                    msgRecommendedJobs.length ===
                                                                                                    1
                                                                                                        ? 1
                                                                                                        : 2,
                                                                                            }}
                                                                                            gap={
                                                                                                3
                                                                                            }
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
                                                            <FileText
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
                                                            <FileText
                                                                size={11}
                                                                color="var(--chakra-colors-blue-600)"
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
                                                            <Briefcase
                                                                size={11}
                                                                color="var(--chakra-colors-blue-600)"
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
                                                    <ArrowRight size={12} />
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
                                                    <UploadCloud size={24} />
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
