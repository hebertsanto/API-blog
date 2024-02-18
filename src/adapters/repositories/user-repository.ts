import { User, Prisma } from '@prisma/client';

export interface PostRepository {
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>
  findById(id: string): Promise<User | null>
  findByIdAndDelete(id: string): Promise<User | null>
  findByIdAndUpdate(id: string): Promise<User>
}
