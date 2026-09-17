import { Router } from "express"
import type { Request, Response as ExpressResponse } from "express"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"
import multer from "multer"
import { PDFParse } from "pdf-parse"

const router = Router()

// All resume routes require authentication
router.use(authMiddleware)

// 1. Get all resumes for the current user
router.get("/", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            "SELECT id, title, content, raw_text, summary, improvements, recommended_jobs, citations, pdf_name, created_at, updated_at FROM resumes WHERE user_id = $1 ORDER BY order_index ASC, id ASC",
            [userId],
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch resumes:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 2. Get a single resume
router.get("/:id", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        const result = await pool.query(
            "SELECT * FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Failed to fetch resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 3. Reorder resumes (must be before /:id PUT route to avoid conflict)
router.put("/reorder", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const { order } = req.body as {
            order: { id: number; orderIndex: number }[]
        }

        if (!Array.isArray(order)) {
            return res.status(400).json({ error: "Invalid order payload" })
        }

        // We can do this safely in a transaction
        const client = await pool.connect()
        try {
            await client.query("BEGIN")
            for (const item of order) {
                await client.query(
                    "UPDATE resumes SET order_index = $1 WHERE id = $2 AND user_id = $3",
                    [item.orderIndex, item.id, userId],
                )
            }
            await client.query("COMMIT")
            res.status(200).json({ success: true })
        } catch (e) {
            await client.query("ROLLBACK")
            throw e
        } finally {
            client.release()
        }
    } catch (error) {
        console.error("Failed to reorder resumes:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 4. Create a new empty resume
router.post("/", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id

        // Check if the user already has 10 resumes
        const countResult = await pool.query(
            "SELECT COUNT(*) FROM resumes WHERE user_id = $1",
            [userId],
        )
        const count = parseInt(countResult.rows[0].count)
        if (count >= 10) {
            return res.status(400).json({
                error: "자기소개서는 유저당 최대 10개까지만 생성할 수 있습니다.",
            })
        }

        // Find the next available number (e.g. 자기소개서 01, 자기소개서 02) to avoid duplicates
        const existingResumes = await pool.query(
            "SELECT title FROM resumes WHERE user_id = $1",
            [userId],
        )
        const existingTitles = existingResumes.rows.map((r: any) => r.title)
        let nextNum = 1
        while (nextNum <= 10) {
            const candidate = `자기소개서 ${String(nextNum).padStart(2, "0")}`
            if (!existingTitles.includes(candidate)) {
                break
            }
            nextNum++
        }
        const title = `자기소개서 ${String(nextNum).padStart(2, "0")}`

        // Insert new resume
        const result = await pool.query(
            "INSERT INTO resumes (user_id, title, content) VALUES ($1, $2, '') RETURNING *",
            [userId, title],
        )

        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error("Failed to create resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 5. Update a resume
router.put("/:id", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)
        const { title, content } = req.body

        // Verify ownership first
        const checkResult = await pool.query(
            "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const updateResult = await pool.query(
            "UPDATE resumes SET title = COALESCE($1, title), content = COALESCE($2, content), updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
            [title, content, resumeId],
        )

        res.json(updateResult.rows[0])
    } catch (error) {
        console.error("Failed to update resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 5. Delete resume
router.delete("/:id", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        const deleteResult = await pool.query(
            "DELETE FROM resumes WHERE id = $1 AND user_id = $2 RETURNING *",
            [resumeId, userId],
        )

        if (deleteResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        res.json({
            message: "Resume deleted successfully",
            deleted: deleteResult.rows[0],
        })
    } catch (error) {
        console.error("Failed to delete resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// AI Generation & Improvement
router.post("/:id/ai", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)
        const { prompt } = req.body

        if (!prompt || typeof prompt !== "string" || prompt.trim() === "") {
            return res.status(400).json({ error: "Prompt is required" })
        }

        // Verify ownership and get current content
        const resumeResult = await pool.query(
            "SELECT content, title FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )
        if (resumeResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const currentContent = resumeResult.rows[0].content

        const promptText = `
너는 대한민국 최고의 개발자 채용 및 커리어 컨설턴트 AI이다.
구직자가 제공한 요청(프롬프트)과 기존 이력서 내용을 바탕으로 전문적이고 인상적인 자기소개서/이력서 항목(경험 요약 및 핵심 역량)을 작성해줘.

[작성 규칙]
1. 반드시 한국어로 작성해라.
2. 결과물은 글머리 기호(bullet point) 형태의 목록으로만 작성해라. (각 줄은 "-" 로 시작해야 함)
3. 각 항목은 다음 포맷을 철저히 따라야 한다:
   - **[핵심 키워드/주제] ([영문 번역 또는 비유적 키워드]):** [해당 핵심 역량이나 경험에 대한 자세하고 전문적인 설명 및 성과 기술]
4. 전체 항목 개수는 3개에서 5개 사이로 생성해라.
5. 이력서에 어울리는 전문적이고 신뢰감 있는 개발자/기획자 톤앤매너를 유지해라.
6. 마크다운 목록 기호 외에 다른 서론, 결론, 인사말 등(예: "네, 작성해 드리겠습니다" 등)은 절대로 포함하지 마라. 오직 글머리 목록만 반환해라.

기존 내용:
${currentContent || "(없음)"}

구직자의 요청 사항:
${prompt}
`

        const geminiApiKey = process.env.GEMINI_API_KEY
        let generatedText = ""

        if (geminiApiKey) {
            try {
                const response = await fetch(
                    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${geminiApiKey}`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            contents: [
                                {
                                    parts: [
                                        {
                                            text: promptText,
                                        },
                                    ],
                                },
                            ],
                        }),
                    },
                )

                if (!response.ok) {
                    const errBody = await response.text()
                    throw new Error(
                        `Gemini API error: ${response.status} - ${errBody}`,
                    )
                }

                const data = (await response.json()) as any
                generatedText =
                    data.candidates?.[0]?.content?.parts?.[0]?.text || ""
                generatedText = generatedText.trim()
            } catch (apiError) {
                console.error("Error calling Gemini API:", apiError)
                generatedText = generateFallbackResume(prompt)
            }
        } else {
            // Use local fallback if API key is not present
            generatedText = generateFallbackResume(prompt)
        }

        // Update database with generated content
        const updateResult = await pool.query(
            "UPDATE resumes SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *",
            [generatedText, resumeId],
        )

        res.json(updateResult.rows[0])
    } catch (error) {
        console.error("AI generation failed:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// Fallback high-quality mock self-introduction builder
function generateFallbackResume(prompt: string): string {
    const promptLower = prompt.toLowerCase()

    if (
        promptLower.includes("프론트") ||
        promptLower.includes("frontend") ||
        promptLower.includes("react") ||
        promptLower.includes("리액트") ||
        promptLower.includes("뷰") ||
        promptLower.includes("vue")
    ) {
        return `- **진입점 최적화와 결합도 낮추기 (Strengthen Primary Care):** 웹 애플리케이션의 렌더링 성능 지연을 신속히 감지하고 개선합니다. 리액트의 Lazy Loading, 가상화 기법을 도입하여 초기 로딩 속도를 단축하고 컴포넌트 간 책임을 명확히 구분하는 구조를 설계합니다.
- **레거시의 편견과 기술 부채 제거 (Eliminate Stigma):** 무분별한 상태 관리 코드와 비효율적인 구버전 라이브러리 사용을 근절하고 최신 모던 리액트 환경으로의 리팩토링을 주도합니다. 코드 리뷰 문화를 적극적으로 참여해 재사용성이 높은 훅스(Hooks)와 유틸리티를 전파합니다.
- **근본적 기능 회복과 확장성 고려 (Incorporate Rehabilitation):** 예기치 못한 프론트엔드 에러 발생 시 앱이 완전히 멈추지 않도록 Error Boundary와 세분화된 Fallback 화면을 설계합니다. 표면적인 에러 처리에 그치지 않고 핵심 라이프사이클의 결함을 추적 및 해결합니다.`
    }

    if (
        promptLower.includes("백엔드") ||
        promptLower.includes("backend") ||
        promptLower.includes("node") ||
        promptLower.includes("서버") ||
        promptLower.includes("데이터베이스") ||
        promptLower.includes("db")
    ) {
        return `- **API 처리 지연 최적화 및 분산 처리 (Optimize Throughput):** 대용량 트래픽 상황에서도 고성능을 유지할 수 있도록 노드의 비동기 I/O 성능을 튜닝하고 레디스 기반 캐싱 아키텍처를 결합합니다. 병목 쿼리를 탐색하여 인덱스 재설정 및 비정규화 처리를 적용합니다.
- **서비스 격리와 시스템 부채 해소 (Decouple Microservices):** 결합도가 높은 결제 및 회원 도메인을 독립적인 마이크로서비스로 분리하며, 메시지 브로커를 활용한 이벤트 기반 통신 모델을 도입해 한 도메인의 장애가 전체로 전파되지 않도록 설계합니다.
- **데이터 백업 및 실시간 무중단 장애 복구 (Failover & Resilience):** 시스템 가용성을 보장하기 위해 다중 리전 및 Read Replica 분산 구조를 구축합니다. 분산 추적 로깅 시스템을 구축하여 에러 원인을 추적하며, 서킷 브레이커 패턴을 적용해 안정성을 극대화합니다.`
    }

    // Default template (matches image mockup)
    return `- **진입점 최적화와 결합도 낮추기 (Strengthen Primary Care):** 의료 시스템에서 1차 의료가 조기 발견의 핵심 진입점이듯, 소프트웨어에서도 명확한 엔드포인트와 Entry Point 설계가 중요합니다. 시스템 내 복잡한 비즈니스 로직을 서비스 레이어에 효율적으로 통합하고, 사용자나 외부 시스템이 가장 직관적이고 안정적으로 접근할 수 있는 아키텍처를 지향합니다.
- **레거시의 편견과 기술 부채 제거 (Eliminate Stigma):** 시스템 노후화나 특정 기술에 대한 고정관념(Stigma)은 코드의 격리와 품질 저하를 야기합니다. 지속적인 리팩토링과 코드 리뷰, 그리고 문서화를 통해 팀 내의 기술적 장벽을 제거하고, 누구나 쉽게 유지보수할 수 있는 유연한 코드를 작성하고자 노력합니다.
- **근본적 기능 회복과 확장성 고려 (Incorporate Rehabilitation):** 단순히 에러를 임시방편으로 '치료(Fix)'하는 것을 넘어, 시스템의 근본적인 기능(Functioning)과 안정성을 회복하는 재활 관점의 디버깅을 중요하게 생각합니다. 만성적인 성능 저하를 유발하는 병목 구간을 찾아 근본 원인을 해결하고 예방 전략을 세웁니다.`
}

// Multer configuration for memory storage
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB limit
})

// OpenAI API call helper
async function callOpenAI(
    systemPrompt: string,
    userPrompt: string,
    isJson: boolean = false,
    previousMessages: any[] = [],
) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not configured in the environment")
    }

    const messages = [
        { role: "system", content: systemPrompt },
        ...previousMessages.map((msg) => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.message,
        })),
        { role: "user", content: userPrompt },
    ]

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages,
            ...(isJson ? { response_format: { type: "json_object" } } : {}),
        }),
    })

    if (!response.ok) {
        const errText = await response.text()
        throw new Error(`OpenAI API error: ${response.status} - ${errText}`)
    }

    const data = (await response.json()) as any
    return data.choices?.[0]?.message?.content || ""
}

// 7. Upload PDF Resume and extract text & analyze
router.post(
    "/:id/upload",
    upload.single("file"),
    async (req: Request, res: ExpressResponse) => {
        try {
            const userId = req.user?.id
            const resumeId = parseInt(req.params.id as string, 10)

            if (!req.file) {
                return res
                    .status(400)
                    .json({ error: "PDF 파일을 업로드해주세요." })
            }

            // Verify ownership
            const checkResult = await pool.query(
                "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
                [resumeId, userId],
            )
            if (checkResult.rows.length === 0) {
                return res.status(404).json({ error: "Resume not found" })
            }

            // Parse PDF
            let extractedText = ""
            let parser: any = null
            try {
                parser = new PDFParse({ data: req.file.buffer })
                const textResult = await parser.getText()
                extractedText = textResult.text || ""
            } catch (pdfErr) {
                console.error("PDF parsing error:", pdfErr)
                return res
                    .status(400)
                    .json({ error: "PDF 파일을 해석하는 데 실패했습니다." })
            } finally {
                if (parser) {
                    try {
                        await parser.destroy()
                    } catch (destroyErr) {
                        console.error("Failed to destroy parser:", destroyErr)
                    }
                }
            }

            if (!extractedText.trim()) {
                return res.status(400).json({
                    error: "PDF 파일에서 텍스트를 추출하지 못했습니다. 파일에 텍스트가 포함되어 있는지 확인하세요.",
                })
            }

            const apiKey = process.env.OPENAI_API_KEY
            if (!apiKey || apiKey.trim() === "") {
                return res.status(400).json({
                    error: "OPENAI_API_KEY가 설정되지 않았습니다. packages/server/.env 파일에 OpenAI API 키를 입력하고 서버를 재시작해 주세요.",
                })
            }

            let summary = ""
            let improvements = ""
            let recommendedJobs = "[]"
            let citations = "[]"

            const originalName = Buffer.from(
                req.file.originalname,
                "latin1",
            ).toString("utf8")

            if (apiKey && apiKey.trim() !== "") {
                try {
                    const postsResult = await pool.query(
                        "SELECT id, title as job_title, company_name as company, tech_stack FROM posts LIMIT 100",
                    )
                    const postsList = postsResult.rows
                        .map(
                            (p) =>
                                `- [${p.company}] ${p.job_title} (기술스택: ${p.tech_stack.join(", ")})`,
                        )
                        .join("\n")

                    const systemPrompt = `
너는 대한민국 최고의 개발자 채용 및 커리어 컨설턴트 AI이다.
제공된 이력서/자기소개서 본문을 꼼꼼히 분석하여 다음 항목들을 제공해라.

[CRITICAL: 참조(Citations) 및 인용문(Quote) 생성 원칙 - 매우 중요]
1. 인용할 문장(quote)은 반드시 아래 제공된 [이력서 본문]에 실제로 한 글자도 틀리지 않고 정확히 존재하는 실제 문장(Exact Substring)이어야 한다.
2. 절대로 원본에 없는 문장을 임의로 지어내거나, 요약하거나, 문맥을 바꾸어 가짜로 인용하지 마라.
3. 분석 절차:
   - 1단계: 먼저 이력서 본문에서 강점, 프로젝트, 개선이 필요한 근거가 되는 실제 문장들을 검색하여 citations 배열의 quote로 발췌한다.
   - 2단계: 추출한 실제 인용구를 기반으로 요약(summary), 개선할 점(improvements)을 작성하고 각 글머리 끝에 [1], [2] 등의 참조 번호를 연결한다.

[항목별 작성 가이드]
1. 이력서 요약(summary): 인재의 핵심 강점, 주요 스택, 프로젝트 요약을 전문성 있게 작성. (각 항목 끝에 참조한 원본 문장의 번호 [1], [2] 등을 표기할 것)
2. 개선할 점(improvements): 면접에서 아쉬울 수 있는 부분이나 보강이 필요한 내용(수치화, 근거 부족 등)을 지적하고 구체적 개선 조언 제공. (참조한 원본 문장의 번호 [3], [4] 등을 표기할 것)
3. 추천 공고(recommended_jobs): 반드시 아래의 [실제 채용 공고 목록] 안에서만 이 이력서를 가진 지원자에게 가장 적합한 공고를 3~5개 골라 추천해라.
4. 참조 출처(citations): 본문에서 [1], [2], [3] 등으로 인용한 원본 텍스트의 상세 정보를 담은 배열.

[실제 채용 공고 목록]
${postsList}

[규칙]
- 반드시 한국어로 대답해라.
- summary, improvements 응답은 반드시 마크다운 글머리 기호(각 줄이 "-"로 시작) 목록 형태로 작성해라.
- citations의 quote는 본문에 존재하는 실제 문자열을 그대로 복사해서 넣어라.
- 반드시 다음 구조의 JSON 형태로만 응답해라. 다른 서론/설명은 절대 포함하지 마라.

JSON 구조:
{
  "summary": "- **보유 역량 및 스택:** ... [1]\\n- **프로젝트 성과:** ... [2]",
  "improvements": "- **정량적 성과 보강:** ... [3]\\n- **문제 해결 디테일:** ... [4]",
  "recommended_jobs": [
    { "job_title": "프론트엔드 개발자 (React)", "company": "네이버웹툰", "reason": "React 및 성능 최적화 경험이 돋보임" }
  ],
  "citations": [
    {
      "id": 1,
      "title": "핵심 기술 역량",
      "filename": "${originalName}",
      "keywords": "기술 스택, 핵심 역량",
      "published": "2026. 03. 29",
      "objective": "요약 1번 항목의 근거 원문",
      "quote": "이력서 원본에 존재하는 실제 문장",
      "section": "이력서 본문"
    }
  ]
}
`
                    const responseText = await callOpenAI(
                        systemPrompt,
                        extractedText,
                        true,
                    )
                    const parsedResponse = JSON.parse(responseText)
                    summary = parsedResponse.summary || ""
                    improvements = parsedResponse.improvements || ""
                    recommendedJobs = JSON.stringify(
                        parsedResponse.recommended_jobs || [],
                    )
                    const analysisResult = await analyzeResumeText(
                        extractedText,
                        originalName,
                        apiKey,
                    )
                    summary = analysisResult.summary
                    improvements = analysisResult.improvements
                    recommendedJobs = analysisResult.recommendedJobs
                    citations = analysisResult.citations
                } catch (openaiErr: any) {
                    console.error("OpenAI analysis failed:", openaiErr)
                    const fallback = generateMockPDFAnalysis(
                        extractedText,
                        originalName,
                    )
                    summary = fallback.summary
                    improvements = fallback.improvements
                    citations = JSON.stringify(fallback.citations)
                }
            } else {
                const fallback = generateMockPDFAnalysis(
                    extractedText,
                    originalName,
                )
                summary = fallback.summary
                improvements = fallback.improvements
                citations = JSON.stringify(fallback.citations)
            }

            // Update database and clear previous chat history
            await pool.query(
                "DELETE FROM resume_messages WHERE resume_id = $1",
                [resumeId],
            )

            const updateResult = await pool.query(
                "UPDATE resumes SET raw_text = $1, summary = $2, improvements = $3, recommended_jobs = $4, citations = $5, pdf_file = $6, pdf_name = $7, updated_at = CURRENT_TIMESTAMP WHERE id = $8 RETURNING *",
                [
                    extractedText,
                    summary,
                    improvements,
                    recommendedJobs,
                    citations,
                    req.file.buffer,
                    originalName,
                    resumeId,
                ],
            )

            res.json(updateResult.rows[0])
        } catch (error) {
            console.error("Failed to process PDF upload:", error)
            res.status(500).json({ error: "PDF 분석 중 오류가 발생했습니다." })
        }
    },
)

// 7-1. Re-analyze existing resume text with AI
router.post("/:id/reanalyze", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        const resumeResult = await pool.query(
            "SELECT raw_text, pdf_name FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )

        if (resumeResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const rawText = resumeResult.rows[0].raw_text
        const pdfName = resumeResult.rows[0].pdf_name || "자소서 원본"

        if (!rawText || !rawText.trim()) {
            return res.status(400).json({ error: "이력서 원본 텍스트가 없습니다. 먼저 PDF를 업로드해주세요." })
        }

        const apiKey = process.env.OPENAI_API_KEY
        let summary = ""
        let improvements = ""
        let recommendedJobs = "[]"
        let citations = "[]"

        if (apiKey && apiKey.trim() !== "") {
            try {
                const result = await analyzeResumeText(rawText, pdfName, apiKey)
                summary = result.summary
                improvements = result.improvements
                recommendedJobs = result.recommendedJobs
                citations = result.citations
            } catch (err) {
                console.error("Re-analysis failed, fallback to mock:", err)
                const fallback = generateMockPDFAnalysis(rawText, pdfName)
                summary = fallback.summary
                improvements = fallback.improvements
                citations = JSON.stringify(fallback.citations)
            }
        } else {
            const fallback = generateMockPDFAnalysis(rawText, pdfName)
            summary = fallback.summary
            improvements = fallback.improvements
            citations = JSON.stringify(fallback.citations)
        }

        const updateResult = await pool.query(
            "UPDATE resumes SET summary = $1, improvements = $2, recommended_jobs = $3, citations = $4, updated_at = CURRENT_TIMESTAMP WHERE id = $5 RETURNING *",
            [summary, improvements, recommendedJobs, citations, resumeId],
        )

        res.json(updateResult.rows[0])
    } catch (error) {
        console.error("Failed to re-analyze resume:", error)
        res.status(500).json({ error: "재분석 중 오류가 발생했습니다." })
    }
})

// Helper: Common analysis runner with validation & retry
async function analyzeResumeText(
    extractedText: string,
    originalName: string,
    apiKey: string,
) {
    const postsResult = await pool.query(
        "SELECT id, title as job_title, company_name as company, tech_stack FROM posts LIMIT 100",
    )
    const postsList = postsResult.rows
        .map(
            (p) =>
                `- [${p.company}] ${p.job_title} (기술스택: ${p.tech_stack.join(", ")})`,
        )
        .join("\n")

    const systemPrompt = `
너는 대한민국 최고의 개발자 채용 및 커리어 컨설턴트 AI이다.
제공된 이력서/자기소개서 본문을 꼼꼼히 분석하여 다음 항목들을 제공해라.

[CRITICAL: 참조(Citations) 및 인용문(Quote) 생성 원칙 - 매우 중요]
1. 인용할 문장(quote)은 반드시 아래 제공된 [이력서 본문]에 실제로 한 글자도 틀리지 않고 정확히 존재하는 실제 문장(Exact Substring)이어야 한다.
2. 절대로 원본에 없는 문장을 임의로 지어내거나, 요약하거나, 문맥을 바꾸어 가짜로 인용하지 마라.
3. [동일 내용 동일 번호 원칙]: 여러 항목(요약 및 개선점)에서 **동일한 원본 문장을 참조할 때는 반드시 동일한 참조 번호(예: 둘 다 [1])를 재사용**해라. 절대로 같은 문장에 다른 번호를 붙이지 마라.
4. 분석 절차:
   - 1단계: 먼저 이력서 본문에서 핵심 강점, 프로젝트, 개선 근거가 되는 실존 문장들을 찾아 citations 배열에 quote로 등록한다. (중복 문장은 1개의 citation으로 등록)
   - 2단계: 등록한 고유 인용구의 id([1], [2]...)를 바탕으로 summary와 improvements의 각 항목 끝에 표기한다.

[항목별 작성 가이드]
1. 이력서 요약(summary): 인재의 핵심 강점, 주요 스택, 프로젝트 요약을 전문성 있게 작성. (참조한 원본 문장의 번호 [1], [2] 등을 표기)
2. 개선할 점(improvements): 각 문장을 "어떻게 쓰면 더 좋은지, 이 부분을 어떻게 보완해야 할지" 구체적인 첨삭 조언(수치 보강, 트러블슈팅 과정 추가, 기술 선택 근거 명시 등)을 반드시 행동 지침 형태로 작성해라. (참조한 원본 문장의 번호 [1], [2] 등을 표기)
3. 추천 공고(recommended_jobs): 반드시 아래의 [실제 채용 공고 목록] 안에서만 이 이력서를 가진 지원자에게 가장 적합한 공고를 3~5개 골라 추천해라.
4. 참조 출처(citations): 본문에서 인용한 고유한 원본 텍스트 상세 정보를 담은 배열. 각 인용 항목마다 해당 문장을 어떻게 보완하면 좋을지에 대한 1~2문장의 핵심 첨삭 코멘트("feedback")를 반드시 포함해라.

[실제 채용 공고 목록]
${postsList}

[규칙]
- 반드시 한국어로 대답해라.
- summary, improvements 응답은 반드시 마크다운 글머리 기호(각 줄이 "-"로 시작) 목록 형태로 작성해라.
- citations의 quote는 본문에 존재하는 실제 문자열을 그대로 복사해서 넣어라.
- 절대로 본문 내용을 그대로 반복하거나 요약하지 말고, "어떻게 보완해야 하는지" 실질적인 첨삭 가이드를 작성해라.
- 반드시 다음 구조의 JSON 형태로만 응답해라. 다른 서론/설명은 절대 포함하지 마라.

JSON 구조:
{
  "summary": "- **보유 역량 및 스택:** ... [1]\\n- **프로젝트 성과:** ... [2]",
  "improvements": "- **정량적 성과 보강:** ... [1]\\n- **문제 해결 디테일:** ... [3]",
  "recommended_jobs": [
    { "job_title": "프론트엔드 개발자 (React)", "company": "네이버웹툰", "reason": "React 및 성능 최적화 경험이 돋보임" }
  ],
  "citations": [
    {
      "id": 1,
      "title": "핵심 기술 역량",
      "filename": "${originalName}",
      "keywords": "기술 스택, 핵심 역량",
      "published": "2026. 03. 29",
      "objective": "요약 1번 항목의 근거 원문",
      "quote": "이력서 원본에 존재하는 실제 문장",
      "feedback": "이 부분에 구체적인 문제 해결 과정이나 의사결정 근거를 추가하면 더 설득력 있어요.",
      "section": "이력서 본문"
    }
  ]
}
`
    const responseText = await callOpenAI(
        systemPrompt,
        extractedText,
        true,
    )
    const parsedResponse = JSON.parse(responseText)
    const rawSummary = parsedResponse.summary || ""
    const rawImprovements = parsedResponse.improvements || ""
    const recommendedJobs = JSON.stringify(
        parsedResponse.recommended_jobs || [],
    )
    const rawCitations = parsedResponse.citations || []

    const { summary, improvements, citations } = deduplicateAndRemapCitations(
        rawSummary,
        rawImprovements,
        rawCitations,
        extractedText,
        originalName,
    )

    return {
        summary,
        improvements,
        recommendedJobs,
        citations: JSON.stringify(citations),
    }
}

// 8. Get messages for a resume
router.get("/:id/messages", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        // Verify ownership
        const checkResult = await pool.query(
            "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const result = await pool.query(
            "SELECT id, resume_id, sender, message, citations, recommended_jobs, created_at FROM resume_messages WHERE resume_id = $1 ORDER BY id ASC",
            [resumeId],
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch messages:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 9. Send a message to AI assistant
router.post("/:id/messages", async (req: Request, res: ExpressResponse) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)
        const { message } = req.body

        if (!message || typeof message !== "string" || message.trim() === "") {
            return res.status(400).json({ error: "Message is required" })
        }

        // Verify ownership and get resume context
        const resumeResult = await pool.query(
            "SELECT raw_text, title, pdf_name, citations FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId],
        )
        if (resumeResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const rawText = resumeResult.rows[0].raw_text || ""
        const pdfName = resumeResult.rows[0].pdf_name || "자소서 원본"

        // Fetch all job postings from posts table so AI can search the entire database
        const postsResult = await pool.query(
            "SELECT id, title as job_title, company_name as company, company_logo, location, district, job_category, tech_stack, experience, salary, deadline, description, responsibilities, requirements, preferred_requirements FROM posts ORDER BY id ASC"
        )
        const availablePosts = postsResult.rows

        // Fetch previous chat history
        const historyResult = await pool.query(
            "SELECT sender, message FROM resume_messages WHERE resume_id = $1 ORDER BY id ASC",
            [resumeId],
        )
        const history = historyResult.rows

        // Save User Message
        const userMsgResult = await pool.query(
            "INSERT INTO resume_messages (resume_id, sender, message) VALUES ($1, 'user', $2) RETURNING *",
            [resumeId, message],
        )

        const apiKey = process.env.OPENAI_API_KEY
        let aiResponseText = ""
        let messageCitations: any[] = []
        let messageRecommendedJobs: any[] = []

        if (apiKey && apiKey.trim() !== "") {
            try {
                const systemPrompt = `
너는 사용자의 이력서/자기소개서 기반 질의응답 및 채용 공고 추천을 성심성의껏 도와주는 전문 취업 코칭 AI 어시스턴트이다.
아래에 제공된 [이력서 본문]과 [실제 채용 공고 목록]에 철저히 기반하여 사실에 입각해 친절하고 구체적으로 사용자의 질문에 한국어로 대답해라.

[CRITICAL: 채용 공고 추천(recommended_jobs) 원칙]
1. 사용자가 채용 공고 추천, 적합한 직무/기업 추천을 요청한 경우:
   - 반드시 아래의 [실제 채용 공고 목록] 안에서만 이력서의 기술 스택 및 경력과 가장 적합한 공고를 최대 5개 골라 recommended_jobs에 담아라.
   - 각 추천 항목은 { "id": number, "company": string, "job_title": string, "location": string, "district": string, "tech_stack": string[], "reason": string, "company_logo": string } 형식이어야 한다.
   - reason에는 이력서의 어떤 역량/경험 때문에 이 공고를 추천하는지 1~2문장으로 명확히 서술해라.
   - [실제 채용 공고 목록]이 비어있거나, 이력서와 부합하는 공고가 전혀 없다면 recommended_jobs는 빈 배열 []로 설정하고, answer에 현재 부합하는 공고가 없음을 명확히 안내해라.
   - [실제 채용 공고 목록]에 없는 가짜 기업이나 공고를 지어내는 것은 엄격히 금지된다.
2. 사용자가 공고 추천과 무관한 일반 질문(면접 대비, 이력서 첨삭 등)을 한 경우:
   - recommended_jobs는 빈 배열 []로 반환해라.

[CRITICAL: 참조(Citations) 및 인용문(Quote) 생성 원칙 - 매우 중요]
1. citations의 quote는 반드시 아래 [이력서 본문]에 실제로 존재하는 문장을 한 글자도 바꾸지 않고 그대로(Exact Substring) 복사하여 작성해야 한다.
2. 본문에 없는 내용을 지어내어 인용하거나 요약/변형한 가짜 quote를 만드는 것은 엄격히 금지된다.
3. 동일한 문장을 인용할 때는 동일한 참조 번호(예: [1])를 재사용해라.
4. 먼저 질문과 관련된 원본 문장을 quote로 발췌하여 citations에 등록하고, 답변(answer) 작성 시 해당 참조 번호 [1], [2]를 문장 뒤에 명시해라.

JSON 형식으로 응답해라:
{
  "answer": "답변 내용 (참조 번호 [1], [2] 포함)",
  "citations": [
    {
      "id": 1,
      "title": "관련 원본 내용",
      "filename": "${pdfName}",
      "keywords": "키워드1, 키워드2",
      "published": "2026. 03. 29",
      "objective": "답변의 근거가 되는 원문 발췌",
      "quote": "이력서 본문에 존재하는 실제 문장",
      "section": "이력서 본문"
    }
  ],
  "recommended_jobs": [
    {
      "id": 1,
      "company": "회사명",
      "job_title": "공고 제목",
      "location": "서울",
      "district": "강남구",
      "tech_stack": ["React", "TypeScript"],
      "reason": "추천 사유",
      "company_logo": "로고 URL"
    }
  ]
}

[이력서 본문]
${rawText}

[실제 채용 공고 목록]
${JSON.stringify(availablePosts, null, 2)}
`
                const rawJson = await callOpenAI(
                    systemPrompt,
                    message,
                    true,
                    history,
                )
                const parsed = JSON.parse(rawJson)
                const rawAnswer = parsed.answer || ""
                const rawCits = parsed.citations || []
                let rawJobs = Array.isArray(parsed.recommended_jobs) ? parsed.recommended_jobs : []
                
                // Enforce maximum 5 jobs & validate against availablePosts
                rawJobs = rawJobs.slice(0, 5).map((job: any) => {
                    const matched = availablePosts.find((p: any) => p.id === job.id || (p.job_title === job.job_title && p.company === job.company))
                    return {
                        id: matched ? matched.id : job.id,
                        company: matched ? matched.company : job.company,
                        job_title: matched ? matched.job_title : job.job_title,
                        company_logo: matched ? matched.company_logo : (job.company_logo || ""),
                        location: matched ? matched.location : (job.location || ""),
                        district: matched ? matched.district : (job.district || ""),
                        tech_stack: matched ? (Array.isArray(matched.tech_stack) ? matched.tech_stack : JSON.parse(matched.tech_stack || "[]")) : (job.tech_stack || []),
                        reason: job.reason || "이력서의 직무 역량 및 프로젝트 경험과 일치하여 추천합니다.",
                    }
                })

                const remapped = deduplicateAndRemapMessage(
                    rawAnswer,
                    rawCits,
                    rawText,
                    pdfName,
                )
                aiResponseText = remapped.answer
                messageCitations = remapped.citations
                messageRecommendedJobs = rawJobs
            } catch (openaiErr: any) {
                console.error("OpenAI Q&A failed:", openaiErr)
                const mock = generateMockQA(message, rawText, pdfName, availablePosts)
                aiResponseText = mock.answer
                messageCitations = mock.citations
                messageRecommendedJobs = mock.recommended_jobs || []
            }
        } else {
            const mock = generateMockQA(message, rawText, pdfName, availablePosts)
            aiResponseText = mock.answer
            messageCitations = mock.citations
            messageRecommendedJobs = mock.recommended_jobs || []
        }

        // Save Assistant Message
        const aiMsgResult = await pool.query(
            "INSERT INTO resume_messages (resume_id, sender, message, citations, recommended_jobs) VALUES ($1, 'assistant', $2, $3, $4) RETURNING *",
            [resumeId, aiResponseText, JSON.stringify(messageCitations), JSON.stringify(messageRecommendedJobs)],
        )

        res.json({
            userMessage: userMsgResult.rows[0],
            assistantMessage: aiMsgResult.rows[0],
        })
    } catch (error) {
        console.error("Q&A failed:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// Helper: Extract valid sentences from raw text
function extractCleanSentences(sourceText: string): string[] {
    if (!sourceText) return []
    const lines = sourceText
        .split(/[\r\n]+/)
        .map((l) => l.trim())
        .filter((l) => l.length >= 8)

    const sentences: string[] = []
    for (const line of lines) {
        const parts = line
            .split(/(?<=[.?!])\s+/)
            .map((s) => s.trim())
            .filter((s) => s.length >= 8)
        if (parts.length > 0) {
            sentences.push(...parts)
        } else if (line.length >= 8) {
            sentences.push(line)
        }
    }
    return sentences
}

// Helper: Validate and align citations with actual source text
function validateAndAlignCitations(
    citations: any[],
    sourceText: string,
    filename: string = "자소서 원본",
): any[] {
    if (!Array.isArray(citations) || citations.length === 0 || !sourceText) {
        return citations || []
    }

    const sentences = extractCleanSentences(sourceText)

    return citations.map((cit, index) => {
        const id = cit.id || index + 1
        let quote = (cit.quote || "").trim()

        // 1. Exact match
        if (quote && sourceText.includes(quote)) {
            return {
                ...cit,
                id,
                filename: cit.filename || filename,
                published: cit.published || "2026. 03. 29",
            }
        }

        // 2. Match with normalized whitespace
        const normalizedSource = sourceText.replace(/\s+/g, " ")
        const normalizedQuote = quote.replace(/\s+/g, " ")
        if (normalizedQuote && normalizedSource.includes(normalizedQuote)) {
            // Find in actual sourceText to get verbatim substring
            for (const s of sentences) {
                if (s.replace(/\s+/g, " ").includes(normalizedQuote)) {
                    quote = s
                    break
                }
            }
            return {
                ...cit,
                id,
                quote,
                filename: cit.filename || filename,
                published: cit.published || "2026. 03. 29",
            }
        }

        // 3. Search best matching real sentence using keywords
        const searchWords = `${quote} ${cit.keywords || ""} ${cit.title || ""}`
            .replace(/[^\w가-힣\s]/g, " ")
            .split(/\s+/)
            .filter((w) => w.length >= 2)

        let bestSentence = ""
        let maxMatchCount = 0

        for (const sentence of sentences) {
            let matchScore = 0
            for (const word of searchWords) {
                if (sentence.includes(word)) {
                    matchScore += word.length
                }
            }
            if (matchScore > maxMatchCount) {
                maxMatchCount = matchScore
                bestSentence = sentence
            }
        }

        if (bestSentence && maxMatchCount > 2) {
            quote = bestSentence
        } else if (sentences.length > 0) {
            // Fallback to real sentence from sourceText
            quote = sentences[index % sentences.length]
        }

        return {
            ...cit,
            id,
            quote,
            filename: cit.filename || filename,
            published: cit.published || "2026. 03. 29",
        }
    })
}

// Helper: Deduplicate citations by quote and remap [oldId] tags to unified newId
function deduplicateAndRemapCitations(
    summary: string,
    improvements: string,
    rawCitations: any[],
    sourceText: string,
    filename: string,
): { summary: string; improvements: string; citations: any[] } {
    const validated = validateAndAlignCitations(rawCitations, sourceText, filename)

    const uniqueMap = new Map<string, any>()
    const oldIdToNewId = new Map<number, number>()
    let nextId = 1

    for (const cit of validated) {
        const quoteKey = (cit.quote || "").trim().toLowerCase().replace(/\s+/g, " ")
        if (!quoteKey) continue

        if (uniqueMap.has(quoteKey)) {
            const existing = uniqueMap.get(quoteKey)!
            oldIdToNewId.set(cit.id, existing.id)
        } else {
            const newCit = {
                ...cit,
                id: nextId,
            }
            uniqueMap.set(quoteKey, newCit)
            oldIdToNewId.set(cit.id, nextId)
            nextId++
        }
    }

    const finalCitations = Array.from(uniqueMap.values())

    const remapString = (str: string) => {
        if (!str) return ""
        return str.replace(/\[(\d+)\]/g, (match, p1) => {
            const oldId = parseInt(p1, 10)
            const mapped = oldIdToNewId.get(oldId)
            return mapped !== undefined ? `[${mapped}]` : match
        })
    }

    return {
        summary: remapString(summary),
        improvements: remapString(improvements),
        citations: finalCitations,
    }
}

// Helper: Deduplicate citations for single message and remap [oldId] tags
function deduplicateAndRemapMessage(
    answer: string,
    rawCitations: any[],
    sourceText: string,
    filename: string,
): { answer: string; citations: any[] } {
    const validated = validateAndAlignCitations(rawCitations, sourceText, filename)

    const uniqueMap = new Map<string, any>()
    const oldIdToNewId = new Map<number, number>()
    let nextId = 1

    for (const cit of validated) {
        const quoteKey = (cit.quote || "").trim().toLowerCase().replace(/\s+/g, " ")
        if (!quoteKey) continue

        if (uniqueMap.has(quoteKey)) {
            const existing = uniqueMap.get(quoteKey)!
            oldIdToNewId.set(cit.id, existing.id)
        } else {
            const newCit = {
                ...cit,
                id: nextId,
            }
            uniqueMap.set(quoteKey, newCit)
            oldIdToNewId.set(cit.id, nextId)
            nextId++
        }
    }

    const finalCitations = Array.from(uniqueMap.values())

    const finalAnswer = answer.replace(/\[(\d+)\]/g, (match, p1) => {
        const oldId = parseInt(p1, 10)
        const mapped = oldIdToNewId.get(oldId)
        return mapped !== undefined ? `[${mapped}]` : match
    })

    return {
        answer: finalAnswer,
        citations: finalCitations,
    }
}

// Helper mock functions: Dynamically extract real sentences from sourceText
function generateMockPDFAnalysis(
    text: string,
    filename: string = "eplasty16e15.pdf",
) {
    const sentences = extractCleanSentences(text)
    const quote1 =
        sentences[0] ||
        "웹 애플리케이션의 렌더링 성능 지연을 신속히 감지하고 개선합니다."
    const quote2 =
        sentences[Math.min(1, sentences.length - 1)] ||
        "무분별한 상태 관리 코드와 비효율적인 구버전 라이브러리 사용을 근절합니다."
    const quote3 =
        sentences[Math.min(2, sentences.length - 1)] ||
        "예기치 못한 프론트엔드 에러 발생 시 앱이 완전히 멈추지 않도록 Error Boundary를 설계합니다."

    return {
        summary: `- **보유 역량 및 경험 요약:** 본문에 기술된 프로젝트 및 문제 해결 경험을 토대로 높은 기술적 이해도를 보여줍니다. [1]
- **주요 업무 및 성과:** 사용자 관점의 서비스 개선과 코드 품질 향상에 주도적으로 기여했습니다. [2]
- **인재 강점:** 시스템 안정성과 효율적인 아키텍처 설계를 지향하며 협업 능력을 갖추고 있습니다. [3]`,
        improvements: `- **정량적 성과 지표 보강:** 서술된 프로젝트 성과에 구체적인 수치(개선율, 처리 시간 등)를 추가하면 설득력이 더욱 높아집니다. [1]
- **트러블슈팅 세부 과정 명시:** 발생했던 문제 상황과 이를 해결하기 위한 기술적 의사결정 과정을 단계별로 서술하세요. [2]
- **팀 협업 및 기여도 구체화:** 협업 과정에서 본인이 주도한 역할과 동료들에게 미친 긍정적 영향을 강조해보세요. [3]`,
        citations: [
            {
                id: 1,
                title: "핵심 역량 및 경험 발췌",
                filename,
                keywords: "핵심 역량, 기술 경험",
                published: "2026. 03. 29",
                objective: "이력서 요약 1번 항목의 근거 원문",
                quote: quote1,
                feedback: "서술된 프로젝트 성과에 구체적인 수치(개선율, 처리 시간 등)를 추가하면 설득력이 더욱 높아집니다.",
                section: "이력서 본문",
            },
            {
                id: 2,
                title: "주요 성과 및 개선 경험",
                filename,
                keywords: "프로젝트 성과, 최적화",
                published: "2026. 03. 29",
                objective: "이력서 요약 2번 항목의 근거 원문",
                quote: quote2,
                feedback: "발생했던 문제 상황과 이를 해결하기 위한 기술적 의사결정 과정을 단계별로 서술해 보세요.",
                section: "이력서 본문",
            },
            {
                id: 3,
                title: "문제 해결 및 안정성",
                filename,
                keywords: "트러블슈팅, 아키텍처",
                published: "2026. 03. 29",
                objective: "이력서 요약 3번 항목의 근거 원문",
                quote: quote3,
                feedback: "협업 과정에서 본인이 주도한 역할과 동료들에게 미친 긍정적 영향을 구체화해 보세요.",
                section: "이력서 본문",
            },
        ],
    }
}

function generateMockQA(
    userMessage: string,
    resumeText: string,
    filename: string = "자소서 원본",
    availablePosts: any[] = [],
): { answer: string; citations: any[]; recommended_jobs?: any[] } {
    const sentences = extractCleanSentences(resumeText)
    const quote1 =
        sentences[0] ||
        "웹 애플리케이션의 렌더링 성능 지연을 신속히 감지하고 개선합니다."
    const quote2 =
        sentences[Math.min(1, sentences.length - 1)] ||
        "무분별한 상태 관리 코드와 비효율적인 구버전 라이브러리 사용을 근절합니다."
    const quote3 =
        sentences[Math.min(2, sentences.length - 1)] ||
        "예기치 못한 프론트엔드 에러 발생 시 앱이 완전히 멈추지 않도록 Error Boundary를 설계합니다."

    const msg = userMessage.toLowerCase()

    if (
        msg.includes("공고") ||
        msg.includes("추천") ||
        msg.includes("채용") ||
        msg.includes("일자리") ||
        msg.includes("포지션")
    ) {
        if (!availablePosts || availablePosts.length === 0) {
            return {
                answer: `현재 등록된 채용 공고 중 이력서와 일치하는 공고를 찾을 수 없습니다. [1]\n\n새로운 채용 공고가 등록되면 다시 추천을 요청해 주세요!`,
                citations: [
                    {
                        id: 1,
                        title: "이력서 직무 역량",
                        filename,
                        keywords: "공고 추천, 직무 매칭",
                        published: "2026. 03. 29",
                        objective: "공고 추천 매칭 기준",
                        quote: quote1,
                        section: "이력서 본문",
                    },
                ],
                recommended_jobs: [],
            }
        }

        const lowerResume = resumeText.toLowerCase()
        const scoredPosts = availablePosts.map((post) => {
            let score = 0
            const techList: string[] = Array.isArray(post.tech_stack)
                ? post.tech_stack
                : typeof post.tech_stack === "string"
                ? JSON.parse(post.tech_stack || "[]")
                : []
            for (const t of techList) {
                if (lowerResume.includes(t.toLowerCase())) score += 3
            }
            if (post.job_category && lowerResume.includes(post.job_category.toLowerCase())) score += 1
            if (post.job_title && lowerResume.includes(post.job_title.toLowerCase())) score += 1
            if (post.description && lowerResume.includes(post.description.slice(0, 30).toLowerCase())) score += 1
            return { post, score, techList }
        })

        // Sort by score descending and take up to 5 posts
        scoredPosts.sort((a, b) => b.score - a.score)
        const top5 = scoredPosts.slice(0, 5)

        const topPosts = top5.map((item) => {
            const p = item.post
            const techList = item.techList
            return {
                id: p.id,
                company: p.company || p.company_name,
                job_title: p.job_title || p.title,
                company_logo: p.company_logo || "",
                location: p.location || "서울",
                district: p.district || "",
                tech_stack: techList,
                reason: `이력서에 명시된 핵심 역량(${techList.slice(0, 3).join(", ") || "직무 역량"}) 및 프로젝트 수행 경험이 본 포지션의 자격 요건과 부합하여 추천합니다.`,
            }
        })

        return {
            answer: `작성해주신 이력서 본문 [1]의 기술 스택 및 실무 경험을 바탕으로 가장 적합한 채용 공고 **${topPosts.length}개**를 추천해 드립니다.\n\n아래 추천 공고 카드를 클릭하여 상세 요건과 혜택을 확인해 보세요!`,
            citations: [
                {
                    id: 1,
                    title: "공고 추천 기준 원문",
                    filename,
                    keywords: "기술 역량, 프로젝트 경험",
                    published: "2026. 03. 29",
                    objective: "채용 공고 매칭 출처",
                    quote: quote1,
                    section: "이력서 본문",
                },
            ],
            recommended_jobs: topPosts,
        }
    }

    if (
        msg.includes("면접") ||
        msg.includes("질문") ||
        msg.includes("면접관")
    ) {
        return {
            answer: `작성해주신 이력서를 기반으로 면접관이 던질 확률이 높은 대표적인 예상 질문 3가지입니다.

1. **"해당 경험을 수행하시면서 직면했던 가장 큰 기술적 난제와 해결 방법은 무엇이었나요?"** [1]
   - 본문에 기술된 주요 프로젝트 내용과 연관된 질문입니다. 구체적인 해결 과정과 배운 점을 답변하시면 좋습니다.

2. **"기존 구조나 레거시 코드를 개선할 때 어떤 기준으로 우선순위를 정하셨나요?"** [2]
   - 성과 개선 및 아키텍처 의사결정 과정에 대한 질문으로, 본인만의 명확한 기술 기준을 어필하세요.

3. **"예외 상황이나 장애 발생 시 어떤 대비책을 마련하셨나요?"** [3]
   - 시스템 안정성과 에러 핸들링 경험에 대한 질문으로, 사용자 경험을 지키기 위한 노력을 강조하세요.`,
            citations: [
                {
                    id: 1,
                    title: "면접 예상 질문 1번 근거",
                    filename,
                    keywords: "핵심 프로젝트, 기술 경험",
                    published: "2026. 03. 29",
                    objective: "면접 예상 질문 1번 출처",
                    quote: quote1,
                    section: "이력서 본문",
                },
                {
                    id: 2,
                    title: "면접 예상 질문 2번 근거",
                    filename,
                    keywords: "성과 개선, 우선순위",
                    published: "2026. 03. 29",
                    objective: "면접 예상 질문 2번 출처",
                    quote: quote2,
                    section: "이력서 본문",
                },
                {
                    id: 3,
                    title: "면접 예상 질문 3번 근거",
                    filename,
                    keywords: "안정성, 예외 처리",
                    published: "2026. 03. 29",
                    objective: "면접 예상 질문 3번 출처",
                    quote: quote3,
                    section: "이력서 본문",
                },
            ],
        }
    }

    if (msg.includes("강점") || msg.includes("역량") || msg.includes("어필")) {
        return {
            answer: `이력서 텍스트를 분석했을 때 인사담당자에게 가장 매력적으로 다가갈 수 있는 핵심 강점은 **'실제 문제 해결 중심의 실무 추진력과 기술적 주도성'**입니다. [1]

- 서술된 경험 전반에서 능동적으로 문제를 파악하고 대안을 찾으려는 노력이 돋보입니다. [1]
- 본문에 기록된 프로젝트 개선 내역을 바탕으로 실질적인 서비스 기여도를 증명할 수 있습니다. [2]
- 시스템 가용성과 안정성을 고려하는 탄탄한 엔지니어링 마인드가 강점입니다. [3]`,
            citations: [
                {
                    id: 1,
                    title: "핵심 강점 분석 근거",
                    filename,
                    keywords: "문제 해결, 실무 역량",
                    published: "2026. 03. 29",
                    objective: "핵심 강점 1번 출처",
                    quote: quote1,
                    section: "이력서 본문",
                },
                {
                    id: 2,
                    title: "서비스 기여도 근거",
                    filename,
                    keywords: "프로젝트 기여, 개선 경험",
                    published: "2026. 03. 29",
                    objective: "핵심 강점 2번 출처",
                    quote: quote2,
                    section: "이력서 본문",
                },
                {
                    id: 3,
                    title: "엔지니어링 마인드 근거",
                    filename,
                    keywords: "안정성, 엔지니어링",
                    published: "2026. 03. 29",
                    objective: "핵심 강점 3번 출처",
                    quote: quote3,
                    section: "이력서 본문",
                },
            ],
        }
    }

    return {
        answer: `이력서 분석 결과 및 질문 주신 내용에 대한 답변입니다.

작성하신 이력서 본문의 핵심 내용 [1]을 참고했을 때, 실무에서의 구체적인 성과 지표와 문제 해결 프로세스를 보강하시면 더욱 강력한 지원서가 될 것입니다. 추가적인 면접 대비 팁이나 공고 추천이 필요하시면 편하게 질문해 주세요!`,
        citations: [
            {
                id: 1,
                title: "질의응답 근거 원문",
                filename,
                keywords: "이력서 내용, 핵심 역량",
                published: "2026. 03. 29",
                objective: "질의응답 참조",
                quote: quote1,
                section: "이력서 본문",
            },
        ],
    }
}

export default router
