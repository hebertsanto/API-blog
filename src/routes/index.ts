import express from 'express'
import { createPost } from '../controllers/post'
import { createUser } from '../controllers/user/createUserController'
import { getUserById } from '../controllers/user/getUserController'

export const routes = express.Router()

routes.post('/post', createPost)
routes.post('/user', createUser)
routes.get('/user/:id', getUserById)
