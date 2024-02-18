import { PrismaCommentRepository } from '../../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { GetCommentUseCase } from '../../comment/get-comment-use-case';

export async function makeGetCommentByIdUseCase() {
  const getCommentRepository = new PrismaCommentRepository();
  const getCommentUseCase = new GetCommentUseCase(getCommentRepository);

  return getCommentUseCase;
}
