import { DeletePostRepository } from '../../adapters/repositories/post/delete-post-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class DeletePostUseCase {
  constructor(private deleteService: DeletePostRepository) {}
  async execute(id: string) {
    const post = await this.deleteService.execute(id);
    if (!id) {
      throw new MissingParamError('postId');
    }
    if (!post) {
      throw new ParamDoesNotExist('postId');
    }
    return post;
  }
}
