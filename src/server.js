import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const HOST = process.env.HOST || "127.0.0.1"
const PORT = process.env.PORT || "3000"
const app = express()

app.use(express.json())

const delay = time => new Promise(res => setTimeout(res, time));

app.get('/', async (req, res) => {
    await delay(3000)
    res.json({
        delay: '3000ms',
        status: 'ok'
    })
})

app.get('/http/:code', (req, res) => {
    const code = Number(req.params.code)
    res.status(code).json({ http: code })
})


app.listen(PORT, HOST, () => {
    console.log(`Server listening on http://${HOST}:${PORT}`)
})