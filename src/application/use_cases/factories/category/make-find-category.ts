import { PrismaCategoryRepository } from '../../../../infrastructure/database/prisma/prisma_repositories/prisma-category-repository';
import { FindCategoryUseCase } from '../../category/find-category-repository';

export default async function makeFindCategoryUseCase() {
  const prismacategoryRepository = new PrismaCategoryRepository();
  const categoryUseCase = new FindCategoryUseCase(prismacategoryRepository);

  return categoryUseCase;
}
