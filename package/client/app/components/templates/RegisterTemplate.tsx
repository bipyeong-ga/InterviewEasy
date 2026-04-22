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
                    src="/images/register.png"
                    alt="logo"
                    position="absolute"
                    inset={0}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                />
            </Flex>

            <Flex
                flex={{ base: 1, lg: "0 0 560px" }}
                justify={{ base: "flex-start", lg: "center" }}
                align={{ base: "stretch", lg: "center" }}
                p={{ base: 4, md: 6, lg: 12 }}
                pt={{ base: 6, md: 6, lg: 12 }}
            >
                <Box w="100%" maxW="560px">
                    <form onSubmit={handleSubmit}>
                        <VStack align="stretch" gap={{ base: 4, md: 5 }}>
                            <Box>
                                <Text
                                    fontSize={{ base: "28px", md: "36px" }}
                                    fontWeight="extrabold"
                                >
                                    회원가입
                                </Text>
                                <Text
                                    color="gray.600"
                                    fontSize={{ base: "14px", md: "15px" }}
                                    fontWeight="bold"
                                >
                                    취업 준비의 첫 걸음을 함께해요
                                </Text>
                            </Box>

                            <HStack
                                gap={{ base: 3, md: 4 }}
                                direction={{ base: "column", md: "row" }}
                            >
                                <Box flex={1}>
                                    <Text mb="5px" fontWeight="medium">
                                        이름
                                    </Text>
                                    <Input
                                        placeholder="홍길동"
                                        size="lg"
                                        value={values.name}
                                        onChange={handleChange("name")}
                                    />
                                    {submitted && errors.name ? (
                                        <Text
                                            mt="4px"
                                            fontSize="13px"
                                            color="red.400"
                                        >
                                            {errors.name}
                                        </Text>
                                    ) : null}
                                </Box>

                                <Box flex={1}>
                                    <Text mb="5px" fontWeight="medium">
                                        닉네임
                                    </Text>
                                    <Input
                                        placeholder="박수받는 박쥐"
                                        size="lg"
                                        value={values.nickname}
                                        onChange={handleChange("nickname")}
                                    />
                                    {submitted && errors.nickname ? (
                                        <Text
                                            mt="4px"
                                            fontSize="13px"
                                            color="red.400"
                                        >
                                            {errors.nickname}
                                        </Text>
                                    ) : null}
                                </Box>
                            </HStack>

                            <Box>
                                <Text mb="5px" fontWeight="medium">
                                    이메일
                                </Text>
                                <Input
                                    placeholder="interviewEasy@gmail.com"
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
                                <Text mb="5px" fontWeight="medium">
                                    비밀번호
                                </Text>
                                <Input
                                    type="password"
                                    size="lg"
                                    value={values.password}
                                    onChange={handleChange("password")}
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

                            <Box>
                                <Text mb="5px" fontWeight="medium">
                                    비밀번호 확인
                                </Text>
                                <Input
                                    type="password"
                                    size="lg"
                                    value={values.confirmPassword}
                                    onChange={handleChange("confirmPassword")}
                                />
                                {submitted && errors.confirmPassword ? (
                                    <Text
                                        mt="4px"
                                        fontSize="13px"
                                        color="red.400"
                                    >
                                        {errors.confirmPassword}
                                    </Text>
                                ) : null}
                            </Box>
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
                                <Checkbox.Label>
                                    이용약관에 동의합니다.
                                </Checkbox.Label>
                            </Checkbox.Root>
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
                                회원가입
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Flex>
        </Flex>
    )
}

export default RegisterTemplate
