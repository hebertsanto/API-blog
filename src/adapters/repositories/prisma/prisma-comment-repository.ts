import { Prisma, Comment } from '@prisma/client';
import { CommentRepository } from '../comment-repository';
import { prisma } from '../../database/prismaClient';

export class PrismaCommentRepository implements CommentRepository {
  public async create(
    data: Prisma.CommentUncheckedCreateInput,
  ): Promise<Comment> {
    const comment = await prisma.comment.create({
      data,
    });

    return comment;
  }
  public async findById(id: string): Promise<Comment | null> {
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });
    return comment;
  }
  public async findByIdAndDelete(id: string): Promise<Comment | null> {
    return await prisma.comment.delete({
      where: {
        id,
      },
    });
  }
  public async findByIdAndUpdate(
    id: string,
    data: Prisma.CommentUncheckedUpdateInput,
  ): Promise<Comment> {
    const updateComment = await prisma.comment.update({
      where: {
        id,
      },
      data:{
        ...data
      },
    });

    return updateComment;
  }
}
