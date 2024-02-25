import { PrismaCommentRepository } from '../../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { DeleteCommentUseCase } from '../../comment/delete-comment-use-case';
import { GetCommentUseCase } from '../../comment/get-comment-use-case';

export async function makeDeleteCommentUseCase() {
  const deleteCommentRepository = new PrismaCommentRepository();
  const getCommentByIdService = new GetCommentUseCase(deleteCommentRepository);

  const deleteCommentUseCase = new DeleteCommentUseCase(
    deleteCommentRepository,
    getCommentByIdService
  );

  return deleteCommentUseCase;
}
