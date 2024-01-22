import express from 'express';
import { createPost } from '../controllers/post';
import { createUser } from '../controllers/user';

export const routes = express.Router();

routes.post('/post', createPost);
routes.post('/user', createUser);