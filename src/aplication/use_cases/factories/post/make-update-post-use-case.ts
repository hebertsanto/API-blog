import { PrismaPostRespository } from '../../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { UpdatePostUseCase } from '../../post/update-post-use-case';
import { GetUserByIdUseCase } from '../../user/getUserUseCase';

export async function makeUpdatePostUseCase() {
  const updateRepositpory = new PrismaPostRespository();
  const userRepository = new PrismaUserRepository();
  const userService = new GetUserByIdUseCase(userRepository);

  const updateUseCase = new UpdatePostUseCase(updateRepositpory, userService);

  return updateUseCase;
}
