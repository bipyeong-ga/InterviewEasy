import { Router } from "express"
import type { Request, Response } from "express"
import bcrypt from "bcrypt"
import pool from "../db"
import { generateToken } from "../utils/jwt"
import type { LoginRequest, RegisterRequest, AuthResponse } from "../types/User"
import { authMiddleware } from "../middleware/auth"
import rateLimit from "express-rate-limit"

const router = Router()

// Rate limiters to slow down brute-force attempts
const loginLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 5,
    standardHeaders: "draft-7",
    legacyHeaders: false,
})

const registerLimiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    limit: 10,
    standardHeaders: "draft-7",
    legacyHeaders: false,
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

        // Set secure HttpOnly cookie to mitigate XSS token theft
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
