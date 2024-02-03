import { prisma  } from '../../database/prismaClient';

export class GetCommentById {
  async execute(id: number) {
    const comment = await prisma.comment.findUnique({
      where: {
        id: id
      }
    });
    return comment;
  }
}
