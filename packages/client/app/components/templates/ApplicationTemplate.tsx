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
    createHighlightJsAdapter,
} from "@chakra-ui/react"
import { useNavigate, useLocation } from "react-router"
import { useAuth } from "../../hooks/useAuth"
import Header from "../organisms/Header"
import { toaster } from "../ui/toaster"
import { FaPlus, FaTrash, FaArrowRight, FaFileAlt, FaCheck, FaTimes, FaCloudUploadAlt, FaEdit } from "react-icons/fa"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { Prose } from "../ui/prose"
import hljs from "highlight.js"
import "highlight.js/styles/github-dark.css"

const highlightJsAdapter = createHighlightJsAdapter({
    load: async () => hljs,
    loadSync: () => hljs,
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

// Markdown rendering component supporting KaTeX and CodeBlock
interface MarkdownRendererProps {
    content: string
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    const components = {
        code({ node, className, children, ...props }: any) {
            const match = /language-(\w+)/.exec(className || "")
            const language = match ? match[1] : ""
            const codeText = String(children).replace(/\n$/, "")

            if (match) {
                return (
                    <CodeBlock.Root maxW="100%" size="sm" mt={3} mb={3} code={codeText} language={language}>
                        <CodeBlock.Header px={4} py={2} bg="gray.100" borderTopRadius="md" borderBottom="1px solid" borderColor="gray.200" display="flex" justifyContent="space-between" alignItems="center">
                            <Text fontSize="xs" fontWeight="bold" color="gray.600">
                                {language.toUpperCase()}
                            </Text>
                            <CodeBlock.CopyTrigger />
                        </CodeBlock.Header>
                        <CodeBlock.Content>
                            <CodeBlock.Code bg="gray.900" color="gray.50" p={4} borderBottomRadius="md" fontSize="xs" display="block" overflowX="auto" fontFamily="monospace">
                                <CodeBlock.CodeText />
                            </CodeBlock.Code>
                        </CodeBlock.Content>
                    </CodeBlock.Root>
                )
            }

            return (
                <Code bg="gray.100" color="blue.700" px={1.5} py={0.5} borderRadius="md" fontSize="xs" fontWeight="semibold" {...props}>
                    {children}
                </Code>
            )
        }
    }

    return (
        <CodeBlock.AdapterProvider value={highlightJsAdapter}>
            <Prose maxW="100%" color="gray.800">
                <ReactMarkdown
                    remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeKatex]}
                    components={components}
                >
                    {content}
                </ReactMarkdown>
            </Prose>
        </CodeBlock.AdapterProvider>
    )
}

