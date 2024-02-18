import { PrismaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';
import { IComment } from '../../utils/@types';
import { MissingParamError } from '../../utils/errors/index.';

export class UpdateCommentUseCase {
  constructor(private updateComment: PrismaCommentRepository) {}
  async execute(id: string, data: IComment) {
    if (!id) {
      throw new MissingParamError('id');
    }
    if (!id) {
      throw new MissingParamError('data');
    }

    const updatedComment = await this.updateComment.findByIdAndUpdate(id, data);

    return updatedComment;
  }
}
