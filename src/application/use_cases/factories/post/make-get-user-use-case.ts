import { PrismaPostRespository } from '../../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';
import { GetPostByIdUseCase } from '../../post/get-post-use-case';

export async function makeGetPostByIdUseCase() {
  const postRepository = new PrismaPostRespository();
  const postUseCase = new GetPostByIdUseCase(postRepository);

  return postUseCase;
}
