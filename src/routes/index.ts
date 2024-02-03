import express from 'express';
import { createPost } from '../controllers/post/createPostController';
import { createUser } from '../controllers/user/createUserController';
import { getUserById } from '../controllers/user/getUserController';
import { deletePost } from '../controllers/post/deletePostController';
import { updatePostController } from '../controllers/post/updatePostController';
import { getPostById } from '../controllers/post/getPostByIdController';
import { deleteUser } from '../controllers/user/deleteUserController';
import { searchPosts } from '../controllers/post/searchPostController';
import { loginController } from '../controllers/auth/loginController';
import { createComment } from '../controllers/comment/createCommentController';
import { deleteComment } from '../controllers/comment/deleteCommentController';
import { getCommentById } from '../controllers/comment/getCommentController';

export const router = express.Router();

//posts
router.post('/post', createPost);
router.post('/delete', deletePost);
router.get('/post/:id', getPostById);
router.put('/post/:id', updatePostController);
router.get('/search', searchPosts);

//comment

router.post('/comment', createComment);
router.delete('/comment/:id', deleteComment);
router.get('/comment/:id', getCommentById);

//user
router.post('/user', createUser);
router.post('/login', loginController);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUserById);
