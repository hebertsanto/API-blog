import { DeleteCommentRepository } from '../../../adapters/repositories/comments/deleteCommentRepository';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class DeleteCommentUseCase {
  private delete: DeleteCommentRepository;

  constructor() {
    this.delete = new DeleteCommentRepository();
  }
  async execute(id: number) {
    if (!id) {
      throw new MissingParamError('id comment');
    }
    await this.delete.execute(id);
  }
}
