import { GetPostByIdRepository } from '../../adapters/repositories/post/get-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';

export class GetPostByIdUseCase {
  constructor(private post: GetPostByIdRepository) {}
  async execute(id: string) {
    const postFound = await this.post.execute(id);

    if (!postFound) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    return postFound;
  }
}
