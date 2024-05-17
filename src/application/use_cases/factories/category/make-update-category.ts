import { PrismaCategoryRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { UpdateCategoryUseCase } from '../../category/update-category-repository';

export default async function makeUpdateCategoryUseCase() {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const categoryUseCase = new UpdateCategoryUseCase(prismaCategoryRepository);

  return categoryUseCase;
}
