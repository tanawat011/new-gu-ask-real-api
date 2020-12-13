import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  try {
    // Gather the jwt access token from the request header
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    // if there isn't any token
    if (!token) {
      return res.status(401).json({
        message: 'Login failed',
        isError: true,
      })
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string, (error: any, user: any) => {
      if (error) {
        console.log(error)

        return res.status(403).json({
          message: '',
          isError: true,
        })
      }

      // pass the execution off to whatever request the client intended
      req.user = user
      next()
    })
  } catch (error) {
    next(error)
  }
}
