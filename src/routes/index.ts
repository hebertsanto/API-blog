import express from 'express';
import { createPost } from '../http/controllers/post/create-controller';
import { createUser } from '../http/controllers/user/create-controller';
import { getUserById } from '../http/controllers/user/get-controller';
import { deletePost } from '../http/controllers/post/delete-controller';
import { updatePostController } from '../http/controllers/post/update-controller';
import { getPostById } from '../http/controllers/post/get-controller';
import { deleteUser } from '../http/controllers/user/delete-controller';
import { searchPosts } from '../http/controllers/post/search-controller';
import { loginController } from '../http/controllers/auth/loginController';
import { createComment } from '../http/controllers/comment/create-controller';
import { deleteComment } from '../http/controllers/comment/delete-controller';
import { getCommentById } from '../http/controllers/comment/get-controller';
import { updateComment } from '../http/controllers/comment/update-controller';
import { listComments } from '../http/controllers/comment/list-controller';

export const router = express.Router();

router.post('/post', createPost);
router.delete('/post/:id', deletePost);
router.get('/post/:id', getPostById);
router.put('/post/:id', updatePostController);
router.get('/post/search', searchPosts);

router.post('/comment', createComment);
router.delete('/comment/:id', deleteComment);
router.get('/comment/post/:id', listComments);
router.put('/comment/:id', updateComment);
router.get('/comment/:id', getCommentById);

router.post('/user', createUser);
router.post('/login', loginController);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUserById);
