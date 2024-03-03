import { PrismaCommentRepository } from '../../../../infra/database/prisma/prisma-comment-repository';
import { UpdateCommentUseCase } from '../../comment/update-comment-use-case';

export async function makeUpdateCommentUseCase() {
  const updateReposository = new PrismaCommentRepository();
  const updateCommentUseCase = new UpdateCommentUseCase(updateReposository);

  return updateCommentUseCase;
}
