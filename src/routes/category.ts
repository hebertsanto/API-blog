import { Router } from 'express';
import { AddCategoryController } from '../presentation/controllers/category/create-category';
import { RemoveCategoryController } from '../presentation/controllers/category/delete-category';
import { UpdateCategoryController } from '../presentation/controllers/category/update-category';
import { FindCategoryController } from '../presentation/controllers/category/find-category';

export const categoryRoutes = Router();

categoryRoutes.get(':id', new FindCategoryController().handle);
categoryRoutes.post('/', new AddCategoryController().handle);
categoryRoutes.put('/:id', new UpdateCategoryController().handle);
categoryRoutes.delete('/:id', new RemoveCategoryController().handle);
