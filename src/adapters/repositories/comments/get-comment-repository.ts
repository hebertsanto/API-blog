import { prisma } from '../../database/prismaClient';

export class GetCommentByIdRepository {
  async execute(id: string) {
    const comment = await prisma.comment.findUnique({
      where: {
        id: id,
      },
    });
    return comment;
  }
}
