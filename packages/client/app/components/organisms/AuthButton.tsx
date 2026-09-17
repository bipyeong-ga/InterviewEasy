import React from "react"
import { Box, HStack, VStack, Button, Avatar, Menu, Text, Portal } from "@chakra-ui/react"
import { Mic, Settings, LogOut } from "lucide-react"
import { useNavigate } from "react-router"
import BlockLink from "../atoms/BlockLink"
import { useAuth } from "../../hooks/useAuth"

export default function AuthButton() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        await logout()
        navigate("/login")
    }

    if (!user) {
        return (
            <HStack gap={3}>
                <BlockLink to="/login">
                    <Button variant="ghost" size="sm" borderRadius="md">
                        로그인
                    </Button>
                </BlockLink>
                <BlockLink to="/register">
                    <Button
                        bg="blue.600"
                        _hover={{ bg: "blue.700" }}
                        size="sm"
                        fontWeight="bold"
                        borderRadius="md"
                        px={4}
                    >
                        무료로 시작하기
                    </Button>
                </BlockLink>
            </HStack>
        )
    }

    return (
        <Menu.Root>
            <Menu.Trigger asChild>
                <Button variant="ghost" p={0} minW={0} borderRadius="full">
                    <Avatar.Root>
                        <Avatar.Fallback name={user.name || user.email} />
                        <Avatar.Image src={user.profile_image_url} />
                    </Avatar.Root>
                </Button>
            </Menu.Trigger>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content minW="220px">
                        <Box px={3} py={2}>
                            <HStack gap={2.5}>
                                <Avatar.Root size="sm">
                                    <Avatar.Fallback name={user.name || user.email} />
                                    <Avatar.Image src={user.profile_image_url} />
                                </Avatar.Root>
                                <VStack align="flex-start" gap={0} minW={0}>
                                    <Text fontWeight="bold" fontSize="sm" truncate>
                                        {user.name || "사용자"}
                                    </Text>
                                    <Text fontSize="xs" color="gray.500" truncate>
                                        {user.email}
                                    </Text>
                                </VStack>
                            </HStack>
                        </Box>
                        <Menu.Separator />
                        <Menu.Item
                            value="profile"
                            onClick={() => navigate("/profile")}
                        >
                            마이페이지
                        </Menu.Item>
                        <Menu.Item
                            value="interview-history"
                            onClick={() => navigate("/interview-records")}
                        >
                            <Mic size={14} />
                            모의면접 기록
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                            value="account-settings"
                            onClick={() => navigate("/profile#account-settings")}
                        >
                            <Settings size={14} />
                            계정/보안 설정
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                            color="fg.error"
                            _hover={{ bg: "bg.error", color: "fg.error" }}
                            value="logout"
                            onClick={handleLogout}
                        >
                            <LogOut size={14} />
                            로그아웃
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}
