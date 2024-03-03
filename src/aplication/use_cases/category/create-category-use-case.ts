import { Category } from '@prisma/client';
import { PrismaCategoryRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-category-repository';
import { MissingParamError } from '../../../utils/errors/index.';


export class CreateCategoryUseCase {
  constructor(private categoryRepository: PrismaCategoryRepository) {}

  async execute({ name, postId }: Category) : Promise<Category | null> {
    if (!name) throw new MissingParamError('name');

    if (!postId) throw new Error('post_id');

    const category = await this.categoryRepository.create({
      name,
      postId
    });

    return category;
  }
}
