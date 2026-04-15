import "./env"
import express from "express"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"
import pool from "./db"
import authRouter from "./routes/auth"
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

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
        const migrationFile = path.join(
            __dirname,
            "../migrations/001_create_users_table.sql",
        )
        const sql = fs.readFileSync(migrationFile, "utf-8")
        await pool.query(sql)
        console.log("✅ Migrations completed")
    } catch (error) {
        console.error("❌ Migration error:", error)
    }
}

// Database 연결 테스트 및 마이그레이션 실행
pool.query("SELECT NOW()", async (err, res) => {
    if (err) {
        console.error("❌ Database connection failed:", err)
    } else {
        console.log("✅ Database connected:", res.rows[0])
        await runMigrations()
    }
})

const apiRouter = express.Router()

app.use("/api", apiRouter)

// 인증 라우트
apiRouter.use("/auth", authRouter)

apiRouter.get("/health", (req, res) => {
    res.json({ status: "ok" })
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
