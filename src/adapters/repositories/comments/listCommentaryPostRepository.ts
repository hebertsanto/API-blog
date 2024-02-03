import { prisma } from '../../database/prismaClient';

export class ListCommentsRepository {
  async execute(userId: number) {
    const commentsFound = await prisma.comment.findMany({
      where: {
        id: userId,
      },
      include: {
        post: { include: { Comment: true } },
      },
    });
    return commentsFound;
  }
}
