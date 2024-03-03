import { Comment, Prisma } from '@prisma/client';
import { CommentRepository } from '../../../../aplication/repositories/comment-repository';
import { prisma } from '../client/prismaClient';
import { Logger } from '../../../../utils/logger';

export class PrismaCommentRepository implements CommentRepository {
  public async create(
    data: Prisma.CommentUncheckedCreateInput,
  ): Promise<Comment> {
    try {
      const comment = await prisma.comment.create({
        data,
      });

      return comment;
    } catch (error) {
      Logger.error(`some error ocurred: ${error}`);
      throw error;
    }
  }

  public async findById(id: string): Promise<Comment | null> {
    try {
      const comment = await prisma.comment.findUnique({
        where: {
          id,
        },
      });
      return comment;
    } catch (error) {
      Logger.error(`Error finding comment by ID: ${error}`);
      throw error;
    }
  }

  public async findByIdAndDelete(id: string): Promise<Comment | null> {
    try {
      return await prisma.comment.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      Logger.error(`Error deleting comment: ${error}`);
      throw error;
    }
  }

  public async findByIdAndUpdate(
    id: string,
    data: Prisma.CommentUncheckedUpdateInput,
  ): Promise<Comment> {
    try {
      const updateComment = await prisma.comment.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });

      return updateComment;
    } catch (error) {
      Logger.error(`Error updating comment: ${error}`);
      throw error;
    }
  }
}
