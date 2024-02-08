import { SearchPostRepository } from '../../../adapters/repositories/post/search-post-repository';
import { SearchPostUseCase } from '../../post/search-post-use-case';

export async function makeSearchPostsUseCase() {
  const postRepositoy = new SearchPostRepository();
  const searPostUseCase = new SearchPostUseCase(postRepositoy);

  return searPostUseCase;
}
