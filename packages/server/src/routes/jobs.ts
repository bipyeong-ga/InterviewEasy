import { Router } from "express"
import type { Request, Response } from "express"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"

const router = Router()
router.use(authMiddleware)

// 1. Get all liked jobs for current user
router.get("/liked", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            "SELECT * FROM liked_jobs WHERE user_id = $1 ORDER BY created_at DESC",
            [userId]
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch liked jobs:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 2. Like a job
router.post("/like", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const { job_title, company, link, reason } = req.body

        if (!job_title || !company) {
            return res.status(400).json({ error: "job_title and company are required" })
        }

        const result = await pool.query(
            "INSERT INTO liked_jobs (user_id, job_title, company, link, reason) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (user_id, job_title, company) DO NOTHING RETURNING *",
            [userId, job_title, company, link || null, reason || null]
        )

        res.status(201).json({ success: true, likedJob: result.rows[0] })
    } catch (error) {
        console.error("Failed to like job:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 3. Unlike a job
router.delete("/like", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const { job_title, company } = req.body

        if (!job_title || !company) {
            return res.status(400).json({ error: "job_title and company are required" })
        }

        await pool.query(
            "DELETE FROM liked_jobs WHERE user_id = $1 AND job_title = $2 AND company = $3",
            [userId, job_title, company]
        )

        res.json({ success: true })
    } catch (error) {
        console.error("Failed to unlike job:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

export default router
