import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class DeleteCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  async execute(id: string): Promise<void> {
    try {

      if (!id) throw new MissingParamError('id');
      await this.categoryRepository.findByIdAndDelete(id);

    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }

  }
}
