import { DeletePostRepository } from '../../../adapters/repositories/post/delete-post-repository';
import { DeletePostUseCase } from '../../post/delete-post-use-case';

export async function makeDeletePostUseCase() {
  const deleteRepository = new DeletePostRepository();

  const deletePostUseCase = new DeletePostUseCase(deleteRepository);

  return deletePostUseCase;
}
