import { UpdateCommentUseCase } from '../../comment/update-comment-use-case';
import { UpdateCommentRepository } from '../../../adapters/repositories/comments/update-comment-repository';

export async function makeUpdateCommentUseCase() {
  const updateReposository = new UpdateCommentRepository();
  const updateCommentUseCase = new UpdateCommentUseCase(updateReposository);

  return updateCommentUseCase;
}
