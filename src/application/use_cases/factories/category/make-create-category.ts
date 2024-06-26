import { PrismaCategoryRepository } from '../../../../infrastructure/database/prisma/prisma_repositories/prisma-category-repository';
import { CreateCategoryUseCase } from '../../category/create-category-use-case';

export default async function makeCreateCategoryUseCase() {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const categoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository);

  return categoryUseCase;
}
