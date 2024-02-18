import { PrismaCommentRepository } from '../../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { DeleteCommentUseCase } from '../../comment/delete-comment-use-case';

export async function makeDeleteCommentUseCase() {
  const deleteCommentRepository = new PrismaCommentRepository();
  const deleteCommentUseCase = new DeleteCommentUseCase(deleteCommentRepository);

  return deleteCommentUseCase;
}
