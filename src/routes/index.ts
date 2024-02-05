import express from 'express';
import { createPost } from '../controllers/post/create-controller';
import { createUser } from '../controllers/user/create-controller';
import { getUserById } from '../controllers/user/get-controller';
import { deletePost } from '../controllers/post/delete-controller';
import { updatePostController } from '../controllers/post/update-controller';
import { getPostById } from '../controllers/post/get-controller';
import { deleteUser } from '../controllers/user/delete-controller';
import { searchPosts } from '../controllers/post/search-controller';
import { loginController } from '../controllers/auth/loginController';
import { createComment } from '../controllers/comment/create-controller';
import { deleteComment } from '../controllers/comment/delete-controller';
import { getCommentById } from '../controllers/comment/get-controller';
import { updateComment } from '../controllers/comment/update-controller';
import { listComments } from '../controllers/comment/list-controller';

export const router = express.Router();

//posts
router.post('/post', createPost);
router.delete('/post/:id', deletePost);
router.get('/post/:id', getPostById);
router.put('/post/:id', updatePostController);
router.get('/search', searchPosts);

//comment

router.post('/comment', createComment);
router.delete('/comment/:id', deleteComment);
router.get('/comments/post/:id', listComments);
router.put('/comment/:id', updateComment);
router.get('/comment/:id', getCommentById);

//user
router.post('/user', createUser);
router.post('/login', loginController);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUserById);
