import { Router } from "express"
import type { Request, Response } from "express"
import multer from "multer"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"

const router = Router()

// Configure multer storage to use memory
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true)
        } else {
            cb(new Error("Only images are allowed"))
        }
    }
})

// 1. Update profile (name, nickname, and/or image)
router.put("/profile", authMiddleware, upload.single("profile_image"), async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const { name, nickname } = req.body

        if (!name && !nickname && !req.file) {
            return res.status(400).json({ error: "No data provided to update" })
        }

        const setClauses: string[] = []
        const params: any[] = []

        if (name) {
            params.push(name)
            setClauses.push(`name = $${params.length}`)
        }
        if (nickname) {
            params.push(nickname)
            setClauses.push(`nickname = $${params.length}`)
        }
        if (req.file) {
            const profileImageUrl = `/api/users/${userId}/profile-image?t=${Date.now()}`
            params.push(profileImageUrl)
            setClauses.push(`profile_image_url = $${params.length}`)
            params.push(req.file.buffer)
            setClauses.push(`profile_image = $${params.length}`)
            params.push(req.file.mimetype)
            setClauses.push(`profile_image_type = $${params.length}`)
        }
        setClauses.push("updated_at = CURRENT_TIMESTAMP")

        params.push(userId)
        const query = `
            UPDATE users
            SET ${setClauses.join(", ")}
            WHERE id = $${params.length}
            RETURNING id, email, name, nickname, profile_image_url
        `

        const result = await pool.query(query, params)
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "User not found" })
        }

        res.json({ success: true, user: result.rows[0] })
    } catch (error) {
        console.error("Failed to update profile:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 2. Serve profile image binary
router.get("/:id/profile-image", async (req: Request, res: Response) => {
    try {
        const userId = parseInt(req.params.id as string)
        
        const result = await pool.query(
            "SELECT profile_image, profile_image_type FROM users WHERE id = $1",
            [userId]
        )

        if (result.rows.length === 0 || !result.rows[0].profile_image) {
            return res.status(404).json({ error: "Image not found" })
        }

        const imageBuffer = result.rows[0].profile_image
        const imageType = result.rows[0].profile_image_type || "image/jpeg"

        res.set("Content-Type", imageType)
        res.set("Cache-Control", "public, max-age=31536000") // 1 year cache, invalidation relies on the ?t= query param
        res.send(imageBuffer)
    } catch (error) {
        console.error("Failed to fetch profile image:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

export default router
