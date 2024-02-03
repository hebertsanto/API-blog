import { prisma } from '../../database/primaClient';

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
