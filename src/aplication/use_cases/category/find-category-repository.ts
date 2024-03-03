import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class FindCategoryUseCase {
  constructor(private readonly categoryRepository: PrismaCategoryRepository) {}

  async execute(id: string): Promise<Category | null> {
    try {
      if (!id) throw new MissingParamError('category_id');
      const category = await this.categoryRepository.findById(id);

      if (!category) {
        throw new ParamDoesNotExist('category_id');
      }

      return category;
    } catch (error) {
      Logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
