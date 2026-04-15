import jwt, {
    type SignOptions,
    type VerifyOptions,
    type JwtPayload,
    type Secret,
} from "jsonwebtoken"

const rawSecret = process.env.JWT_SECRET
if (!rawSecret) {
    // Fail fast if secret is not configured
    throw new Error("JWT_SECRET is not set. Refuse to start without it.")
}
const SECRET_KEY: Secret = rawSecret
const TOKEN_EXPIRY_SECS = parseInt(
    process.env.JWT_EXPIRES_IN_SECS || `${7 * 24 * 60 * 60}`,
    10,
)
const ISSUER = process.env.JWT_ISSUER || "intervieweasy"

export interface TokenPayload {
    id: number
    email: string
}

export function generateToken(payload: TokenPayload): string {
    const opts: SignOptions = {
        expiresIn: TOKEN_EXPIRY_SECS,
        issuer: ISSUER,
        algorithm: "HS256",
    }
    return jwt.sign(payload as object, SECRET_KEY, opts)
}

export function verifyToken(token: string): TokenPayload | null {
    try {
        const vopts: VerifyOptions = { issuer: ISSUER, algorithms: ["HS256"] }
        const decoded = jwt.verify(token, SECRET_KEY, vopts)
        const payload =
            typeof decoded === "object" && decoded !== null
                ? (decoded as JwtPayload)
                : null
        if (
            !payload ||
            typeof payload.id !== "number" ||
            typeof payload.email !== "string"
        ) {
            return null
        }
        return { id: payload.id, email: payload.email }
    } catch (error) {
        return null
    }
}

export function extractToken(authHeader: string | undefined): string | null {
    if (!authHeader) return null
    const parts = authHeader.split(" ")
    if (parts.length !== 2 || parts[0] !== "Bearer") return null
    return parts[1]
}
