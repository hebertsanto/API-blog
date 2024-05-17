import { PrismaCategoryRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { CreateCategoryUseCase } from '../../category/create-category-use-case';

export default function makeCreateCategoryUseCase() {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const categoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository);

  return categoryUseCase;
}
