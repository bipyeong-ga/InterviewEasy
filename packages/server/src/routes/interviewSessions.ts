import { Router } from "express"
import type { Request, Response } from "express"
import multer from "multer"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"

const router = Router()

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 200 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("video/")) {
            cb(null, true)
        } else {
            cb(new Error("Only video files are allowed"))
        }
    },
})

// 1. 면접 세션 영상 + 챕터 + 리포트 저장
router.post(
    "/",
    authMiddleware,
    upload.single("video"),
    async (req: Request, res: Response) => {
        try {
            const userId = req.user?.id
            if (!req.file) {
                return res.status(400).json({ error: "영상 파일이 필요합니다." })
            }

            let chapters: unknown = []
            let report: unknown = {}
            try {
                chapters = req.body.chapters ? JSON.parse(req.body.chapters) : []
                report = req.body.report ? JSON.parse(req.body.report) : {}
            } catch {
                return res.status(400).json({ error: "chapters/report 형식이 올바르지 않습니다." })
            }

            const result = await pool.query(
                `INSERT INTO interview_sessions (user_id, video_data, video_mime_type, chapters, report_data)
                 VALUES ($1, $2, $3, $4, $5)
                 RETURNING id, created_at`,
                [userId, req.file.buffer, req.file.mimetype, JSON.stringify(chapters), JSON.stringify(report)],
            )

            res.status(201).json({ id: result.rows[0].id, createdAt: result.rows[0].created_at })
        } catch (error) {
            console.error("Failed to save interview session:", error)
            res.status(500).json({ error: "면접 세션 저장에 실패했습니다." })
        }
    },
)

// 2. 내 면접 세션 목록 (영상 바이트 제외 — 마이페이지 목록용)
router.get("/", authMiddleware, async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            `SELECT id, chapters, report_data, created_at
             FROM interview_sessions
             WHERE user_id = $1
             ORDER BY created_at DESC`,
            [userId],
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to list interview sessions:", error)
        res.status(500).json({ error: "면접 세션 목록 조회에 실패했습니다." })
    }
})

// 3. 세션 메타데이터 (챕터 + 리포트, 영상 바이트 제외)
router.get("/:id", authMiddleware, async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const sessionId = parseInt(req.params.id as string)
        const result = await pool.query(
            `SELECT id, chapters, report_data, created_at
             FROM interview_sessions
             WHERE id = $1 AND user_id = $2`,
            [sessionId, userId],
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "세션을 찾을 수 없습니다." })
        }
        res.json(result.rows[0])
    } catch (error) {
        console.error("Failed to fetch interview session:", error)
        res.status(500).json({ error: "면접 세션 조회에 실패했습니다." })
    }
})

// 4. 영상 스트리밍 (Range 요청 지원 — 구간 탐색/건너뛰기에 필요)
router.get("/:id/video", authMiddleware, async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const sessionId = parseInt(req.params.id as string)
        const result = await pool.query(
            `SELECT video_data, video_mime_type
             FROM interview_sessions
             WHERE id = $1 AND user_id = $2`,
            [sessionId, userId],
        )
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "영상을 찾을 수 없습니다." })
        }

        const video: Buffer = result.rows[0].video_data
        const mimeType = result.rows[0].video_mime_type || "video/webm"
        const total = video.length
        const range = req.headers.range

        res.set("Accept-Ranges", "bytes")
        res.set("Cache-Control", "private, max-age=3600")

        if (!range) {
            res.set("Content-Type", mimeType)
            res.set("Content-Length", String(total))
            return res.send(video)
        }

        const match = /bytes=(\d*)-(\d*)/.exec(range)
        const start = match && match[1] ? parseInt(match[1], 10) : 0
        const end = match && match[2] ? parseInt(match[2], 10) : total - 1
        const safeStart = Math.max(0, Math.min(start, total - 1))
        const safeEnd = Math.max(safeStart, Math.min(end, total - 1))

        res.status(206)
        res.set("Content-Range", `bytes ${safeStart}-${safeEnd}/${total}`)
        res.set("Content-Length", String(safeEnd - safeStart + 1))
        res.set("Content-Type", mimeType)
        res.send(video.subarray(safeStart, safeEnd + 1))
    } catch (error) {
        console.error("Failed to stream interview session video:", error)
        res.status(500).json({ error: "영상 스트리밍에 실패했습니다." })
    }
})

export default router
