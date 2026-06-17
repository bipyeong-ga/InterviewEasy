import { Router } from "express"
import type { Request, Response } from "express"
import bcrypt from "bcrypt"
import pool from "../db"
import { generateToken } from "../utils/jwt"
import type { LoginRequest, RegisterRequest, AuthResponse } from "../types/User"
import { authMiddleware } from "../middleware/auth"
import rateLimit from "express-rate-limit"
import crypto from "crypto"

const router = Router()

// Rate limiters to slow down brute-force attempts
const loginLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: (_, res) => {
        res.status(429).json({
            error: "Too many login attempts. Please try again in a minute.",
        })
    },
})

const registerLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-7",
    legacyHeaders: false,
    handler: (_, res) => {
        res.status(429).json({
            error: "Too many registration attempts. Please try again in 10 minutes.",
        })
    },
})

// 회원가입
router.post(
    "/register",
    registerLimiter,
    async (req: Request, res: Response) => {
        try {
            const { email, password, name, nickname } =
                req.body as RegisterRequest

            // 입력값 검증
            if (!email || !password) {
                return res
                    .status(400)
                    .json({ error: "Email and password are required" })
            }

            // 이메일 형식 검증
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: "Invalid email format" })
            }

            // 비밀번호 길이 검증
            if (password.length < 8) {
                return res
                    .status(400)
                    .json({ error: "Password must be at least 8 characters" })
            }

            // Optional: sanitize and bound string lengths to avoid abuse
            const safeName =
                typeof name === "string" ? name.trim().slice(0, 100) : null
            const safeNickname =
                typeof nickname === "string"
                    ? nickname.trim().slice(0, 50)
                    : null

            // 기존 사용자 확인
            const existingUser = await pool.query(
                "SELECT id FROM users WHERE email = $1",
                [email],
            )

            if (existingUser.rows.length > 0) {
                return res.status(409).json({ error: "Email already in use" })
            }

            // 비밀번호 암호화
            const salt = await bcrypt.genSalt(10)
            const password_hash = await bcrypt.hash(password, salt)

            // 사용자 생성
            const result = await pool.query(
                "INSERT INTO users (email, password_hash, name, nickname) VALUES ($1, $2, $3, $4) RETURNING id, email, name, nickname, profile_image_url",
                [email, password_hash, safeName, safeNickname],
            )

            const user = result.rows[0]
            const token = generateToken({ id: user.id, email: user.email })

            const response: AuthResponse = {
                id: user.id,
                email: user.email,
                name: user.name,
                nickname: user.nickname,
                profile_image_url: user.profile_image_url,
                token,
            }

            // Set secure HttpOnly cookie to mitigate XSS token theft
            res.cookie("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === "production",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60 * 1000,
            })

            res.status(201).json(response)
        } catch (error) {
            console.error("Register error:", error)
            res.status(500).json({ error: "Internal server error" })
        }
    },
)

