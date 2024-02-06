import { UpdateCommentRepository } from '../../adapters/repositories/comments/update-comment-repository';
import { IComment } from '../../utils/@types';
import { MissingParamError } from '../../utils/errors/index.';

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
