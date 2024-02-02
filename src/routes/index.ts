import express from 'express';
import { createPost } from '../controllers/post/createPostController';
import { createUser } from '../controllers/user/createUserController';
import { getUserById } from '../controllers/user/getUserController';
import { deletePost } from '../controllers/post/deletePostController';
import { updatePostController } from '../controllers/post/updatePostController';

export const routes = express.Router();

routes.post('/post', createPost);
routes.post('/delete', deletePost);
routes.put('/post/:id', updatePostController);

routes.post('/user', createUser);
routes.get('/user/:id', getUserById);
