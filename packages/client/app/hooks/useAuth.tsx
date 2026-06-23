import React, { createContext, useContext, useEffect, useState } from "react"

export type User = {
    id?: number
    email?: string
    name?: string
    profile_image_url?: string
}

type AuthContextType = {
    user: User | null
    isLoggedIn: boolean
    loading: boolean
    login: (token: string, userSnapshot?: User) => void
    logout: () => Promise<void>
    refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    const fetchCurrentUser = async (token: string) => {
        try {
            const resp = await fetch("/api/auth/me", {
                headers: { Authorization: `Bearer ${token}` },
            })
            if (!resp.ok) {
                throw new Error("Invalid token")
            }
            const data = await resp.json()
            setUser(data)
            localStorage.setItem("user", JSON.stringify(data))
        } catch (e) {
            console.error("Failed to fetch user details:", e)
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            setUser(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (!token) {
            const rawUser = localStorage.getItem("user")
            if (rawUser) {
                try {
                    setUser(JSON.parse(rawUser))
                } catch {
                    setUser(null)
                }
            }
            setLoading(false)
            return
        }

        fetchCurrentUser(token)
    }, [])

    const login = (token: string, userSnapshot?: User) => {
        localStorage.setItem("token", token)
        if (userSnapshot) {
            setUser(userSnapshot)
            localStorage.setItem("user", JSON.stringify(userSnapshot))
        }
        fetchCurrentUser(token)
    }

    const logout = async () => {
        try {
            await fetch("/api/auth/logout", { method: "POST" })
        } catch (e) {
            console.error("Server logout request failed", e)
        } finally {
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            setUser(null)
        }
    }

    const refreshUser = async () => {
        const token = localStorage.getItem("token")
        if (token) {
            await fetchCurrentUser(token)
        }
    }

    const isLoggedIn = !!user

    return (
        <AuthContext.Provider
            value={{
                user,
                isLoggedIn,
                loading,
                login,
                logout,
                refreshUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context
}
