import { Router } from 'express';
import { AddCategoryController } from '../presentation/controllers/category/create-category';
import { RemoveCategoryController } from '../presentation/controllers/category/delete-category';
import { UpdateCategoryController } from '../presentation/controllers/category/update-category';
import { FindCategoryController } from '../presentation/controllers/category/find-category';

export const categoryRoutes = Router();

categoryRoutes.get(':id/retrieve', new FindCategoryController().handle);
categoryRoutes.post('/add', new AddCategoryController().handle);
categoryRoutes.put('/:id/edit', new UpdateCategoryController().handle);
categoryRoutes.delete('/:id/remove', new RemoveCategoryController().handle);
