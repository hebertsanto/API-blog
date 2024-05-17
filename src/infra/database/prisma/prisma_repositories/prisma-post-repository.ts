import { Post, Prisma } from '@prisma/client';
import { PostRepository } from '../../../../application/repositories/post-repository';
import { prisma } from '../client/prismaClient';
import { Logger } from '../../../../utils/logger';

export class PrismaPostRespository implements PostRepository {
  public async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    try {
      const createPost = await prisma.post.create({
        data,
      });
      return createPost;
    } catch (error) {
      Logger.error(`Error creating post: ${error}`);
      throw error;
    }
  }

  public async findById(id: string): Promise<Post | null> {
    try {
      const post = await prisma.post.findUnique({
        where: {
          id,
        },
      });
      return post;
    } catch (error) {
      Logger.error(`Error finding post by ID: ${error}`);
      throw error;
    }
  }

  public async findByIdAndDelete(id: string): Promise<Post | null> {
    try {
      return await prisma.post.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      Logger.error(`Error updating post by ID: ${error}`);
      throw error;
    }
  }

  public async findByIdAndUpdate(
    id: string,
    data: Prisma.PostUncheckedUpdateInput,
  ): Promise<Post> {
    try {
      const updatePost = await prisma.post.update({
        where: {
          id,
        },
        data,
      });
      return updatePost;
    } catch (error) {
      Logger.error(`Error deleting post by ID: ${error}`);
      throw error;
    }
  }
}
