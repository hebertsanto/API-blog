import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';


export class FindCategoryUseCase {
  constructor(private readonly categoryRepository: PrismaCategoryRepository) {}

  async execute(id: string) : Promise<Category | null> {

    if (!id) throw new MissingParamError('category_id');
    const category =  await this.categoryRepository.findById(id);

    if (!category) {
      throw new ParamDoesNotExist('category_id');
    }

    return category;
  }
}
