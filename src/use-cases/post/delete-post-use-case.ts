import { DeletePostRepository } from '../../adapters/repositories/post/delete-post-repository';
import { MissingParamError } from '../../utils/errors/index.';

export class DeletePostUseCase {
  private delete: DeletePostRepository;

  constructor() {
    this.delete = new DeletePostRepository();
  }

  async execute(id: string) {
    const post = await this.delete.execute(id);
    if (!id) {
      throw new MissingParamError('id');
    }
    return post;
  }
}
