import React, { useEffect, useMemo, useState } from "react"
import {
    VStack,
    HStack,
    Checkbox,
    Button,
    Flex,
    Box,
    Image,
    Text,
    Input,
} from "@chakra-ui/react"

import "../../fonts.css"

const RegisterTemplate: React.FC = () => {
    return (
        <Flex w="100%" justify="flex-start" p="10">
            <Box>
                <VStack align="stretch">
                    <Text fontSize="40px" fontWeight="bold">
                        회원가입
                    </Text>

                    <Text>취업 준비의 첫 걸음을 함께해요</Text>

                    <HStack gap="4">
                        <Box flex="1">
                            <Text>이름</Text>
                            <Input />
                        </Box>

                        <Box flex="1">
                            <Text>닉네임</Text>
                            <Input />
                        </Box>
                    </HStack>

                    <Box>
                        <Text>이메일</Text>
                        <Input />
                    </Box>

                    <Box>
                        <Text>비밀번호</Text>
                        <Input />
                    </Box>
                </VStack>
            </Box>
        </Flex>
    )
}

export default RegisterTemplate
