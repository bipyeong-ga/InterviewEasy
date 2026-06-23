import React, { useEffect } from "react"
import { useNavigate } from "react-router"

export default function OAuthSuccess() {
    const navigate = useNavigate()

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const token = params.get("token")
        const id = params.get("id")
        const email = params.get("email")
        const name = params.get("name")
        if (token) {
            try {
                localStorage.setItem("token", token)
                if (id || email || name) {
                    const user: Record<string, string> = {}
                    if (id) user.id = id
                    if (email) user.email = email
                    if (name) user.name = name
                    localStorage.setItem("user", JSON.stringify(user))
                }
            } catch (e) {
                console.error("Failed to store token/user", e)
            }
            // remove token and other params from url
            const base = window.location.pathname
            window.history.replaceState({}, "", base)
            navigate("/")
        } else {
            // no token, redirect to login
            navigate("/login")
        }
    }, [navigate])

    return <div>OAuth 로그인 처리 중...</div>
}
