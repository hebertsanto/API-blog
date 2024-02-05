import { prisma } from '../../database/prismaClient';

export class SearchPostRepository {
  async execute(query: string) {
    const posts = await prisma.post.findMany({
      where: {
        content: {
          search: query,
        },
      },
    });
    return posts;
  }
}
