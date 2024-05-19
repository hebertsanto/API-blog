import { PrismaCategoryRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  public async execute(id: string): Promise<void> {
    try {
      if (!id) throw new MissingParamError('id');
      await this.categoryRepository.findByIdAndDelete(id);
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
