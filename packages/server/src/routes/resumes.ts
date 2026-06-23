import { Router } from "express"
import type { Request, Response } from "express"
import pool from "../db"
import { authMiddleware } from "../middleware/auth"
import multer from "multer"
import { PDFParse } from "pdf-parse"

const router = Router()

// All resume routes require authentication
router.use(authMiddleware)

// 1. Get all resumes for the current user
router.get("/", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const result = await pool.query(
            "SELECT id, title, content, created_at, updated_at FROM resumes WHERE user_id = $1 ORDER BY id ASC",
            [userId]
        )
        res.json(result.rows)
    } catch (error) {
        console.error("Failed to fetch resumes:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 2. Get a single resume
router.get("/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        const result = await pool.query(
            "SELECT * FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId]
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

// 3. Create a new resume (limit to 10 max)
router.post("/", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id

        // Check if the user already has 10 resumes
        const countResult = await pool.query(
            "SELECT COUNT(*) FROM resumes WHERE user_id = $1",
            [userId]
        )
        const count = parseInt(countResult.rows[0].count)
        if (count >= 10) {
            return res.status(400).json({
                error: "자기소개서는 유저당 최대 10개까지만 생성할 수 있습니다."
            })
        }

        // Find the next available number (e.g. 자기소개서 01, 자기소개서 02) to avoid duplicates
        const existingResumes = await pool.query(
            "SELECT title FROM resumes WHERE user_id = $1",
            [userId]
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
            [userId, title]
        )

        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error("Failed to create resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 4. Update resume (title and/or content)
router.put("/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)
        const { title, content } = req.body

        // Verify ownership first
        const checkResult = await pool.query(
            "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId]
        )
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const updateResult = await pool.query(
            "UPDATE resumes SET title = COALESCE($1, title), content = COALESCE($2, content), updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
            [title, content, resumeId]
        )

        res.json(updateResult.rows[0])
    } catch (error) {
        console.error("Failed to update resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 5. Delete resume
router.delete("/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        const deleteResult = await pool.query(
            "DELETE FROM resumes WHERE id = $1 AND user_id = $2 RETURNING *",
            [resumeId, userId]
        )

        if (deleteResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        res.json({ message: "Resume deleted successfully", deleted: deleteResult.rows[0] })
    } catch (error) {
        console.error("Failed to delete resume:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 6. Generate content with AI
router.post("/:id/ai", async (req: Request, res: Response) => {
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
            [resumeId, userId]
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
                    }
                )

                if (!response.ok) {
                    const errBody = await response.text()
                    throw new Error(`Gemini API error: ${response.status} - ${errBody}`)
                }

                const data = (await response.json()) as any
                generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || ""
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
            [generatedText, resumeId]
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
    limits: { fileSize: 50 * 1024 * 1024 } // 50MB limit
})

// OpenAI API call helper
async function callOpenAI(systemPrompt: string, userPrompt: string, isJson: boolean = false, previousMessages: any[] = []) {
    const apiKey = process.env.OPENAI_API_KEY
    if (!apiKey) {
        throw new Error("OPENAI_API_KEY is not configured in the environment")
    }

    const messages = [
        { role: "system", content: systemPrompt },
        ...previousMessages.map(msg => ({
            role: msg.sender === "user" ? "user" : "assistant",
            content: msg.message
        })),
        { role: "user", content: userPrompt }
    ]

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages,
            ...(isJson ? { response_format: { type: "json_object" } } : {})
        })
    })

    if (!response.ok) {
        const errText = await response.text()
        throw new Error(`OpenAI API error: ${response.status} - ${errText}`)
    }

    const data = (await response.json()) as any
    return data.choices?.[0]?.message?.content || ""
}

// 7. Upload PDF Resume and extract text & analyze
router.post("/:id/upload", upload.single("file"), async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        if (!req.file) {
            return res.status(400).json({ error: "PDF 파일을 업로드해주세요." })
        }

        // Verify ownership
        const checkResult = await pool.query(
            "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId]
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
            return res.status(400).json({ error: "PDF 파일을 해석하는 데 실패했습니다." })
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
            return res.status(400).json({ error: "PDF 파일에서 텍스트를 추출하지 못했습니다. 파일에 텍스트가 포함되어 있는지 확인하세요." })
        }

        let summary = ""
        let improvements = ""

        const apiKey = process.env.OPENAI_API_KEY
        if (apiKey) {
            try {
                const systemPrompt = `
너는 대한민국 최고의 개발자 채용 및 커리어 컨설턴트 AI이다.
제공된 이력서/자기소개서 본문을 꼼꼼히 분석하여 다음 두 가지를 제공해라.
1. 이력서 요약(summary): 인재의 핵심 강점, 주요 스택, 프로젝트 요약을 전문성 있게 작성.
2. 개선할 점(improvements): 면접에서 아쉬울 수 있는 부분이나 보강이 필요한 내용(수치화, 근거 부족 등)을 지적하고 구체적 개선 조언 제공.

[규칙]
- 반드시 한국어로 대답해라.
- 응답은 반드시 마크다운 글머리 기호(각 줄이 "-"로 시작) 목록 형태로 작성해라.
- 반드시 다음 구조의 JSON 형태로만 응답해라. 다른 서론/설명은 절대 포함하지 마라.
JSON 구조:
{
  "summary": "- **핵심 스택:** ...\\n- **경험 요약:** ...\\n- **인재 강점:** ...",
  "improvements": "- **수치 보강:** ...\\n- **트러블슈팅 세분화:** ...\\n- **성과 연결:** ..."
}
`
                const responseText = await callOpenAI(systemPrompt, extractedText, true)
                const parsedResponse = JSON.parse(responseText)
                summary = parsedResponse.summary || ""
                improvements = parsedResponse.improvements || ""
            } catch (openaiErr) {
                console.error("OpenAI analysis failed:", openaiErr)
                const mock = generateMockPDFAnalysis(extractedText)
                summary = mock.summary
                improvements = mock.improvements
            }
        } else {
            const mock = generateMockPDFAnalysis(extractedText)
            summary = mock.summary
            improvements = mock.improvements
        }

        // Update database and clear previous chat history
        await pool.query(
            "DELETE FROM resume_messages WHERE resume_id = $1",
            [resumeId]
        )

        const updateResult = await pool.query(
            "UPDATE resumes SET raw_text = $1, summary = $2, improvements = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *",
            [extractedText, summary, improvements, resumeId]
        )

        res.json(updateResult.rows[0])
    } catch (error) {
        console.error("PDF upload/analysis failed:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 8. Get chat message history
router.get("/:id/messages", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)

        // Verify ownership
        const checkResult = await pool.query(
            "SELECT id FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId]
        )
        if (checkResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const messagesResult = await pool.query(
            "SELECT id, sender, message, created_at FROM resume_messages WHERE resume_id = $1 ORDER BY id ASC",
            [resumeId]
        )
        res.json(messagesResult.rows)
    } catch (error) {
        console.error("Failed to fetch messages:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// 9. Send a message to AI and get a response
router.post("/:id/messages", async (req: Request, res: Response) => {
    try {
        const userId = req.user?.id
        const resumeId = parseInt(req.params.id as string, 10)
        const { message } = req.body

        if (!message || typeof message !== "string" || message.trim() === "") {
            return res.status(400).json({ error: "Message is required" })
        }

        // Verify ownership and get resume context
        const resumeResult = await pool.query(
            "SELECT raw_text, title FROM resumes WHERE id = $1 AND user_id = $2",
            [resumeId, userId]
        )
        if (resumeResult.rows.length === 0) {
            return res.status(404).json({ error: "Resume not found" })
        }

        const rawText = resumeResult.rows[0].raw_text || ""

        // Fetch previous chat history
        const historyResult = await pool.query(
            "SELECT sender, message FROM resume_messages WHERE resume_id = $1 ORDER BY id ASC",
            [resumeId]
        )
        const history = historyResult.rows

        // Save User Message
        const userMsgResult = await pool.query(
            "INSERT INTO resume_messages (resume_id, sender, message) VALUES ($1, 'user', $2) RETURNING *",
            [resumeId, message]
        )

        let aiResponseText = ""
        const apiKey = process.env.OPENAI_API_KEY

        if (apiKey) {
            try {
                const systemPrompt = `
너는 사용자의 이력서/자기소개서 기반 질의응답을 성심성의껏 도와주는 전문 취업 코칭 AI 어시스턴트이다.
아래에 제공된 사용자의 이력서 텍스트 내용을 완벽히 파악하고, 이 내용에 기반하여 친절하고 구체적으로 사용자의 질문에 한국어로 대답해라.
질문자가 면접 준비, 강점 질문, 프로젝트 질문, 기술 스택 연관성 등을 물어보면 적극적으로 조언해라.

[이력서 본문]
${rawText}
`
                aiResponseText = await callOpenAI(systemPrompt, message, false, history)
            } catch (openaiErr) {
                console.error("OpenAI Q&A failed:", openaiErr)
                aiResponseText = `OpenAI API 호출 중 오류가 발생했습니다. 임시 답변: 이력서의 내용을 바탕으로 판단했을 때, 입력해주신 내용 "${message}"에 대한 보강 및 면접 질문은 다음과 같이 추천합니다.\n1. 프로젝트 핵심 아키텍처에 대한 추가 기술\n2. 트러블슈팅 수치적 증빙 추가`
            }
        } else {
            // Mock response if no API key
            aiResponseText = generateMockQA(message, rawText)
        }

        // Save Assistant Message
        const aiMsgResult = await pool.query(
            "INSERT INTO resume_messages (resume_id, sender, message) VALUES ($1, 'assistant', $2) RETURNING *",
            [resumeId, aiResponseText]
        )

        res.json({
            userMessage: userMsgResult.rows[0],
            assistantMessage: aiMsgResult.rows[0]
        })
    } catch (error) {
        console.error("Q&A failed:", error)
        res.status(500).json({ error: "Internal server error" })
    }
})

// Helper mock functions
function generateMockPDFAnalysis(text: string) {
    return {
        summary: `- **보유 기술:** React, TypeScript, Express, PostgreSQL, Docker\n- **주요 경력 요약:** RESTful API 및 DB 설계 최적화. 클라이언트 렌더링 성능 지연 제거 경험.\n- **핵심 역량:** 프론트와 백엔드를 모두 다루며 마이크로서비스 간 도메인 이관 및 인프라 분산에 관심이 큼.`,
        improvements: `- **정량적 수치 보강:** 성과가 수치적으로 나타나지 않음. 로딩 개선율(%) 등을 추가하면 좋음.\n- **장애 극복 디테일:** 에러 복구에 있어 Error Boundary 및 Fallback 설계 배경을 구체화할 필요 있음.\n- **협업 성과 추가:** 코드 리뷰 및 문서화 활동이 팀 생산성에 미친 영향을 기술하면 더 강력해짐.`
    }
}

function generateMockQA(userMessage: string, resumeText: string): string {
    const msg = userMessage.toLowerCase()
    
    // Quick disclaimer about API key at the top
    const disclaimer = "[안내: OPENAI_API_KEY가 등록되지 않아 모조(Mock) 엔진으로 답변 중입니다.]\n\n"
    
    if (msg.includes("면접") || msg.includes("질문") || msg.includes("면접관")) {
        return disclaimer + `작성해주신 이력서를 기반으로 면접관이 던질 확률이 높은 대표적인 예상 질문 3가지입니다.

1. **"다양한 상태 관리 라이브러리 중 이를 선택하여 리팩토링한 구체적 기준이 무엇인가요?"**
   - 이력서 내 '레거시의 편견과 기술 부채 제거' 부분과 연관된 질문입니다. 기존 상태 코드의 한계와 마이그레이션 도중 만난 트러블슈팅 사례를 수치와 함께 답변하시면 좋습니다.

2. **"컴포넌트 결합도를 낮추기 위해 어떤 모듈화 설계를 하셨나요?"**
   - 진입점 최적화 및 Entry Point 설계 항목에서 유도되는 기술적 심층 질문입니다. API 호출 계층과 UI 계층의 의존 관계 분리 과정을 상세히 풀어내세요.

3. **"Error Boundary와 Fallback UI를 설계할 때 장애 시나리오는 어떻게 잡으셨나요?"**
   - 시스템 복구 기능 회복과 관련된 질문으로, 사용자 이탈을 방지하기 위해 마련한 UX 대안과 예외 처리의 꼼꼼함을 보여주기 좋은 기회입니다.`
    }
    
    if (msg.includes("강점") || msg.includes("역량") || msg.includes("어필")) {
        return disclaimer + `이력서 텍스트를 분석했을 때 인사담당자에게 가장 매력적으로 다가갈 수 있는 핵심 강점은 **'아키텍처의 안정성과 리팩토링을 통한 성능 극대화'**입니다.

- 복잡한 비즈니스 로직을 효율적으로 통합하여 결합도를 낮추려는 노력이 잘 보입니다.
- 레거시 코드를 단순 유지보수하는 것에 그치지 않고 최신 패러다임에 맞춰 능동적으로 구조화하는 주도성이 강점입니다.
- 장애 복구와 모니터링 관점(Error Boundary, 재활 관점의 디버깅)이 돋보입니다. 면접에서도 이를 '시스템 가용성을 책임지는 신뢰도' 관점으로 어필해보세요.`
    }
    
    return disclaimer + `이력서 분석 결과 및 질문 주신 "${userMessage}"에 대해 분석한 결과입니다.

이력서 내의 기술 역량과 직무 프로젝트 경험을 고려할 때, 제안하신 방향에 대해서는 현재 이력서에 작성된 내용 중 **'진입점 최적화 및 시스템 결합도 완화'** 파트의 모듈성 설계 내역을 보완하는 것이 도움이 됩니다. 추가적으로 궁금하신 면접 팁이나 성과 수치화 방안이 있으시다면 언제든 질문해 주세요!`
}

export default router
