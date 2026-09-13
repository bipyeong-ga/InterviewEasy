import {
    Box,
    Flex,
    HStack,
    Link,
    Image,
    Input,
    InputGroup,
    IconButton,
    Drawer,
    Button,
    VStack,
    useDisclosure,
    CloseButton,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { FaSearch, FaBars } from "react-icons/fa"
import { useLocation } from "react-router"

import BlockLink from "../atoms/BlockLink"
import AuthButton from "./AuthButton"

export default function Header({
    bg,
    boxShadow,
    borderBottom,
    borderColor,
    ...rest
}: {
    bg?: string
    boxShadow?: string
    borderBottom?: string
    borderColor?: string
    [key: string]: any
}) {
    const location = useLocation()
    const isLandingPage = location.pathname === "/"
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const finalBg =
        bg !== undefined
            ? bg
            : isLandingPage
              ? scrolled
                  ? "bg.panel"
                  : "transparent"
              : "bg.panel"
    const finalShadow =
        boxShadow !== undefined
            ? boxShadow
            : isLandingPage
              ? scrolled
                  ? "sm"
                  : "none"
              : "none"
    const finalBorderBottom =
        borderBottom !== undefined
            ? borderBottom
            : isLandingPage
              ? "none"
              : "1px solid"
    const finalBorderColor =
        borderColor !== undefined
            ? borderColor
            : isLandingPage
              ? "transparent"
              : "border"

    return (
        <Box
            position="fixed"
            top={0}
            left={0}
            w="100%"
            zIndex={1000}
            transition="all 0.25s ease"
            bg={finalBg}
            boxShadow={finalShadow}
            borderBottom={finalBorderBottom}
            borderColor={finalBorderColor}
            backdropFilter={finalBg === "transparent" ? "blur(10px)" : "none"}
            {...rest}
        >
            <Flex
                h="72px"
                w="100%"
                px={{ base: 4, md: 6, lg: 8 }}
                align="center"
                justify="space-between"
            >
                {/* Logo */}
                <Flex align="center">
                    <BlockLink to="/">
                        <Image src="/images/logo.png" alt="Logo" h="30px" />
                    </BlockLink>
                </Flex>

                {/* Desktop Navigation */}
                <HStack gap={10} display={{ base: "none", md: "flex" }}>
                    <BlockLink to="/post">
                        <Link color="fg" fontWeight="bold">
                            채용 공고
                        </Link>
                    </BlockLink>

                    <BlockLink to="/analyze-application">
                        <Link color="fg" fontWeight="bold">
                            자소서 / 이력서
                        </Link>
                    </BlockLink>

                    <BlockLink to="/mock-interview">
                        <Link color="fg" fontWeight="bold">
                            모의 면접
                        </Link>
                    </BlockLink>
                </HStack>

                <Flex align="center" display={{ base: "none", lg: "flex" }}>
                    <InputGroup startElement={<FaSearch color="blue.600" />}>
                        <Input
                            placeholder="면접 Easy"
                            minW="360px"
                            borderRadius="md"
                            borderColor="blue.600"
                            borderWidth={1.5}
                            px={4}
                            _placeholder={{ color: "gray.400" }}
                        />
                    </InputGroup>
                </Flex>

                {/* Desktop Auth */}
                <Flex
                    align="center"
                    gap={3}
                    display={{ base: "none", md: "flex" }}
                >
                    <AuthButton />
                </Flex>

                {/* Mobile Hamburger */}

                {/* Mobile Drawer */}
                <Drawer.Root placement="end">
                    <Drawer.Trigger asChild>
                        <Button
                            variant={"ghost"}
                            display={{ base: "flex", md: "none" }}
                        >
                            <FaBars />
                        </Button>
                    </Drawer.Trigger>
                    <Drawer.Backdrop />

                    <Drawer.Positioner>
                        <Drawer.Content>
                            <Drawer.CloseTrigger asChild>
                                <CloseButton size="sm" />
                            </Drawer.CloseTrigger>

                            <Drawer.Body>
                                <VStack align="stretch" gap={5}>
                                    <BlockLink to="/post">
                                        <Link color="fg" fontWeight="bold">
                                            채용 공고
                                        </Link>
                                    </BlockLink>

                                    <BlockLink to="/analyze-application">
                                        <Link color="fg" fontWeight="bold">
                                            자소서 / 이력서
                                        </Link>
                                    </BlockLink>

                                    <BlockLink to="/mock-interview">
                                        <Link color="fg" fontWeight="bold">
                                            모의 면접
                                        </Link>
                                    </BlockLink>

                                    <HStack pt={4} justify="space-between">
                                        <AuthButton />
                                    </HStack>
                                </VStack>
                            </Drawer.Body>
                        </Drawer.Content>
                    </Drawer.Positioner>
                </Drawer.Root>
            </Flex>
        </Box>
    )
}
