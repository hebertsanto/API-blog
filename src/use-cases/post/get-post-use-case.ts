import { GetPostByIdRepository } from '../../adapters/repositories/post/get-post-repository';

export class GetPostByIdUseCase {
  constructor(private post: GetPostByIdRepository) {}
  async execute(id: string) {
    const postFound = await this.post.execute(id);
    return postFound;
  }
}
