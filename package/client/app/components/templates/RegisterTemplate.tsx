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
    Dialog,
    Portal,
    CloseButton,
} from "@chakra-ui/react"

import "../../fonts.css"

type FormValues = {
    name: string
    nickname: string
    email: string
    password: string
    confirmPassword: string
}

type FormErrors = Partial<Record<keyof FormValues, string>>

type ModalType = "terms1" | "terms2" | "terms3" | null

// 약관 데이터 분리
const AGREEMENTS = {
    terms1: {
        title: "서비스 이용약관",
        content: `여러줄 엔터로 가능`,
    },
    terms2: {
        title: "개인정보 처리방침 및 이용동의",
        content: `여러줄 엔터로 가능`,
    },
    terms3: {
        title: "멤버쉽 이용약관",
        content: `여러줄 엔터로 가능`,
    },
} as const

const RegisterTemplate: React.FC = () => {
    const [values, setValues] = useState<FormValues>({
        name: "",
        nickname: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [errors, setErrors] = useState<FormErrors>({})
    const [submitted, setSubmitted] = useState(false)

    const [isAgreementOpen, setAgreementOpen] = useState(false)
    const [modalType, setModalType] = useState<ModalType>(null)

    const openModal = (type: ModalType) => {
        setModalType(type)
        setAgreementOpen(true)
    }

    const validate = (nextValues: FormValues): FormErrors => {
        const nextErrors: FormErrors = {}

        if (!nextValues.name.trim()) {
            nextErrors.name = "이름을 입력해주세요"
        }
        if (!nextValues.nickname.trim()) {
            nextErrors.nickname = "닉네임을 입력해주세요"
        }
        if (!nextValues.email.trim()) {
            nextErrors.email = "이메일을 입력해주세요"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.email)) {
            nextErrors.email = "올바른 이메일 형식이 아닙니다"
        }
        if (!nextValues.password) {
            nextErrors.password = "비밀번호를 입력해주세요"
        } else if (nextValues.password.length < 8) {
            nextErrors.password = "영문 + 숫자 조합 8자 이상으로 입력해주세요"
        }
        if (!nextValues.confirmPassword) {
            nextErrors.confirmPassword = "비밀번호 확인을 입력해주세요"
        } else if (nextValues.confirmPassword !== nextValues.password) {
            nextErrors.confirmPassword = "비밀번호가 일치하지 않아요"
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
            console.log("회원가입 성공", values)
        }
    }

    const current = modalType ? AGREEMENTS[modalType] : null

    return (
        <Flex
            w="100%"
            minH="100vh"
            bg="#f7f8fa"
            direction={{ base: "column", lg: "row" }}
        >
            <Flex
                display={{ base: "none", lg: "flex" }}
                flex={1}
                position="relative"
            >
                <Image
                    src="/images/register.png"
                    alt="bg"
                    position="absolute"
                    inset={0}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
            </Flex>

            <Flex flex={{ base: 1, lg: "0 0 560px" }} align="center" p="12">
                <Box w="100%">
                    <form onSubmit={handleSubmit}>
                        <VStack align="stretch" gap="5">
                            <Box>
                                <Text fontSize="36px" fontWeight="bold">
                                    회원가입
                                </Text>
                                <Text color="gray.600" fontWeight="bold">
                                    취업 준비의 첫 걸음을 함께해요
                                </Text>
                            </Box>

                            <HStack>
                                <Box flex={1}>
                                    <Text>이름</Text>
                                    <Input
                                        placeholder="홍길동"
                                        value={values.name}
                                        onChange={handleChange("name")}
                                    />
                                    {submitted && errors.name && (
                                        <Text color="red.400">
                                            {errors.name}
                                        </Text>
                                    )}
                                </Box>

                                <Box flex={1}>
                                    <Text>닉네임</Text>
                                    <Input
                                        placeholder="박수받는 박쥐"
                                        value={values.nickname}
                                        onChange={handleChange("nickname")}
                                    />
                                    {submitted && errors.nickname && (
                                        <Text color="red.400">
                                            {errors.nickname}
                                        </Text>
                                    )}
                                </Box>
                            </HStack>

                            <Box>
                                <Text>이메일</Text>
                                <Input
                                    placeholder="interviewEasy@gmail.com"
                                    value={values.email}
                                    onChange={handleChange("email")}
                                />
                                {submitted && errors.email && (
                                    <Text color="red.400">{errors.email}</Text>
                                )}
                            </Box>

                            <Box>
                                <Text>비밀번호</Text>
                                <Input
                                    type="password"
                                    value={values.password}
                                    onChange={handleChange("password")}
                                />
                                {submitted && errors.password && (
                                    <Text color="red.400">
                                        {errors.password}
                                    </Text>
                                )}
                            </Box>

                            <Box>
                                <Text>비밀번호 확인</Text>
                                <Input
                                    type="password"
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                />
                                {submitted && errors.confirmPassword && (
                                    <Text color="red.400">
                                        {errors.confirmPassword}
                                    </Text>
                                )}
                            </Box>

                            <VStack align="stretch">
                                <HStack gap={1} align="center">
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control
                                            _checked={{
                                                bg: "#2F6FED",
                                                borderColor: "#2F6FED",
                                                color: "white",
                                            }}
                                        >
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                    </Checkbox.Root>
                                    <Text
                                        fontSize="14px"
                                        textDecoration={"underline"}
                                        color={"#64748B"}
                                        cursor="pointer"
                                        onClick={() => openModal("terms1")}
                                    >
                                        서비스 이용약관
                                    </Text>
                                    <Text fontSize="13px" color={"#64748B"}>
                                        (필수)
                                    </Text>
                                </HStack>{" "}
                                <HStack gap={1} align="center">
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control
                                            _checked={{
                                                bg: "#2F6FED",
                                                borderColor: "#2F6FED",
                                                color: "white",
                                            }}
                                        >
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                    </Checkbox.Root>
                                    <Text
                                        fontSize="14px"
                                        textDecoration={"underline"}
                                        color={"#64748B"}
                                        cursor="pointer"
                                        onClick={() => openModal("terms2")}
                                    >
                                        개인정보 수집 및 이용동의
                                    </Text>
                                    <Text fontSize="13px" color={"#64748B"}>
                                        (필수)
                                    </Text>
                                </HStack>
                                <HStack gap={1} align="center">
                                    <Checkbox.Root>
                                        <Checkbox.HiddenInput />
                                        <Checkbox.Control
                                            _checked={{
                                                bg: "#2F6FED",
                                                borderColor: "#2F6FED",
                                                color: "white",
                                            }}
                                        >
                                            <Checkbox.Indicator />
                                        </Checkbox.Control>
                                    </Checkbox.Root>
                                    <Text
                                        fontSize="14px"
                                        textDecoration={"underline"}
                                        color={"#64748B"}
                                        cursor="pointer"
                                        onClick={() => openModal("terms3")}
                                    >
                                        멤버십 이용약관
                                    </Text>
                                    <Text fontSize="13px" color={"#64748B"}>
                                        (선택)
                                    </Text>
                                </HStack>
                            </VStack>

                            <Button type="submit" bg="blue.500" color="white">
                                회원가입
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>

            <Dialog.Root
                size="cover"
                placement="center"
                motionPreset="slide-in-bottom"
                open={isAgreementOpen}
                onOpenChange={(e) => setAgreementOpen(e.open)}
            >
                <Portal>
                    <Dialog.Backdrop />
                    <Dialog.Positioner>
                        <Dialog.Content>
                            <Dialog.Header>
                                <Dialog.Title>{current?.title}</Dialog.Title>
                                <Dialog.CloseTrigger asChild>
                                    <CloseButton
                                        size="2xl"
                                        onClick={() => setAgreementOpen(false)}
                                    />
                                </Dialog.CloseTrigger>
                            </Dialog.Header>

                            <Dialog.Body maxH="400px" overflowY="auto">
                                <Text whiteSpace="pre-line" lineHeight="1.8">
                                    {current?.content}
                                </Text>
                            </Dialog.Body>
                        </Dialog.Content>
                    </Dialog.Positioner>
                </Portal>
            </Dialog.Root>
        </Flex>
    )
}

export default RegisterTemplate
