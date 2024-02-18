import { Router } from 'express';
import { createComment } from '../presentation/controllers/comment/create-controller';
import { deleteComment } from '../presentation/controllers/comment/delete-controller';
import { updateComment } from '../presentation/controllers/comment/update-controller';
import { getCommentById } from '../presentation/controllers/comment/get-controller';

export const commentRoutes = Router();

commentRoutes.get('/comment/:id', getCommentById);
commentRoutes.post('/comment', createComment);
commentRoutes.put('/comment/:id', updateComment);
commentRoutes.delete('/comment/:id', deleteComment);
