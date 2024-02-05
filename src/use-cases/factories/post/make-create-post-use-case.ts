import { CreatePostRepository } from '../../../adapters/repositories/post/create-post-repository';
import { CreatePostUseCase } from '../../post/create-post-use-case';

export async function makeCreatePostUseCase() {
  const createPostRepository = new CreatePostRepository();
  const createPostUseCase = new CreatePostUseCase(createPostRepository);

  return createPostUseCase;
}
