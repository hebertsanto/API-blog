import { Prisma, Category } from '@prisma/client';
import { prisma } from '../client/prisma-client';
import { CategoryRepository } from '../../../../application/repositories/category-repository';
import { logger } from '../../../logger';

export class PrismaCategoryRepository implements CategoryRepository {
  public async create(data: Prisma.CategoryUncheckedCreateInput): Promise<Category> {
    try {
      const category = await prisma.category.create({
        data,
      });

      return category;
    } catch (error) {
      logger.error(`some error ocurred: ${error}`);
      throw new Error('Failed to create category');
    }
  }

  public async findById(id: string): Promise<Category | null> {
    try {
      const category = await prisma.category.findUnique({
        where: {
          id,
        },
      });
      return category;
    } catch (error) {
      logger.error(`some error ocurred: ${error}`);
      throw new Error('Failed to find category');
    }
  }

  public async findByIdAndDelete(id: string): Promise<Category | null> {
    try {
      return await prisma.category.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      logger.error(`some error ocurred: ${error}`);
      throw new Error('Failed to delete category');
    }
  }

  public async findByIdAndUpdate(
    id: string,
    data: Prisma.CategoryUncheckedUpdateInput,
  ): Promise<Category> {
    try {
      const updateCategory = await prisma.category.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });

      return updateCategory;
    } catch (error) {
      logger.error(`some error ocurred: ${error}`);
      throw new Error('Failed to update category');
    }
  }
}
