import { UpdatePostRepository } from '../../../adapters/repositories/post/update-post-repository';
import { UpdatePostUseCase } from '../../post/update-post-use-case';

export async function makeUpdatePostUseCase() {
  const updateRepositpory = new UpdatePostRepository();

  const updateUseCase = new UpdatePostUseCase(updateRepositpory);

  return updateUseCase;

}
