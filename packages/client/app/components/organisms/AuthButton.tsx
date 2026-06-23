import React from "react"
import { HStack, Button, Avatar, Menu, Text, Portal } from "@chakra-ui/react"
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
                <BlockLink to="/register">
                    <Button
                        bg="#2563EB"
                        _hover={{ bg: "#1D4ED8" }}
                        size="xs"
                        borderRadius="md"
                    >
                        회원가입
                    </Button>
                </BlockLink>
                <BlockLink to="/login">
                    <Button variant="outline" size="xs" borderRadius="md">
                        로그인
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
                    <Menu.Content>
                        <Menu.Item
                            value="profile"
                            onClick={() => navigate("/profile")}
                        >
                            {user.name || "프로필"}
                        </Menu.Item>
                        <Menu.Separator />
                        <Menu.Item
                            color="fg.error"
                            _hover={{ bg: "bg.error", color: "fg.error" }}
                            value="logout"
                            onClick={handleLogout}
                        >
                            로그아웃
                        </Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}
