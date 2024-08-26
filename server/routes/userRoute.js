import {Router} from 'express'
import { signup, login } from '../controllers/userController.js'

const route = Router()

route.post('/register', signup)
route.post('/login', login)


export default route