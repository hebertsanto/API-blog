import { UpdateCommentUseCase } from '../../comment/update-comment-use-case';
import { PrismaCommentRepository } from '../../../adapters/repositories/prisma/prisma-comment-repository';

export async function makeUpdateCommentUseCase() {
  const updateReposository = new PrismaCommentRepository();
  const updateCommentUseCase = new UpdateCommentUseCase(updateReposository);

  return updateCommentUseCase;
}
