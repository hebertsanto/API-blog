import { GetPostByIdRepository } from '../../../adapters/repositories/post/getPostByIdRepository';

export class GetPostByIdUseCase {
  private post: GetPostByIdRepository;

  constructor() {
    this.post = new GetPostByIdRepository();
  }

  async execute(id: number) {
    const postFound = await this.post.execute(id);

    if (!postFound) {
      throw new Error('id not found');
    }
    return postFound;
  }
}
