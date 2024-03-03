import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  async execute({ name, postId }: Category): Promise<Category | null> {
    try {
      if (!name) throw new MissingParamError('name');
      if (!postId) throw new MissingParamError('post_id');

      const category = await this.categoryRepository.create({
        name,
        postId,
      });

      return category;
    } catch (error) {
      Logger.error(`An error occurred: ${error}`);
      throw error;
    }
  }
}
