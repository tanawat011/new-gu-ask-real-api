import express from 'express'
import authentication from '../components/authentication'

const routers = express.Router()

routers.post('/login', authentication.controller)

export default routers
