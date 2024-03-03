import { PrismaPostRespository } from '../../../../infra/database/prisma/prisma-post-repository';
import { SearchPostUseCase } from '../../post/search-post-use-case';

export async function makeSearchPostsUseCase() {
  const postRepositoy = new PrismaPostRespository();
  const searPostUseCase = new SearchPostUseCase(postRepositoy);

  return searPostUseCase;
}
