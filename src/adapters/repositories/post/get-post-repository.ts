import { prisma } from '../../database/prismaClient';

export class GetPostByIdRepository {
  async execute(id: string) {
    const post = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return post;
  }
}
