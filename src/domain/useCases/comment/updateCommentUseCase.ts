import { UpdateCommentRepository } from '../../../adapters/repositories/comments/updateCommentRepository';
import { IComment } from '../../../utils/@types';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class UpdateCommentUseCase {
  private updateComment: UpdateCommentRepository;

  constructor() {
    this.updateComment = new UpdateCommentRepository();
  }
  async execute(id: string, data: IComment) {
    if (!id) {
      throw new MissingParamError('id');
    }
    if (!id) {
      throw new MissingParamError('data');
    }

    const updatedComment = await this.updateComment.execute(id, data);

    return updatedComment;
  }
}
