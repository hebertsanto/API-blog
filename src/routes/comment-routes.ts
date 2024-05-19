import { Router } from 'express';
import { AddCommentController } from '../presentation/controllers/comment/create-controller';
import { RemoveCommentController } from '../presentation/controllers/comment/delete-controller';
import { UpdateCommentController } from '../presentation/controllers/comment/update-controller';
import { GetCommentController } from '../presentation/controllers/comment/get-controller';

export const commentRoutes = Router();

commentRoutes.get(':id/retrieve', new GetCommentController().handle);
commentRoutes.post('/add', new AddCommentController().handle);
commentRoutes.put('/:id/edit', new UpdateCommentController().handle);
commentRoutes.delete('/:id/remove', new RemoveCommentController().handle);
