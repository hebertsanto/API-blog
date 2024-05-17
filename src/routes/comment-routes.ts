import { Router } from 'express';
import { AddCommentController } from '../presentation/controllers/comment/create-controller';
import { RemoveCommentController } from '../presentation/controllers/comment/delete-controller';
import { UpdateCommentController } from '../presentation/controllers/comment/update-controller';
import { GetCommentController } from '../presentation/controllers/comment/get-controller';

export const commentRoutes = Router();

commentRoutes.get(':id', new GetCommentController().handle);
commentRoutes.post('/', new AddCommentController().handle);
commentRoutes.put('/:id', new UpdateCommentController().handle);
commentRoutes.delete('/:id', new RemoveCommentController().handle);
