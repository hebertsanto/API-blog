import { User, Prisma } from '@prisma/client';

export interface UserRepository {
  create(data: Prisma.UserUncheckedCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findByIdAndDelete(id: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
  findByIdAndUpdate(id: string, data: Prisma.UserUncheckedUpdateInput): Promise<User>;
}
