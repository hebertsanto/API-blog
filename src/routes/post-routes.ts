import { Router } from 'express';
import { createPost } from '../http/controllers/post/create-controller';
import { deletePost } from '../http/controllers/post/delete-controller';
import { getPostById } from '../http/controllers/post/get-controller';
import { updatePostController } from '../http/controllers/post/update-controller';

export const postRoutes = Router();

postRoutes.get('/post/:id', getPostById);
postRoutes.post('/post', createPost);
postRoutes.put('/post/:id', updatePostController);
postRoutes.delete('/post/:id', deletePost);
