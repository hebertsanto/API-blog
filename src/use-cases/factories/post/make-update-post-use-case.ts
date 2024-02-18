import { PrismaPostRespository } from '../../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PrismaUserRepository } from '../../../infra/adapters/repositories/prisma/prisma-user-repository';
import { UpdatePostUseCase } from '../../post/update-post-use-case';

export async function makeUpdatePostUseCase() {
  const updateRepositpory = new PrismaPostRespository();
  const userUseCase = new PrismaUserRepository();

  const updateUseCase = new UpdatePostUseCase(updateRepositpory, userUseCase);

  return updateUseCase;
}
