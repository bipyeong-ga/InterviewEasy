import React, { useState, useRef } from "react"
import {
    Box,
    Flex,
    Text,
    Portal,
    Button,
    HStack,
    VStack,
} from "@chakra-ui/react"
import { FileText, ExternalLink } from "lucide-react"

export interface CitationItem {
    id: number
    title?: string
    filename?: string
    keywords?: string
    published?: string
    objective?: string
    quote?: string
    section?: string
    correspondence?: string
}

interface CitationPopoverProps {
    citationIds: number[]
    allCitations: CitationItem[]
    onViewSource?: (citation: CitationItem) => void
}

export const CitationPopover: React.FC<CitationPopoverProps> = ({
    citationIds,
    allCitations,
    onViewSource,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [activeIdx, setActiveIdx] = useState(0)
    const [popoverPos, setPopoverPos] = useState<{ top: number; left: number }>(
        { top: 0, left: 0 },
    )
    const badgeRef = useRef<HTMLSpanElement>(null)
    const timeoutRef = useRef<any>(null)

    // Filter matching citations
    const matchedCitations = citationIds
        .map((id) => allCitations.find((c) => c.id === id))
        .filter((c): c is CitationItem => Boolean(c))

    if (matchedCitations.length === 0) {
        // Fallback placeholder citation if not found in array
        matchedCitations.push({
            id: citationIds[0] || 1,
            title: "자기소개서 원본",
            filename: "resume_source.pdf",
            keywords: "핵심 역량, 기술 스택, 프로젝트",
            published: "2026. 03. 29",
            objective: "이력서 원본 내용 참조",
            quote: "해당 분석 항목은 업로드하신 이력서 원본의 핵심 내용을 바탕으로 도출되었습니다.",
            section: "이력서 본문",
        })
    }

    const currentCitation = matchedCitations[activeIdx] || matchedCitations[0]

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        if (badgeRef.current) {
            const rect = badgeRef.current.getBoundingClientRect()
            const popoverWidth = 360
            let left = rect.left + window.scrollX - 40
            if (left + popoverWidth > window.innerWidth - 20) {
                left = window.innerWidth - popoverWidth - 20
            }
            if (left < 10) left = 10

            setPopoverPos({
                top: rect.top + window.scrollY - 8,
                left,
            })
        }
        setIsOpen(true)
    }

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 250)
    }

    const handlePopoverMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    const handlePopoverMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false)
        }, 200)
    }

    const handleViewSourceClick = (e: React.MouseEvent) => {
        e.stopPropagation()
        setIsOpen(false)
        if (onViewSource && currentCitation) {
            onViewSource(currentCitation)
        }
    }

    return (
        <span
            ref={badgeRef}
            style={{
                display: "inline-flex",
                alignItems: "center",
                verticalAlign: "middle",
                margin: "0 3px",
                position: "relative",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <HStack
                as="span"
                gap="3px"
                bg="blue.600"
                color="white"
                px="7px"
                py="2px"
                borderRadius="full"
                fontSize="2xs"
                fontWeight="bold"
                cursor="pointer"
                _hover={{
                    bg: "blue.500",
                    transform: "scale(1.08)",
                    shadow: "md",
                }}
                transition="all 0.15s ease"
                onClick={(e) => {
                    e.stopPropagation()
                    if (onViewSource && currentCitation) {
                        onViewSource(currentCitation)
                    }
                }}
            >
                {matchedCitations.map((cit, idx) => (
                    <Box
                        key={cit.id}
                        as="span"
                        px="3px"
                        borderRadius="full"
                        bg={
                            activeIdx === idx && isOpen
                                ? "whiteAlpha.400"
                                : "transparent"
                        }
                        onMouseEnter={(e) => {
                            e.stopPropagation()
                            setActiveIdx(idx)
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                            setActiveIdx(idx)
                            if (onViewSource) {
                                onViewSource(cit)
                            }
                        }}
                    >
                        {cit.id}
                    </Box>
                ))}
            </HStack>

            {isOpen && (
                <Portal>
                    <Box
                        position="absolute"
                        top={`${popoverPos.top}px`}
                        left={`${popoverPos.left}px`}
                        transform="translateY(-100%)"
                        zIndex={9999}
                        w="380px"
                        maxW="90vw"
                        bg="#1E1F22"
                        color="gray.100"
                        borderRadius="xl"
                        shadow="2xl"
                        border="1px solid"
                        borderColor="whiteAlpha.200"
                        p={4}
                        fontSize="xs"
                        animation="fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)"
                        onMouseEnter={handlePopoverMouseEnter}
                        onMouseLeave={handlePopoverMouseLeave}
                    >
                        {/* Header: Document Title / Filename */}
                        <Flex
                            justify="space-between"
                            align="center"
                            borderBottom="1px solid"
                            borderColor="whiteAlpha.100"
                            pb={2.5}
                            mb={3}
                        >
                            <HStack gap={2} overflow="hidden">
                                <Box color="blue.400">
                                    <FileText size={13} />
                                </Box>
                                <Text
                                    fontWeight="bold"
                                    fontSize="sm"
                                    color="white"
                                    truncate
                                >
                                    {currentCitation.filename ||
                                        currentCitation.title ||
                                        "참조 원본 문서"}
                                </Text>
                            </HStack>

                            {/* Multi-citation tabs if multiple */}
                            {matchedCitations.length > 1 && (
                                <HStack gap={1}>
                                    {matchedCitations.map((_, i) => (
                                        <Box
                                            key={i}
                                            cursor="pointer"
                                            px={1.5}
                                            py={0.5}
                                            borderRadius="md"
                                            fontSize="2xs"
                                            fontWeight="bold"
                                            bg={
                                                activeIdx === i
                                                    ? "blue.500"
                                                    : "whiteAlpha.200"
                                            }
                                            color="white"
                                            onClick={() => setActiveIdx(i)}
                                        >
                                            {i + 1}
                                        </Box>
                                    ))}
                                </HStack>
                            )}
                        </Flex>

                        {/* Citation Details */}
                        <VStack align="stretch" gap={2.5} mb={3}>
                            {currentCitation.correspondence && (
                                <Box>
                                    <Text
                                        as="span"
                                        fontWeight="bold"
                                        color="gray.300"
                                    >
                                        Correspondence:{" "}
                                    </Text>
                                    <Text as="span" color="blue.300">
                                        {currentCitation.correspondence}
                                    </Text>
                                </Box>
                            )}

                            {currentCitation.keywords && (
                                <Box>
                                    <Text
                                        as="span"
                                        fontWeight="bold"
                                        color="gray.300"
                                    >
                                        Keywords:{" "}
                                    </Text>
                                    <Text as="span" color="gray.200">
                                        {currentCitation.keywords}
                                    </Text>
                                </Box>
                            )}

                            {currentCitation.published && (
                                <Box>
                                    <Text fontSize="2xs" color="gray.400">
                                        Published {currentCitation.published}
                                    </Text>
                                </Box>
                            )}

                            {currentCitation.objective && (
                                <Box>
                                    <Text
                                        as="span"
                                        fontWeight="bold"
                                        color="gray.300"
                                    >
                                        Objective:{" "}
                                    </Text>
                                    <Text
                                        as="span"
                                        color="gray.300"
                                        lineHeight="1.5"
                                    >
                                        {currentCitation.objective}
                                    </Text>
                                </Box>
                            )}

                            {currentCitation.quote && (
                                <Box
                                    bg="whiteAlpha.100"
                                    borderLeft="3px solid"
                                    borderColor="blue.400"
                                    p={2.5}
                                    borderRadius="md"
                                    mt={1}
                                >
                                    <Text
                                        fontSize="2xs"
                                        fontWeight="semibold"
                                        color="blue.300"
                                        mb={1}
                                    >
                                        [인용 발췌문]
                                    </Text>
                                    <Text
                                        fontSize="xs"
                                        color="gray.200"
                                        lineHeight="1.6"
                                        fontStyle="italic"
                                    >
                                        "{currentCitation.quote}"
                                    </Text>
                                </Box>
                            )}
                        </VStack>

                        {/* Footer: View Source Action */}
                        <Flex
                            borderTop="1px solid"
                            borderColor="whiteAlpha.100"
                            pt={2.5}
                            justify="space-between"
                            align="center"
                        >
                            <Button
                                variant="ghost"
                                size="xs"
                                color="blue.400"
                                p={0}
                                h="auto"
                                _hover={{
                                    color: "blue.300",
                                    textDecoration: "underline",
                                    bg: "transparent",
                                }}
                                onClick={handleViewSourceClick}
                            >
                                <HStack gap={1.5}>
                                    <Text fontWeight="semibold">소스 보기</Text>
                                    <ExternalLink size={10} />
                                </HStack>
                            </Button>

                            {currentCitation.section && (
                                <Text fontSize="2xs" color="gray.500">
                                    섹션: {currentCitation.section}
                                </Text>
                            )}
                        </Flex>
                    </Box>
                </Portal>
            )}
        </span>
    )
}
