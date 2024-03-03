import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  async execute(id: string, data: Category) {
    if (!id) throw new MissingParamError('category_id');
    const category = await this.categoryRepository.findByIdAndUpdate(id, data);

    return category;
  }
}
