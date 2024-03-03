import { Router } from 'express';
import { createCategory } from '../presentation/controllers/category/create-category';
import { deleteCategory } from '../presentation/controllers/category/delete-category';
import { updateCategory } from '../presentation/controllers/category/update-category';
import { findCategory } from '../presentation/controllers/category/find-category';


export const categoryRoutes = Router();

categoryRoutes.get(':id', findCategory);
categoryRoutes.post('/', createCategory);
categoryRoutes.put('/:id', updateCategory);
categoryRoutes.delete('/:id', deleteCategory);
