import express from "express"
import multer from "multer"
import {
    generateInterviewQuestionsList,
    transcribeAudio,
    evaluateAnswer,
    generateInterviewReport,
    generateTtsAudio,
    analyzeCoverLetter,
    analyzeResume,
} from "../services/openaiService"

const router = express.Router()
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 },
})

// 1. 구조화된 면접 질문 생성
router.post("/questions", async (req, res, next) => {
    try {
        const { jobs, company, interviewType, resumeText, count, text } =
            req.body
        const questionCount = count !== undefined && count !== null && count !== "" ? Number(count) : 5

        const questions = await generateInterviewQuestionsList({
            jobs: Array.isArray(jobs) ? jobs : jobs ? [jobs] : undefined,
            company,
            interviewType,
            resumeText: resumeText || text,
            count: questionCount,
        })

        res.json({ success: true, questions })
    } catch (error) {
        console.error("Generate questions error:", error)
        res.status(500).json({
            success: false,
            error: "면접 질문 생성에 실패했습니다.",
        })
    }
})

// 2. 답변 오디오 STT 변환 및 실시간 채점 (백그라운드 파이프라인)
router.post(
    "/evaluate-chunk",
    upload.single("audio"),
    async (req, res, next) => {
        try {
            const { questionText, job } = req.body
            let answerText = ""

            // 1. 클라이언트에서 전달된 텍스트가 있으면 우선 사용
            if (req.body.answerText) {
                answerText = req.body.answerText.trim()
            } else if (req.file && req.file.buffer && req.file.buffer.length >= 1000) {
                // 2. 오디오 버퍼가 있으면 Whisper STT 실행
                answerText = await transcribeAudio(
                    req.file.buffer,
                    req.file.originalname || "answer.webm",
                )
            }

            if (!answerText.trim()) {
                return res.json({
                    success: true,
                    answerText: "(답변 없음)",
                    score: 0,
                    feedback:
                        "답변이 제출되지 않았거나 음성이 감지되지 않아 0점으로 평가되었습니다.",
                    strength: "-",
                    improvement:
                        "질문을 확인하고 자신의 생각과 경험을 명확한 목소리로 답변해주세요.",
                    sampleAnswer:
                        "질문의 의도에 맞게 관련 기술 및 프로젝트 경험을 구체적으로 설명하는 것이 좋습니다.",
                })
            }

            const evaluation = await evaluateAnswer({
                questionText: questionText || "면접 질문",
                answerText,
                job,
            })

            res.json({
                success: true,
                answerText,
                ...evaluation,
            })
        } catch (error) {
            console.error("Evaluate chunk error:", error)
            res.status(500).json({
                success: false,
                error: "답변 평가 중 오류가 발생했습니다.",
            })
        }
    },
)

// 3. 종합 면접 리포트 생성
router.post("/report", async (req, res, next) => {
    try {
        const { job, company, results } = req.body

        if (!results || !Array.isArray(results)) {
            return res.status(400).json({
                success: false,
                error: "평가 결과 데이터가 필요합니다.",
            })
        }

        const report = await generateInterviewReport({
            job,
            company,
            results,
        })

        res.json({ success: true, report })
    } catch (error) {
        console.error("Generate report error:", error)
        res.status(500).json({
            success: false,
            error: "종합 리포트 생성에 실패했습니다.",
        })
    }
})

// 4. TTS 음성 생성 (Node.js AI 엔진)
router.post(["/tts", "/generate"], async (req, res, next) => {
    try {
        const prompt = req.body.prompt || req.body.text || ""
        const audioBase64 = await generateTtsAudio(prompt)
        res.json({ success: true, audio_base64: audioBase64 })
    } catch (error) {
        console.error("TTS generation error:", error)
        res.status(500).json({ success: false, error: "TTS 생성 실패" })
    }
})

// 5. 자소서 분석
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

// 6. 이력서 분석
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
