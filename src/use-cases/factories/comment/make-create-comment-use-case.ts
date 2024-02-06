import { CreateCommentRepository } from '../../../adapters/repositories/comments/create-comment-repository';
import { CreateCommentUseCase } from '../../comment/create-comment-use-case';

export async function makeCreateComment() {
  const createCommentRepository = new CreateCommentRepository();
  const createCommentUseCase = new CreateCommentUseCase(createCommentRepository);

  return createCommentUseCase;
}
