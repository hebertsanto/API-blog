import { PrismaPostRespository } from '../../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { CreatePostUseCase } from '../../post/create-post-use-case';
import { GetUserByIdUseCase } from '../../user/getUserUseCase';

export async function makeCreatePostUseCase() {
  const createPostRepository = new PrismaPostRespository();
  const userRepository = new PrismaUserRepository();
  const userService = new GetUserByIdUseCase(userRepository);

  const createPostUseCase = new CreatePostUseCase(
    createPostRepository,
    userService,
  );

  return createPostUseCase;
}
