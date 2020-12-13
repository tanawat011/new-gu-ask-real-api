import express, { Application, Request, Response, NextFunction } from 'express'
import { authenticate } from './middlewares'
import routers from './routers'

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

app.listen(3000, () => {
  console.log('<==========[TanawatDEVz]==========>')
})

export default app
