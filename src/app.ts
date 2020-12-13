import express, { Application, Request, Response, NextFunction } from 'express'
import { generateAccessToken } from './helpers'
import { authenticate } from './middlewares'

const app: Application = express()

app.use(express.json())

app.post('/auth/login', (req: Request, res: Response) => {
  try {
    const { username } = req.body
    if (username !== 'tanawat') {
      return res.status(401).json({
        message: 'Login failed',
        isError: true,
      })
    }

    res.status(200).json({
      message: 'Login success',
      isError: false,
      access_token: generateAccessToken({ username }),
    })
  } catch (error) {
    console.log(error)

    res.status(500).json({
      message: error.message,
      isError: true,
    })
  }
})

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
