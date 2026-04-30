import React, { useState } from "react"
import {
    VStack,
    HStack,
    Button,
    Flex,
    Box,
    Text,
    Input,
    Image,
    Checkbox,
    Center,
    AbsoluteCenter,
} from "@chakra-ui/react"
import { useNavigate } from "react-router"

import BlockLink from "../atoms/BlockLink"

import "../../fonts.css"

type FormValues = {
    name: string
    nickname: string
    email: string
    password: string
    confirmPassword: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const LoginTemplate: React.FC = () => {
    const navigate = useNavigate()
    const [values, setValues] = useState<FormValues>({
        name: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (nextValues: FormValues): FormErrors => {
        const nextErrors: FormErrors = {}

        if (!nextValues.email.trim()) {
            nextErrors.email = "이메일을 입력해주세요"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
            nextErrors.email = "올바른 이메일 형식이 아닙니다"
        }
        if (!nextValues.password) {
            nextErrors.password = "비밀번호를 입력해주세요"
        }

        return nextErrors
    }

    const handleChange =
        (field: keyof FormValues) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            const nextValues = { ...values, [field]: event.target.value }
            setValues(nextValues)
            if (submitted) {
                setErrors(validate(nextValues))
            }
        }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const nextErrors = validate(values)
        setErrors(nextErrors)
        setSubmitted(true)

        if (Object.keys(nextErrors).length === 0) {
            fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: values.email,
                    password: values.password,
                }),
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("로그인 실패")
                    }
                    return response.json()
                })
                .then((data) => {
                    if (!data?.token) {
                        throw new Error("토큰이 응답되지 않았습니다")
                    }

                    localStorage.setItem("token", data.token)
                    console.log("로그인 성공:", data)
                    navigate("/")
                })
                .catch((error) => {
                    console.error("로그인 오류:", error)
                })
        }
    }

    return (
        <Flex
            w="100%"
            minH="100vh"
            bg="#f7f8fa"
            direction={{ base: "column", lg: "row" }}
            pt={{ base: 6, lg: 0 }}
        >
            <Flex
                display={{ base: "none", lg: "flex" }}
                flex={1}
                minH="100vh"
                minW={0}
                overflow="hidden"
                position="relative"
            >
                <Image
                    src="/images/login.png"
                    alt="logo"
                    position="absolute"
                    inset={0}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </Flex>

            <Flex
                flex={1}
                justify={{ base: "flex-start", lg: "center" }}
                align={{ base: "stretch", lg: "center" }}
                p={{ base: 4, md: 6, lg: 12 }}
                pt={{ base: 6, md: 6, lg: 12 }}
                backgroundColor="#F8FAFC"
            >
                <Box w="100%">
                    <form onSubmit={handleSubmit}>
                        <VStack align="stretch" gap={{ base: 4, md: 5 }}>
                            <Box>
                                <Text
                                    fontSize={{ base: "28px", md: "36px" }}
                                    fontWeight="extrabold"
                                >
                                    로그인
                                </Text>
                                <Text
                                    color="gray.600"
                                    fontSize={{ base: "14px", md: "15px" }}
                                    fontWeight="bold"
                                >
                                    다시 만나서 반가워요 !
                                </Text>
                            </Box>
                            <Box marginTop="2%">
                                <Input
                                    placeholder="이메일"
                                    size="lg"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                />
                                {submitted && errors.email ? (
                                    <Text
                                        mt="4px"
                                        fontSize="13px"
                                        color="red.400"
                                    >
                                        {errors.email}
                                    </Text>
                                ) : null}
                            </Box>

                            <Box>
                                <Input
                                    type="password"
                                    size="lg"
                                    value={values.password}
                                    onChange={handleChange("password")}
                                    placeholder="비밀번호"
                                />
                                {submitted && errors.password ? (
                                    <Text
                                        mt="4px"
                                        fontSize="13px"
                                        color="red.400"
                                    >
                                        {errors.password}
                                    </Text>
                                ) : null}
                            </Box>
                            <HStack marginBottom="35px" justify="space-between">
                                <Box>
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control
                                            _checked={{
                                                bg: "#2563EB",
                                                borderColor: "#2563EB",
                                            }}
                                        >
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                        <Checkbox.Label color="#94A3B8">
                                            이메일 고정
                                        </Checkbox.Label>
                                    </Checkbox.Root>
                                </Box>
                                <Box textAlign="right">
                                    <Text color="#94A3B8" fontSize="14px">
                                        <BlockLink to="/">
                                            비밀번호 찾기
                                        </BlockLink>
                                    </Text>
                                </Box>
                            </HStack>
                            <Button
                                type="submit"
                                mt="2"
                                h="54px"
                                bg="#2563EB"
                                color="white"
                                _hover={{ bg: "#1D4ED8" }}
                                borderRadius="14px"
                                fontSize="16px"
                            >
                                로그인
                            </Button>
                            <Box position="relative" w="full" py="4">
                                <Box
                                    borderBottom="1px solid"
                                    borderColor="gray.400"
                                />
                                <AbsoluteCenter
                                    bg="#F8FAFC"
                                    px="4"
                                    color="#64748B"
                                >
                                    또는
                                </AbsoluteCenter>
                            </Box>
                            <Box>
                                <Center>
                                    <VStack w="100%" gap="3">
                                        <Button
                                            mt="2"
                                            h="54px"
                                            bg="Black"
                                            color="white"
                                            borderRadius="14px"
                                            fontSize="16px"
                                            w="100%"
                                        >
                                            <Image
                                                w="22px"
                                                src="/images/apple.png"
                                            ></Image>

                                            <Text> Apple로 로그인</Text>
                                        </Button>
                                        <Button
                                            mt="2"
                                            h="54px"
                                            bg="white"
                                            color="black"
                                            borderRadius="14px"
                                            fontSize="16px"
                                            w="100%"
                                        >
                                            <Box
                                                borderRadius="100px"
                                                backgroundColor="#FFFFFF"
                                                width="40px"
                                                height="40px"
                                            >
                                                <Center h="100%">
                                                    <Image src="/images/google.svg"></Image>
                                                </Center>
                                            </Box>
                                            <Text> Google로 로그인</Text>
                                        </Button>
                                        <Button
                                            mt="2"
                                            h="54px"
                                            bg="#1E2226"
                                            color="white"
                                            borderRadius="14px"
                                            fontSize="16px"
                                            w="100%"
                                        >
                                            <Image
                                                w="30px"
                                                src="/images/github.webp"
                                            ></Image>
                                            <Text> Github로 로그인</Text>
                                        </Button>
                                    </VStack>
                                </Center>
                            </Box>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </Flex>
    )
}

export default LoginTemplate
