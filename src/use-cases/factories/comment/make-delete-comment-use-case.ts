import { DeleteCommentRepository } from '../../../adapters/repositories/comments/delete-comment-repository';
import { DeleteCommentUseCase } from '../../comment/delete-comment-use-case';

export async function makeDeleteCommentUseCase() {
  const deleteCommentRepository = new DeleteCommentRepository();
  const deleteCommentUseCase = new DeleteCommentUseCase(deleteCommentRepository);

  return deleteCommentUseCase;
}
