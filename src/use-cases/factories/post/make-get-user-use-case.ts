import { PrismaPostRespository } from '../../../infra/adapters/repositories/prisma/prisma-post-repository';
import { GetPostByIdUseCase } from '../../post/get-post-use-case';

export async function makeGetPostByIdUseCase() {
  const postRepository = new PrismaPostRespository();
  const postUseCase = new GetPostByIdUseCase(postRepository);

  return postUseCase;
}
