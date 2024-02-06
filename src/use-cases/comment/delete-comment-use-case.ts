import { DeleteCommentRepository } from '../../adapters/repositories/comments/delete-comment-repository';
import { MissingParamError } from '../../utils/errors/index.';

export class DeleteCommentUseCase {
  private delete: DeleteCommentRepository;

  constructor() {
    this.delete = new DeleteCommentRepository();
  }
  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id comment');
    }
    await this.delete.execute(id);
  }
}
