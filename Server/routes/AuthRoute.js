import express from 'express'
import { loginUSer, registerUser } from '../controllers/AuthController.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUSer)

export default router