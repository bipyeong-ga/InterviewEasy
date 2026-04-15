export interface User {
    id: number
    email: string
    password_hash?: string
    name?: string
    nickname?: string
    profile_image_url?: string
    created_at: Date
    updated_at: Date
}

export interface LoginRequest {
    email: string
    password: string
}

export interface RegisterRequest {
    email: string
    password: string
    name?: string
    nickname?: string
}

export interface AuthResponse {
    id: number
    email: string
    name?: string
    nickname?: string
    profile_image_url?: string
    token: string
}
