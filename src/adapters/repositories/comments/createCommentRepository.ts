import { IComment } from '../../../utils/@types';
import { prisma } from '../../database/prismaClient';

export class CreateCommentRepository {
  async execute({ comment, postId }: IComment) {
    const createComment = await prisma.comment.create({
      data: {
        comment: comment,
        post: {
          connect: {
            id: postId,
          },
        },
      },
    });
    return createComment;
  }
}
