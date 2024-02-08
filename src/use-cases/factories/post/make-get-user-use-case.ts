import { GetPostByIdRepository } from '../../../adapters/repositories/post/get-post-repository';
import { GetPostByIdUseCase } from '../../post/get-post-use-case';

export async function makeGetPostByIdUseCase() {
  const postRepository = new GetPostByIdRepository();
  const postUseCase = new GetPostByIdUseCase(postRepository);

  return postUseCase;
}
