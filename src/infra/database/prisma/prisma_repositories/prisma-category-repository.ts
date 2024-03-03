import { Prisma, Category } from '@prisma/client';
import { prisma } from '../client/prismaClient';
import { CategoryRepository } from '../../../../aplication/repositories/category-repository';

export class PrismaCategoryRepository implements CategoryRepository {
  public async create(
    data: Prisma.CategoryUncheckedCreateInput,
  ): Promise<Category> {
    const category = await prisma.category.create({
      data,
    });

    return category;
  }

  public async findById(id: string): Promise<Category | null> {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  }

  public async findByIdAndDelete(id: string): Promise<Category | null> {
    return await prisma.category.delete({
      where: {
        id,
      },
    });
  }

  public async findByIdAndUpdate(
    id: string,
    data: Prisma.CategoryUncheckedUpdateInput,
  ): Promise<Category> {
    const updateCategory = await prisma.category.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });


    return updateCategory;
  }
}
