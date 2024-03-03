import { Post, Prisma } from '@prisma/client';
import { PostRepository } from '../../../aplication/repositories/post-repository';
import { prisma } from '../../../infra/database/prismaClient';

export class PrismaPostRespository implements PostRepository {
  public async create(data: Prisma.PostUncheckedCreateInput): Promise<Post> {
    const createPost = await prisma.post.create({
      data,
    });
    return createPost;
  }
  public async findById(id: string): Promise<Post | null> {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return post;
  }
  public async findByIdAndDelete(id: string): Promise<Post | null> {
    return await prisma.post.delete({
      where: {
        id,
      },
    });
  }
  public async findByIdAndUpdate(
    id: string,
    data: Prisma.PostUncheckedUpdateInput,
  ): Promise<Post> {
    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data,
    });
    return updatePost;
  }
}
