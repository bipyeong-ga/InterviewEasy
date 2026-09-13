import type { Request, Response, NextFunction } from "express"
import { verifyToken, extractToken } from "../utils/jwt"

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: number
                email: string
            }
        }
    }
}

export function authMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    const headerToken = extractToken(req.headers.authorization)
    const cookieToken = (req as any).cookies?.token as string | undefined
    const queryToken = req.query?.token as string | undefined
    const token = headerToken || cookieToken || queryToken || null

    if (!token) {
        return res.status(401).json({ error: "No token provided" })
    }

    const payload = verifyToken(token)

    if (!payload) {
        return res.status(401).json({ error: "Invalid or expired token" })
    }

    req.user = payload
    next()
}
