import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!')
})

app.listen(3000)
