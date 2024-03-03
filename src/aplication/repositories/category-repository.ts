import { Category, Prisma } from '@prisma/client';

export interface CategoryRepository {
  create(data: Prisma.CategoryUncheckedCreateInput): Promise<Category>;
  findById(id: string): Promise<Category | null>;
  findByIdAndDelete(id: string): Promise<Category | null>;
  findByIdAndUpdate(
    id: string,
    data: Prisma.CategoryUncheckedUpdateInput,
  ): Promise<Category>;
}
