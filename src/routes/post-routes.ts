import { Router } from 'express';
import { AddPostController } from '../presentation/controllers/post/create-controller';
import { RemovePostController } from '../presentation/controllers/post/delete-controller';
import { GetPostController } from '../presentation/controllers/post/get-controller';
import { UpdatePostController } from '../presentation/controllers/post/update-controller';

export const postRoutes = Router();

postRoutes.get('/:id/retrieve', new GetPostController().handle);

postRoutes.post('/add', new AddPostController().handle);

postRoutes.put('/:id/edit', new UpdatePostController().handle);

postRoutes.delete('/:id/remove', new RemovePostController().handle);
