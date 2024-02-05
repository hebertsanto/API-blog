import { SearchPostRepository } from '../../../adapters/repositories/post/search-post-repository';

export class SearchPostUseCase {
  private posts: SearchPostRepository;

  constructor() {
    this.posts = new SearchPostRepository();
  }
  async execute(query: string) {
    const postsFound = await this.posts.execute(query);
    return postsFound;
  }
}
