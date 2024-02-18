import { PrismaPostRespository } from '../../../infra/adapters/repositories/prisma/prisma-post-repository';
import { UpdatePostUseCase } from '../../post/update-post-use-case';

export async function makeUpdatePostUseCase() {
  const updateRepositpory = new PrismaPostRespository();

  const updateUseCase = new UpdatePostUseCase(updateRepositpory);

  return updateUseCase;
}