// 로그인
router.post("/login", loginLimiter, async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as LoginRequest

        // 입력값 검증
        if (!email || !password) {
            return res
                .status(400)
                .json({ error: "Email and password are required" })
        }

        // 사용자 조회
        const result = await pool.query(
            "SELECT * FROM users WHERE email = $1",
            [email],
        )

        if (result.rows.length === 0) {
            return res.status(401).json({ error: "Invalid email or password" })
        }

        const user = result.rows[0]

        // 비밀번호 검증
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash,
        )

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" })
        }

        // 토큰 생성
        const token = generateToken({ id: user.id, email: user.email })

        const response: AuthResponse = {
            id: user.id,
            email: user.email,
            name: user.name,
            nickname: user.nickname,
            profile_image_url: user.profile_image_url,
            token,
        }

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.json(response)
    } catch (error) {
        console.error("Login error:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 현재 사용자 정보 조회
router.get("/me", authMiddleware, async (req: Request, res: Response) => {
    try {
        const result = await pool.query(
            "SELECT id, email, name, nickname, profile_image_url FROM users WHERE id = $1",
            [req.user?.id],
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Get user error:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 로그아웃: HttpOnly 쿠키 제거
router.post("/logout", (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
    })
    res.status(204).send()
})

export default router

// --- OAuth social login ---
// Supports: github, google
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"

function getProviderConfig(provider: string) {
    if (provider === "github") {
        return {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
            authorizeUrl: "https://github.com/login/oauth/authorize",
            tokenUrl: "https://github.com/login/oauth/access_token",
            userUrl: "https://api.github.com/user",
            userEmailsUrl: "https://api.github.com/user/emails",
            scope: "read:user user:email",
            redirectPath: "/api/auth/oauth/github/callback",
        }
    }
    if (provider === "google") {
        return {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorizeUrl: "https://accounts.google.com/o/oauth2/v2/auth",
            tokenUrl: "https://oauth2.googleapis.com/token",
            userUrl: "https://www.googleapis.com/oauth2/v2/userinfo",
            scope: "openid email profile",
            redirectPath: "/api/auth/oauth/google/callback",
        }
    }
    return null
}

router.get("/oauth/:provider", (req: Request, res: Response) => {
    const rawProvider = req.params.provider
    const provider = Array.isArray(rawProvider) ? rawProvider[0] : rawProvider
    const cfg = getProviderConfig(provider)
    if (!cfg || !cfg.clientId) {
        return res
            .status(400)
            .json({ error: "Unsupported provider or not configured" })
    }

    const state = crypto.randomBytes(16).toString("hex")
    // store state in cookie for verification
    res.cookie("oauth_state", state, { httpOnly: true, sameSite: "lax" })

    const redirectUri = `${req.protocol}://${req.get("host")}${cfg.redirectPath}`

    if (provider === "github") {
        const params = new URLSearchParams({
            client_id: cfg.clientId,
            redirect_uri: redirectUri,
            scope: cfg.scope,
            state,
        })
        return res.redirect(`${cfg.authorizeUrl}?${params.toString()}`)
    }

    if (provider === "google") {
        const params = new URLSearchParams({
            client_id: cfg.clientId,
            redirect_uri: redirectUri,
            response_type: "code",
            scope: cfg.scope,
            state,
            access_type: "offline",
            prompt: "consent",
        })
        return res.redirect(`${cfg.authorizeUrl}?${params.toString()}`)
    }

    return res.status(400).json({ error: "Unsupported provider" })
})

router.get("/oauth/:provider/callback", async (req: Request, res: Response) => {
    try {
        const rawProvider = req.params.provider
        const provider = Array.isArray(rawProvider)
            ? rawProvider[0]
            : rawProvider
        const { code, state } = req.query as Record<string, string>
        const cfg = getProviderConfig(provider)
        if (!cfg || !cfg.clientId || !cfg.clientSecret) {
            return res
                .status(400)
                .json({ error: "Unsupported provider or not configured" })
        }

        const savedState = req.cookies?.oauth_state
        if (!state || !savedState || state !== savedState) {
            return res.status(400).json({ error: "Invalid OAuth state" })
        }

        // exchange code for token
        let accessToken: string | null = null
        if (provider === "github") {
            const params = new URLSearchParams({
                client_id: cfg.clientId,
                client_secret: cfg.clientSecret,
                code,
                redirect_uri: `${req.protocol}://${req.get("host")}${cfg.redirectPath}`,
            })
            const tokenResp = await fetch(cfg.tokenUrl, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: params.toString(),
            })
            const tokenJson = (await tokenResp.json()) as any
            accessToken = tokenJson?.access_token

            // fetch user
            const userResp = await fetch(cfg.userUrl as string, {
                headers: {
                    Authorization: `token ${accessToken}`,
                    Accept: "application/vnd.github.v3+json",
                },
            })
            const userJson = (await userResp.json()) as any

            // fetch emails to get primary email
            let email = userJson.email
            if (!email) {
                const emailsResp = await fetch(cfg.userEmailsUrl as string, {
                    headers: {
                        Authorization: `token ${accessToken}`,
                        Accept: "application/vnd.github.v3+json",
                    },
                })
                const emailsJson = (await emailsResp.json()) as any
                const primary = Array.isArray(emailsJson)
                    ? emailsJson.find((e: any) => e.primary && e.verified)
                    : null
                email = primary?.email || (emailsJson[0] && emailsJson[0].email)
            }

            if (!email) {
                return res
                    .status(400)
                    .json({ error: "Email not available from provider" })
            }

            const name = userJson.name || userJson.login
            const profile_image_url = userJson.avatar_url

            // upsert user
            const existing = await pool.query(
                "SELECT id FROM users WHERE email = $1",
                [email],
            )
            let userId: number
            if (existing.rows.length > 0) {
                userId = existing.rows[0].id
                await pool.query(
                    "UPDATE users SET name = $1, profile_image_url = $2, updated_at = NOW() WHERE id = $3",
                    [name, profile_image_url, userId],
                )
            } else {
                const randomPassword = crypto.randomBytes(16).toString("hex")
                const salt = await bcrypt.genSalt(10)
                const password_hash = await bcrypt.hash(randomPassword, salt)
                const insert = await pool.query(
                    "INSERT INTO users (email, password_hash, name, profile_image_url) VALUES ($1, $2, $3, $4) RETURNING id, email",
                    [email, password_hash, name, profile_image_url],
                )
                userId = insert.rows[0].id
            }

            const token = generateToken({ id: userId, email })
            return res.redirect(
                `${FRONTEND_URL}/oauth/success?token=${encodeURIComponent(token)}&id=${encodeURIComponent(String(userId))}&email=${encodeURIComponent(String(email))}`,
            )
        }

        if (provider === "google") {
            const params = new URLSearchParams({
                code: code || "",
                client_id: cfg.clientId as string,
                client_secret: cfg.clientSecret as string,
                redirect_uri: `${req.protocol}://${req.get("host")}${cfg.redirectPath}`,
                grant_type: "authorization_code",
            })

            const tokenResp = await fetch(cfg.tokenUrl as string, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: params.toString(),
            })
            const tokenJson = (await tokenResp.json()) as any
            accessToken = tokenJson?.access_token

            if (!accessToken) {
                return res
                    .status(400)
                    .json({ error: "Failed to obtain access token" })
            }

            const userResp = await fetch(cfg.userUrl + "?alt=json", {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            const userJson = (await userResp.json()) as any

            const email = userJson.email
            if (!email) {
                return res
                    .status(400)
                    .json({ error: "Email not available from provider" })
            }
            const name = userJson.name || userJson.email
            const profile_image_url = userJson.picture

            const existing = await pool.query(
                "SELECT id FROM users WHERE email = $1",
                [email],
            )
            let userId: number
            if (existing.rows.length > 0) {
                userId = existing.rows[0].id
                await pool.query(
                    "UPDATE users SET name = $1, profile_image_url = $2, updated_at = NOW() WHERE id = $3",
                    [name, profile_image_url, userId],
                )
            } else {
                const randomPassword = crypto.randomBytes(16).toString("hex")
                const salt = await bcrypt.genSalt(10)
                const password_hash = await bcrypt.hash(randomPassword, salt)
                const insert = await pool.query(
                    "INSERT INTO users (email, password_hash, name, profile_image_url) VALUES ($1, $2, $3, $4) RETURNING id, email",
                    [email, password_hash, name, profile_image_url],
                )
                userId = insert.rows[0].id
            }

            const token = generateToken({ id: userId, email })
            return res.redirect(
                `${FRONTEND_URL}/oauth/success?token=${encodeURIComponent(token)}&id=${encodeURIComponent(String(userId))}&email=${encodeURIComponent(String(email))}`,
            )
        }

        return res.status(400).json({ error: "Unsupported provider" })
    } catch (error) {
        console.error("OAuth callback error:", error)
        return res.status(500).json({ error: "OAuth callback failed" })
    }
})