const handleJsonResponse = async (resp: Response) => {
    const contentType = resp.headers.get("content-type")
    if (!contentType || !contentType.includes("application/json")) {
        throw new Error("서버로부터 올바른 응답(JSON)을 받지 못했습니다. 백엔드 서버(Port 3000)가 정상적으로 실행 중인지 확인해 주세요.")
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
    const [isGenerating, setIsGenerating] = useState(false)
    const [prompt, setPrompt] = useState("")

    const [isEditingTitle, setIsEditingTitle] = useState(false)
    const [editTitleText, setEditTitleText] = useState("")

    const [messages, setMessages] = useState<any[]>([])
    const chatEndRef = useRef<HTMLDivElement>(null)

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
                const currentSelected = selectedResume ? data.find((r: any) => r.id === selectedResume.id) : null
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
                throw new Error(errData.error || "자기소개서 생성에 실패했습니다.")
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
            setResumes((prev) => prev.map((r) => (r.id === updated.id ? updated : r)))
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
            const resp = await fetch(`/api/resumes/${selectedResume.id}/upload`, {
                method: "POST",
                headers: {
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: formData,
            })

            if (!resp.ok) {
                const errData = await handleJsonResponse(resp)
                throw new Error(errData.error || "PDF 파일 분석에 실패했습니다.")
            }

            const updatedResume = await handleJsonResponse(resp)
            setResumes((prev) => prev.map((r) => (r.id === updatedResume.id ? updatedResume : r)))
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

    const handleSendPromptOrChat = async () => {
        if (!prompt.trim() || !selectedResume) return

        const userMsgText = prompt.trim()
        setPrompt("")

        // Optimistically append user message
        const tempUserMsg = { sender: "user", message: userMsgText }
        setMessages((prev) => [...prev, tempUserMsg])
        setIsGenerating(true)

        try {
            const token = localStorage.getItem("token")
            const resp = await fetch(`/api/resumes/${selectedResume.id}/messages`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    ...(token ? { Authorization: `Bearer ${token}` } : {}),
                },
                body: JSON.stringify({ message: userMsgText }),
            })

            if (!resp.ok) {
                throw new Error("AI 응답을 생성하는 중에 오류가 발생했습니다.")
            }

            const reply = await handleJsonResponse(resp)
            setMessages((prev) => [...prev, reply])
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
        <Box h="100vh" w="100vw" overflow="hidden" bg="#F3F7FA" display="flex" flexDirection="column">
            <Header />
            <Flex h="calc(100vh - 72px)" mt="72px" w="100%" overflow="hidden" p={6} gap={6}>
                {/* Left Sidebar Card */}
                <Box
                    w="280px"
                    minW="280px"
                    borderRadius="2xl"
                    shadow="sm"
                    h="100%"
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
                        _hover={{ bg: "gray.50", borderColor: "gray.300", color: "gray.600" }}
                        fontWeight="medium"
                        fontSize="xs"
                        h="40px"
                        mb={4}
                    >
                        + 문서 추가
                    </Button>

                    <VStack flex={1} overflowY="auto" align="stretch" gap={1.5} pr={1}>
                        {isFetchingResumes ? (
                            <Flex justify="center" align="center" py={8}>
                                <Spinner size="sm" color="blue.600" />
                            </Flex>
                        ) : resumes.length === 0 ? (
                            <Flex direction="column" align="center" justify="center" py={12} textAlign="center">
                                <Text fontSize="2xs" color="gray.400" lineHeight="1.6">
                                    추가된 자소서가 없습니다.<br />위의 버튼을 눌러 새 문서를 만들어보세요!
                                </Text>
                            </Flex>
                        ) : (
                            resumes.map((resume) => {
                                const isSelected = selectedResume?.id === resume.id
                                return (
                                    <HStack
                                        key={resume.id}
                                        p={3.5}
                                        bg={isSelected ? "#EBF3FF" : "transparent"}
                                        borderRadius="xl"
                                        _hover={{ bg: isSelected ? "#EBF3FF" : "gray.50" }}
                                        cursor="pointer"
                                        onClick={() => {
                                            setSelectedResume(resume)
                                            setMessages([])
                                        }}
                                        justifyContent="space-between"
                                        transition="all 0.2s"
                                        role="group"
                                    >
                                        <HStack gap={3} overflow="hidden" flex={1}>
                                            <Box color={isSelected ? "blue.600" : "gray.400"} mt="2px">
                                                <FaFileAlt size={12} />
                                            </Box>
                                            <Text
                                                fontSize="sm"
                                                fontWeight={isSelected ? "semibold" : "medium"}
                                                color={isSelected ? "blue.600" : "gray.600"}
                                                truncate
                                                w="100%"
                                            >
                                                {resume.title}
                                            </Text>
                                        </HStack>
                                        <HStack gap={1} opacity={0} _groupHover={{ opacity: 1 }} transition="opacity 0.2s">
                                            <Button
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    setIsEditingTitle(true)
                                                    setEditTitleText(resume.title)
                                                }}
                                                variant="ghost"
                                                size="2xs"
                                                p={1}
                                                borderRadius="md"
                                                color="gray.400"
                                                _hover={{ color: "blue.600", bg: "gray.50" }}
                                            >
                                                <FaEdit size={10} />
                                            </Button>
                                            <Button
                                                onClick={(e) => handleDeleteResume(resume.id, e)}
                                                variant="ghost"
                                                size="2xs"
                                                p={1}
                                                borderRadius="md"
                                                color="gray.400"
                                                _hover={{ color: "red.600", bg: "red.50" }}
                                            >
                                                <FaTrash size={10} />
                                            </Button>
                                        </HStack>
                                    </HStack>
                                )
                            })
                        )}
                    </VStack>
                </Box>

                {/* Right Main Panel Card */}
                <Box
                    flex={1}
                    h="100%"
                    bg="white"
                    borderRadius="2xl"
                    shadow="sm"
                    display="flex"
                    flexDirection="column"
                    p={8}
                    overflow="hidden"
                    position="relative"
                >
                    {selectedResume ? (
                        <>
                            {/* Document Title Header */}
                            <Flex justify="space-between" align="start" borderBottom="1px solid" borderColor="gray.100" pb={5} mb={6}>
                                <VStack align="start" gap={3}>
                                    <SpaceInvaderIcon />
                                    <Box>
                                        {isEditingTitle ? (
                                            <HStack maxW="400px">
                                                <Input
                                                    value={editTitleText}
                                                    onChange={(e) => setEditTitleText(e.target.value)}
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") handleSaveTitle()
                                                        if (e.key === "Escape") {
                                                            setIsEditingTitle(false)
                                                            setEditTitleText(selectedResume.title)
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
                                                <Button onClick={handleSaveTitle} size="sm" bg="blue.500" color="white" borderRadius="md" p={2}>
                                                    <FaCheck size={10} />
                                                </Button>
                                                <Button onClick={() => setIsEditingTitle(false)} size="sm" variant="outline" borderColor="gray.200" borderRadius="md" p={2}>
                                                    <FaTimes size={10} />
                                                </Button>
                                            </HStack>
                                        ) : (
                                            <Heading
                                                fontSize="2xl"
                                                fontWeight="bold"
                                                color="gray.900"
                                                cursor="pointer"
                                                _hover={{ textDecoration: "underline" }}
                                                onClick={() => {
                                                    setIsEditingTitle(true)
                                                    setEditTitleText(selectedResume.title)
                                                }}
                                            >
                                                {selectedResume.title}
                                            </Heading>
                                        )}
                                        <Text fontSize="xs" color="gray.400" mt={1}>
                                            {formatDate(selectedResume.updated_at)}
                                        </Text>
                                    </Box>
                                </VStack>

                                {selectedResume.raw_text && (
                                    <Button
                                        variant="outline"
                                        size="xs"
                                        color="gray.500"
                                        borderColor="gray.200"
                                        borderRadius="lg"
                                        _hover={{ color: "blue.600", bg: "blue.50/30", borderColor: "blue.200" }}
                                        onClick={() => document.getElementById("pdf-file-input-re")?.click()}
                                    >
                                        이력서 변경 (PDF)
                                    </Button>
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
                                <>
                                    {/* Unified Scrolling View */}
                                    <Box flex={1} overflowY="auto" pr={2} mb={4} position="relative">
                                        {isUploading && (
                                            <Flex position="absolute" inset={0} bg="white/80" align="center" justify="center" zIndex={10} backdropFilter="blur(2px)">
                                                <VStack gap={3}>
                                                    <Spinner size="lg" color="blue.600" />
                                                    <Text fontSize="sm" fontWeight="medium" color="blue.700">
                                                        새 이력서 PDF를 업로드하고 분석하고 있습니다...
                                                    </Text>
                                                </VStack>
                                            </Flex>
                                        )}

                                        <VStack align="stretch" gap={8}>
                                            {/* Analysis Content */}
                                            <VStack align="stretch" gap={6}>
                                                <Box>
                                                    <MarkdownRenderer content={selectedResume.summary} />
                                                </Box>
                                                <Box borderTop="1px solid" borderColor="gray.100" pt={6}>
                                                    <Heading fontSize="sm" fontWeight="bold" color="blue.600" mb={4}>
                                                        개선할 부분 & 피드백
                                                    </Heading>
                                                    <MarkdownRenderer content={selectedResume.improvements} />
                                                </Box>
                                            </VStack>

                                            {/* Chat Conversation Logs */}
                                            {messages.length > 0 && (
                                                <VStack align="stretch" gap={6} borderTop="1px solid" borderColor="gray.100" pt={6}>
                                                    <Heading fontSize="xs" fontWeight="bold" color="blue.600" mb={2} textTransform="uppercase" letterSpacing="wider">
                                                        AI 피드백 대화 내역
                                                    </Heading>
                                                    {messages.map((msg, idx) => {
                                                        const isUser = msg.sender === "user"
                                                        return (
                                                            <Flex key={idx} justify={isUser ? "flex-end" : "flex-start"} gap={3} align="start">
                                                                {!isUser && (
                                                                    <Box bg="blue.50" p={2} borderRadius="lg" color="blue.600" mt={1.5}>
                                                                        <FaFileAlt size={10} />
                                                                    </Box>
                                                                )}
                                                                {isUser ? (
                                                                    <Box
                                                                        bg="blue.600"
                                                                        color="white"
                                                                        p={3.5}
                                                                        borderRadius="2xl"
                                                                        borderTopRightRadius="none"
                                                                        maxW="80%"
                                                                    >
                                                                        <Text fontSize="sm" lineHeight="1.6" whiteSpace="pre-line">
                                                                            {msg.message}
                                                                        </Text>
                                                                    </Box>
                                                                ) : (
                                                                    <Box flex={1} pt={1}>
                                                                        <MarkdownRenderer content={msg.message} />
                                                                    </Box>
                                                                )}
                                                            </Flex>
                                                        )
                                                    })}
                                                </VStack>
                                            )}

                                            {isGenerating && (
                                                <Flex gap={3} align="start" pt={4}>
                                                    <Box bg="blue.50" p={2} borderRadius="lg" color="blue.600" mt={1.5}>
                                                        <FaFileAlt size={10} />
                                                    </Box>
                                                    <Box pt={2.5}>
                                                        <Spinner size="xs" color="blue.600" />
                                                    </Box>
                                                </Flex>
                                            )}
                                            <div ref={chatEndRef} />
                                        </VStack>
                                    </Box>

                                    {/* Prompt/Chat Input Box */}
                                    <Box mt="auto" pt={2}>
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
                                                boxShadow: "0 0 0 1px #2563EB",
                                            }}
                                        >
                                            <Input
                                                value={prompt}
                                                onChange={(e) => setPrompt(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter" && !isGenerating) {
                                                        handleSendPromptOrChat()
                                                    }
                                                }}
                                                placeholder="프롬프트를 입력해주세요..."
                                                fontSize="sm"
                                                variant="unstyled"
                                                pl={4}
                                                pr={12}
                                                disabled={isGenerating || isUploading}
                                            />
                                            <Button
                                                onClick={handleSendPromptOrChat}
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
                                                _hover={{ bg: "blue.50", color: "blue.600" }}
                                                _disabled={{ opacity: 0.5, cursor: "not-allowed" }}
                                                disabled={isGenerating || isUploading || prompt.trim() === ""}
                                                transition="all 0.2s"
                                            >
                                                <FaArrowRight size={12} />
                                            </Button>
                                        </Flex>
                                    </Box>
                                </>
                            ) : (
                                /* Empty state - Drag & Drop / Upload Box */
                                <Box flex={1} display="flex" alignItems="center" justifyContent="center" h="100%" w="100%">
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
                                        _hover={{ bg: "blue.50/5", borderColor: "blue.400", shadow: "md" }}
                                        transition="all 0.3s ease"
                                        cursor="pointer"
                                        onClick={() => document.getElementById("pdf-file-input")?.click()}
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
                                                <Spinner size="lg" color="blue.500" />
                                                <Text fontWeight="medium" color="blue.700" fontSize="xs">
                                                    이력서 PDF를 분석하고 요약하는 중입니다...
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
                                                    <FaCloudUploadAlt size={24} />
                                                </Box>
                                                <VStack gap={1.5}>
                                                    <Text fontWeight="semibold" fontSize="sm" color="gray.800">
                                                        이력서 PDF 업로드
                                                    </Text>
                                                    <Text fontSize="xs" color="gray.400" maxW="320px" lineHeight="1.6">
                                                        자소서 또는 이력서 PDF 파일을 업로드하면 AI 요약, 개선점 피드백 및 실시간 챗 기능을 이용하실 수 있습니다.
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
                                                    _hover={{ bg: "gray.50", borderColor: "gray.300", color: "gray.800" }}
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
