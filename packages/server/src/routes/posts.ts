import { Router } from "express"
import type { Request, Response } from "express"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"

const router = Router()
router.use(authMiddleware)

// 1. Get all posts
router.get("/", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            `SELECT p.*, 
            CASE WHEN pb.user_id IS NOT NULL THEN true ELSE false END as bookmarked
            FROM posts p
            LEFT JOIN post_bookmarks pb ON p.id = pb.post_id AND pb.user_id = $1
            ORDER BY p.id ASC`,
            [userId]
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch posts:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 1.5. Get liked posts for current user
router.get("/liked", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            `SELECT p.*, true as bookmarked
            FROM posts p
            INNER JOIN post_bookmarks pb ON p.id = pb.post_id AND pb.user_id = $1
            ORDER BY pb.created_at DESC`,
            [userId]
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch liked posts:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 2. Get a single post
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const postId = parseInt(req.params.id as string)
        
        const result = await pool.query(
            `SELECT p.*, 
            CASE WHEN pb.user_id IS NOT NULL THEN true ELSE false END as bookmarked
            FROM posts p
            LEFT JOIN post_bookmarks pb ON p.id = pb.post_id AND pb.user_id = $1
            WHERE p.id = $2`,
            [userId, postId]
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Post not found" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Failed to fetch post details:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 3. Toggle bookmark
router.post("/:id/bookmark", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const postId = parseInt(req.params.id as string)
        const { isBookmarked } = req.body

        if (isBookmarked) {
            await pool.query(
                "INSERT INTO post_bookmarks (user_id, post_id) VALUES ($1, $2) ON CONFLICT DO NOTHING",
                [userId, postId]
            )
        } else {
            await pool.query(
                "DELETE FROM post_bookmarks WHERE user_id = $1 AND post_id = $2",
                [userId, postId]
            )
        }

        res.json({ success: true, bookmarked: isBookmarked })
    } catch (error) {
        console.error("Failed to toggle bookmark:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

export default router
