import { GetCommentByIdRepository } from '../../../adapters/repositories/comments/get-comment-repository';
import { GetCommentUseCase } from '../../comment/get-comment-use-case';

export async function makeGetCommentByIdUseCase() {
  const getCommentRepository = new GetCommentByIdRepository();
  const getCommentUseCase = new GetCommentUseCase(getCommentRepository);

  return getCommentUseCase;
}
