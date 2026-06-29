import express from "express"
import multer from "multer"
import { generateRealtimeToken, generateInterviewQuestions, analyzeCoverLetter, analyzeResume } from "../services/openaiService"

const router = express.Router()

// 1. OpenAI Realtime WebRTC용 Ephemeral Token 발급
router.get("/realtime-token", async (req, res, next) => {
    try {
        const token = await generateRealtimeToken()
        res.json({ token })
    } catch (error) {
        next(error)
    }
})

// 2. 면접 질문 생성
router.post("/questions", async (req, res, next) => {
    try {
        const { text } = req.body
        if (!text) {
            return res.status(400).json({ error: "텍스트가 필요합니다." })
        }
        const questions = await generateInterviewQuestions(text)
        res.json({ questions })
    } catch (error) {
        next(error)
    }
})

// 3. 자소서 분석
router.post("/cover-letter/analyze", async (req, res, next) => {
    try {
        const { text } = req.body
        if (!text) {
            return res.status(400).json({ error: "텍스트가 필요합니다." })
        }
        const analysis = await analyzeCoverLetter(text)
        res.json({ analysis })
    } catch (error) {
        next(error)
    }
})

// 4. 이력서 분석
router.post("/resume/analyze", async (req, res, next) => {
    try {
        const { text } = req.body
        if (!text) {
            return res.status(400).json({ error: "텍스트가 필요합니다." })
        }
        const analysis = await analyzeResume(text)
        res.json({ analysis })
    } catch (error) {
        next(error)
    }
})

export default router
