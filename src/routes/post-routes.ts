import { Router } from 'express';
import { AddPostController } from '../presentation/controllers/post/create-controller';
import { RemovePostController } from '../presentation/controllers/post/delete-controller';
import { GetPostController } from '../presentation/controllers/post/get-controller';
import { UpdatePostController } from '../presentation/controllers/post/update-controller';

export const postRoutes = Router();

postRoutes.get('/:id', new GetPostController().handle);

postRoutes.post('/', new AddPostController().handle);

postRoutes.put('/:id', new UpdatePostController().handle);

postRoutes.delete('/:id', new RemovePostController().handle);
