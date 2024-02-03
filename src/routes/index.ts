import express from 'express';
import { createPost } from '../controllers/post/createPostController';
import { createUser } from '../controllers/user/createUserController';
import { getUserById } from '../controllers/user/getUserController';
import { deletePost } from '../controllers/post/deletePostController';
import { updatePostController } from '../controllers/post/updatePostController';
import { getPostById } from '../controllers/post/getPostByIdController';
import { deleteUser } from '../controllers/user/deleteUserController';

export const router = express.Router();

router.post('/post', createPost);
router.post('/delete', deletePost);
router.get('/post/:id', getPostById);
router.put('/post/:id', updatePostController);

router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUserById);
