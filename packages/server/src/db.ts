import { Pool } from "pg"

const host = process.env.DB_HOST || "localhost"
const port = parseInt(process.env.DB_PORT || "5432")
const user = process.env.DB_USER || "user"
const password = process.env.DB_PASSWORD || "1234"
const database = process.env.DB_NAME || "interview"

if (process.env.NODE_ENV !== "production") {
    console.log("Database config:", { host, port, user, database })
}

const pool = new Pool({
    host,
    port,
    user,
    password,
    database,
})

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err)
})

export default pool
