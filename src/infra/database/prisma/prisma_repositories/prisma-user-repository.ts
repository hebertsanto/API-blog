import { User, Prisma } from '@prisma/client';
import { UserRepository } from '../../../../application/repositories/user-repository';
import { prisma } from '../client/prisma-client';
import { logger } from '../../../../utils/logger';

export class PrismaUserRepository implements UserRepository {
  public async create(data: Prisma.UserUncheckedCreateInput): Promise<User> {
    try {
      const createUser = await prisma.user.create({
        data,
      });
      return createUser;
    } catch (error) {
      logger.error(`Error creating user: ${error}`);
      throw new Error('Failed to create user');
    }
  }

  public async findByEmail(email: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });
      return user;
    } catch (error) {
      logger.error(`Error finding user by email: ${error}`);
      throw new Error('Failed to find user by email');
    }
  }

  public async findByIdAndDelete(id: string): Promise<User | null> {
    try {
      return await prisma.user.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      logger.error(`Error deleting user: ${error}`);
      throw new Error('Failed to delete user');
    }
  }

  public async findByIdAndUpdate(
    id: string,
    data: Prisma.UserUncheckedUpdateInput,
  ): Promise<User> {
    try {
      const updateUser = await prisma.user.update({
        where: {
          id,
        },
        data,
      });
      return updateUser;
    } catch (error) {
      logger.error(`Error updating user: ${error}`);
      throw new Error('Failed to update user');
    }
  }

  public async findById(id: string): Promise<User | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      logger.error(`Error finding user by id: ${error}`);
      throw new Error('Failed to find user by id');
    }
  }
}
