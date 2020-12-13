import { Request, Response } from 'express'
import { generateAccessToken } from '../../helpers'

export default (req: Request, res: Response) => {
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
}
