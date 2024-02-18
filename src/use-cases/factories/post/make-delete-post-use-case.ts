import { PrismaPostRespository } from '../../../adapters/repositories/prisma/prisma-post-repository';
import { DeletePostUseCase } from '../../post/delete-post-use-case';

export async function makeDeletePostUseCase() {
  const deleteRepository = new PrismaPostRespository();

  const deletePostUseCase = new DeletePostUseCase(deleteRepository);

  return deletePostUseCase;
}
