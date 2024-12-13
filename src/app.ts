import express from "express"
import { PrismaClient } from '@prisma/client'
import bookRouter from "./router"

const app = express()
const prisma = new PrismaClient()
const port = process.env.PORT || 3030

app.use(express.json())

app.use('/book', bookRouter)

app.listen(port, () => {
    console.log(`Server up and runing on port: ${port}`)
})