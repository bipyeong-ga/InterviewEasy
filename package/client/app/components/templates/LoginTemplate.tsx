import React, { useEffect, useMemo, useState } from "react"
import type MainTemplate from "./MainTemplate"
import { Box, Button, Checkbox, Flex, Float } from "@chakra-ui/react"

const LoginTemplate: React.FC = () => {
    return (
        <Flex align="center" gap="4">
            <Box>이미지 넣을 예정</Box>
            <Box>
                <img src="/public/Logo.png"></img>
                <Box>로그인</Box>
                <Box>당신의 면접을 위한 집사</Box>
                <Box>
                    <input placeholder="아이디"></input>
                </Box>
                <Box>
                    <input placeholder="비밀번호"></input>
                </Box>
                <Box>
                    <a>비밀번호 / 아이디 찾기</a>
                </Box>
                <Checkbox.Root>
                    <Checkbox.HiddenInput />
                    <Checkbox.Control>
                        <Checkbox.Indicator />
                    </Checkbox.Control>
                    <Checkbox.Label>자동 로그인</Checkbox.Label>
                </Checkbox.Root>

                <Button>로그인</Button>
            </Box>
        </Flex>
    )
}

export default LoginTemplate
