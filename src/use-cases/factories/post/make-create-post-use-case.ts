import { PrismaPostRespository } from '../../../adapters/repositories/prisma/prisma-post-repository';
import { CreatePostUseCase } from '../../post/create-post-use-case';

export async function makeCreatePostUseCase() {
  const createPostRepository = new PrismaPostRespository();
  const createPostUseCase = new CreatePostUseCase(createPostRepository);
  return createPostUseCase;
}
