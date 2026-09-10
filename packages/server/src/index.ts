import "./env"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import pool from "./db"
import authRouter from "./routes/auth"
import resumesRouter from "./routes/resumes"
import jobsRouter from "./routes/jobs"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"
import multer from "multer"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(helmet())
app.disable("x-powered-by")

// JSON body parser with modest size limit
app.use(express.json({ limit: "64kb" }))

// Parse cookies for reading HttpOnly auth cookie server-side
app.use(cookieParser())

// CORS: restrict origins via env and enable credentials if using cookies
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:5173"
app.use(
    cors({
        origin: corsOrigin,
        credentials: true,
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
        maxAge: 600,
    }),
)

const port = process.env.PORT || 3000

// 마이그레이션 실행
async function runMigrations() {
    try {
        const migrationsDir = path.join(__dirname, "../migrations")
        const files = fs.readdirSync(migrationsDir).filter(f => f.endsWith(".sql")).sort()
        for (const file of files) {
            const migrationFile = path.join(migrationsDir, file)
            const sql = fs.readFileSync(migrationFile, "utf-8")
            await pool.query(sql)
            console.log(`Migration ${file} executed successfully`)
        }
        console.log("All migrations executed successfully")
    } catch (error) {
        console.error("Migration failed:", error)
    }
}

// DB 연결 테스트 및 마이그레이션 실행
pool.query("SELECT NOW()", async (err, res) => {
    if (err) {
        console.error("Database connection error:", err)
    } else {
        console.log("Connected:", res.rows[0])
        await runMigrations()
    }
})

const apiRouter = express.Router()

app.use("/api", apiRouter)

apiRouter.use("/auth", authRouter) // 인증 라우트
apiRouter.use("/resumes", resumesRouter) // 이력서 라우트
apiRouter.use("/jobs", jobsRouter) // 공고 관련 라우트
import postsRouter from "./routes/posts"
apiRouter.use("/posts", postsRouter) // 공고 조회 라우트
import usersRouter from "./routes/users"
apiRouter.use("/users", usersRouter) // 사용자 프로필 관리 라우트

// No longer using express.static for uploads, using DB storage instead

import interviewRouter from "./routes/interviewRoutes"
apiRouter.use("/interview", interviewRouter) // OpenAI 연동 라우트
apiRouter.use("/ai", interviewRouter) // 통합 AI 라우트 (Node.js AI 엔진)


apiRouter.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

// Global Error Handler Middleware to return JSON errors instead of default HTML
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error("Unhandled error:", err)
    if (err instanceof multer.MulterError) {
        if (err.code === "LIMIT_FILE_SIZE") {
            return res.status(400).json({ error: "파일 크기가 너무 큽니다. 최대 50MB까지 업로드할 수 있습니다." })
        }
        return res.status(400).json({ error: `파일 업로드 오류: ${err.message}` })
    }
    res.status(err.status || 500).json({ error: err.message || "서버 내부 오류가 발생했습니다." })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
