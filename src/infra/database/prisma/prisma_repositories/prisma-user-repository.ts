import { User, Prisma } from '@prisma/client';
import { UserRepository } from '../../../../aplication/repositories/user-repository';
import { prisma } from '../client/prismaClient';

export class PrismaUserRepository implements UserRepository {
  public async create(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    const createUser = await prisma.user.create({
      data,
    });
    return createUser;
  }

  public async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  }
  public async findByIdAndDelete(id: string): Promise<User | null> {
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  }
  public async findByIdAndUpdate(
    id: string,
    data: Prisma.UserUncheckedUpdateInput,
  ): Promise<User> {
    const updateUser = await prisma.user.update({
      where: {
        id,
      },
      data,
    });
    return updateUser;
  }
  public async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }
}
