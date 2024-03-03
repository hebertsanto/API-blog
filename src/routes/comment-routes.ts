import { Router } from 'express';
import { createComment } from '../presentation/controllers/comment/create-controller';
import { deleteComment } from '../presentation/controllers/comment/delete-controller';
import { updateComment } from '../presentation/controllers/comment/update-controller';
import { getCommentById } from '../presentation/controllers/comment/get-controller';

export const commentRoutes = Router();

commentRoutes.get(':id', getCommentById);
commentRoutes.post('/', createComment);
commentRoutes.put('/:id', updateComment);
commentRoutes.delete('/:id', deleteComment);
