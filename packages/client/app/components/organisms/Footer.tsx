import {
    Box,
    Container,
    VStack,
    HStack,
    Heading,
    Text,
    Grid,
    GridItem,
    Image,
    Link as ChakraLink,
    Spacer,
} from "@chakra-ui/react"
import { Link } from "react-router"

import BlockLink from "../atoms/BlockLink"

export function Footer() {
    const serviceItems = [
        { label: "서비스 소개", path: "/" },
        { label: "공고 확인", path: "/post" },
        { label: "자소서 / 이력서", path: "/analyze-application" },
        { label: "모의 면접", path: "/mock-interview" },
    ]
    const supportItems = [
        { label: "자주 묻는 질문", path: "/about" },
        { label: "문의하기", path: "/blog" },
        { label: "공지사항", path: "/careers" },
    ]
    const legalItems = [
        { label: "이용 약관", path: "/legal/terms" },
        { label: "개인정보 처리방침", path: "/legal/privacy" },
        { label: "마켓팅 수신 동의", path: "/legal/marketing-consent" },
    ]

    return (
        <Box as="footer" py={12} bg={"gray.800"}>
            <Container
                maxW={{
                    base: "container.xl",
                    xl: "container.2xl",
                    "2xl": "full",
                }}
                px={{ base: 4, md: 6, lg: 8, xl: 12, "2xl": 16 }}
            >
                <VStack mb={8} gap={4} align="start">
                    <BlockLink to="https://eivelive.com">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            w="100%"
                            h="100%"
                            maxH={{ base: "40px", md: "50px" }}
                            fetchPriority="low"
                        />
                    </BlockLink>
                </VStack>
                <Grid
                    templateColumns={{
                        base: "1fr",
                        md: "1.5fr 2.5fr",
                    }}
                    gap={8}
                    mb={12}
                >
                    <GridItem>
                        <VStack
                            align="start"
                            gap={1}
                            fontSize="sm"
                            color="gray.400"
                        >
                            <Text>AI 기반 통합 취업 준비 플랫폼.</Text>

                            <Text>공고 탐색부터 자소서 작성,</Text>
                            <Text>AI 모의 면접까지 한 곳에서.</Text>
                        </VStack>
                    </GridItem>
                    <GridItem>
                        <Grid
                            templateColumns={{
                                base: "1fr",
                                md: "repeat(3, 1fr)",
                            }}
                            gap={8}
                        >
                            <GridItem>
                                <VStack align="start" gap={2}>
                                    <Heading
                                        size="sm"
                                        mb={2}
                                        color={"white"}
                                        fontWeight="bold"
                                    >
                                        서비스
                                    </Heading>
                                    {serviceItems.map(({ label, path }) => (
                                        <Link
                                            key={label}
                                            to={path}
                                            style={{
                                                fontSize: "0.875rem",
                                                color: "gray.400",
                                            }}
                                            onMouseEnter={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "underline")
                                            }
                                            onMouseLeave={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "none")
                                            }
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </VStack>
                            </GridItem>

                            <GridItem>
                                <VStack align="start" gap={2}>
                                    <Heading
                                        size="sm"
                                        mb={2}
                                        color={"white"}
                                        fontWeight="bold"
                                    >
                                        지원
                                    </Heading>
                                    {supportItems.map(({ label, path }) => (
                                        <Link
                                            key={label}
                                            to={path}
                                            style={{
                                                fontSize: "0.875rem",
                                                color: "gray.400",
                                            }}
                                            onMouseEnter={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "underline")
                                            }
                                            onMouseLeave={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "none")
                                            }
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </VStack>
                            </GridItem>
                            <GridItem>
                                <VStack align="start" gap={2}>
                                    <Heading
                                        size="sm"
                                        mb={2}
                                        color={"white"}
                                        fontWeight="bold"
                                    >
                                        약관
                                    </Heading>
                                    {legalItems.map(({ label, path }) => (
                                        <Link
                                            key={label}
                                            to={path}
                                            style={{
                                                fontSize: "0.875rem",
                                                color: "gray.400",
                                            }}
                                            onMouseEnter={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "underline")
                                            }
                                            onMouseLeave={(e) =>
                                            (e.currentTarget.style.textDecoration =
                                                "none")
                                            }
                                        >
                                            {label}
                                        </Link>
                                    ))}
                                </VStack>
                            </GridItem>
                        </Grid>
                    </GridItem>
                </Grid>

                <Box
                    borderTopWidth="0.6px"
                    borderColor="gray.600"
                    w="full"
                    mb={6}
                />
                <HStack
                    justify="space-between"
                    align="center"
                    gap={4}
                    w="full"
                    flexWrap={{ base: "wrap", md: "nowrap" }}
                >
                    <Text
                        fontSize="sm"
                        color="gray.600"
                        textAlign={{ base: "center", md: "left" }}
                        w={{ base: "full", md: "auto" }}
                    >
                        Copyright &copy; 비평가 {new Date().getFullYear()}. All
                        Rights Reserved.
                    </Text>

                    <Spacer />
                    <HStack gap={4} display={{ base: "none", md: "flex" }}>
                        {legalItems.map(({ label, path }) => (
                            <ChakraLink
                                key={label}
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="gray.600"
                                _hover={{ color: "blue.600" }}
                                transition="color 0.2s"
                                title={label}
                            >
                                {label}
                            </ChakraLink>
                        ))}
                    </HStack>
                </HStack>
                <HStack
                    gap={6}
                    display={{ base: "flex", md: "none" }}
                    mt={4}
                    justify="center"
                    flexDirection="column"
                    align="center"
                >
                    <HStack gap={4}>
                        {legalItems.map(({ label, path }) => (
                            <ChakraLink
                                key={label}
                                href={path}
                                target="_blank"
                                rel="noopener noreferrer"
                                color="gray.600"
                                _hover={{ color: "blue.600" }}
                                transition="color 0.2s"
                                title={label}
                            >
                                {label}
                            </ChakraLink>
                        ))}
                    </HStack>
                </HStack>
            </Container>
        </Box>
    )
}
