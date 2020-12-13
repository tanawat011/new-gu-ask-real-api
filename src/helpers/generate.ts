import jwt from 'jsonwebtoken'

export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN })
}
