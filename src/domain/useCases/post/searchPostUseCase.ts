import { SearchPostRepository } from '../../../adapters/repositories/post/searchPostRepository';

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
