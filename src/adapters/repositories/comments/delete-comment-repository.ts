import { prisma } from '../../database/prismaClient';

export class DeleteCommentRepository {
  async execute(id: string) {
    await prisma.comment.delete({
      where: {
        id: id,
      },
    });
  }
}
