import { PrimaCommentRepository } from '../../../adapters/repositories/prisma/prisma-comment-repository';
import { GetCommentUseCase } from '../../comment/get-comment-use-case';

export async function makeGetCommentByIdUseCase() {
  const getCommentRepository = new PrimaCommentRepository();
  const getCommentUseCase = new GetCommentUseCase(getCommentRepository);

  return getCommentUseCase;
}
