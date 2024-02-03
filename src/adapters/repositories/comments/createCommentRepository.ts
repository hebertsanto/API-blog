import { IComment } from '../../../utils/@types';
import { prisma } from '../../database/primaClient';

export class CreateCommentRepository {
  async execute({ comment, postId }: IComment) {
    const createComment = await prisma.comment.create({
      data: {
        comment: comment,
        post: {
          connect: {
            id: postId /* ID do post ao qual o comentário está relacionado */,
          },
        },
      },
    });
    return createComment;
  }
}
