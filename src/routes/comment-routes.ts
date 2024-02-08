import { Router } from 'express';
import { createComment } from '../http/controllers/comment/create-controller';
import { deleteComment } from '../http/controllers/comment/delete-controller';
import { updateComment } from '../http/controllers/comment/update-controller';
import { getCommentById } from '../http/controllers/comment/get-controller';

export const commentRoutes = Router();

commentRoutes.get('/comment/:id', getCommentById);
commentRoutes.post('/comment', createComment);
commentRoutes.put('/comment/:id', updateComment);
commentRoutes.delete('/comment/:id', deleteComment);
