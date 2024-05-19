import { PrismaPostRespository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';

export class SearchPostUseCase {
  constructor(private posts: PrismaPostRespository) {}
  async execute(query: string) {
    const postsFound = await this.posts.findById(query);
    return postsFound;
  }
}
