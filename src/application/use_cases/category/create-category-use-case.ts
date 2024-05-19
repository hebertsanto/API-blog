import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  public async execute({ name, postId }: Category): Promise<Category | null> {
    if (!name) throw new MissingParamError('name');
    if (!postId) throw new MissingParamError('post_id');

    try {
      const category = await this.categoryRepository.create({
        name,
        postId,
      });

      return category;
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
      throw new Error('Uneable create a new category');
    }
  }
}
