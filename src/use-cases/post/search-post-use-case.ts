import { SearchPostRepository } from '../../adapters/repositories/post/search-post-repository';

export class SearchPostUseCase {
  constructor(private posts: SearchPostRepository) {}
  async execute(query: string) {
    const postsFound = await this.posts.execute(query);
    return postsFound;
  }
}
