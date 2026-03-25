import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

const apiRouter = express.Router()

app.use("/api", apiRouter)

apiRouter.get("/", (req, res) => {
    res.send("Hello World!")
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
