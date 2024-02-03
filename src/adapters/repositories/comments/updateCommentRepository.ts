import { IComment } from '../../../utils/@types';
import { prisma } from '../../database/prismaClient';

export class UpdateCommentRepository {
  async execute(id: number, data: IComment) {
    const updateComment = await prisma.comment.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updateComment;
  }
}
