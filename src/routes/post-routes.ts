import { Router } from 'express';
import { createPost } from '../presentation/controllers/post/create-controller';
import { deletePost } from '../presentation/controllers/post/delete-controller';
import { getPostById } from '../presentation/controllers/post/get-controller';
import { updatePostController } from '../presentation/controllers/post/update-controller';

export const postRoutes = Router();

postRoutes.get('/post/:id', getPostById);
postRoutes.post('/post', createPost);
postRoutes.put('/post/:id', updatePostController);
postRoutes.delete('/post/:id', deletePost);
