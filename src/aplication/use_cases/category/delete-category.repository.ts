import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';


export class DeleteCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  async execute(id: string): Promise<void> {
    if (!id) throw new MissingParamError('id');
    await this.categoryRepository.findByIdAndDelete(id);
  }
}
