import { GetPostByIdRepository } from '../../../adapters/repositories/post/get-post-repository';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class GetPostByIdUseCase {
  private post: GetPostByIdRepository;

  constructor() {
    this.post = new GetPostByIdRepository();
  }

  async execute(id: string) {
    const postFound = await this.post.execute(id);

    if (!id) {
      throw new MissingParamError('id');
    }
    return postFound;
  }
}
