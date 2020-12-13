import express from 'express'

import authentication from './authentication'

const routers = express.Router()

routers.use('/auth', authentication)

export default routers
