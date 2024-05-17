import { PrismaCategoryRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { DeleteCategoryUseCase } from '../../category/delete-category.repository';

export default async function makeDeleteCategoryUseCase() {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const categoryUseCase = new DeleteCategoryUseCase(prismaCategoryRepository);

  return categoryUseCase;
}
