import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../utils/logger';

export class UpdateCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  public async execute(id: string, data: Category) {
    try {
      if (!id) throw new MissingParamError('category_id');
      const category = await this.categoryRepository.findByIdAndUpdate(
        id,
        data,
      );

      return category;
    } catch (error) {
      logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
