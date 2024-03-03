import { Router } from 'express';
import { createPost } from '../presentation/controllers/post/create-controller';
import { deletePost } from '../presentation/controllers/post/delete-controller';
import { getPostById } from '../presentation/controllers/post/get-controller';
import { updatePostController } from '../presentation/controllers/post/update-controller';

export const postRoutes = Router();

postRoutes.get('/:id', getPostById);
postRoutes.post('/', createPost);
postRoutes.put('/:id', updatePostController);
postRoutes.delete('/:id', deletePost);
