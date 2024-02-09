import { prisma } from '../../database/prismaClient';

export class DeletePostRepository {
  async execute(id: string) {
    await prisma.comment.deleteMany({
      where: {
        postId: id,
      },
    });

    return await prisma.post.delete({
      where: { id: id },
    });
  }
}
