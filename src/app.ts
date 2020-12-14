import dotenv from "dotenv"
import express, { Application, Request, Response } from 'express'

import { authenticate } from './middlewares'
import routers from './routers'

dotenv.config()
const app: Application = express()

app.use(express.json())

app.use("/", routers)

app.get('/', authenticate, (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Hello world!',
    isError: false,
    data: req.user,
  })
})

const port = 3000
app.listen(port, () => {
  console.log('<==========[TanawatDEVz]==========>')
  console.log(`Runtime on port: ${port} environment: ${process.env.NODE_ENV}`)
})

export default app
