import { PrismaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';
import { UpdateComment } from '../../domain/use-cases/comment/update-comment-use-case';
import { IComment } from '../../utils/@types';
import { MissingParamError } from '../../utils/errors/index.';

export class UpdateCommentUseCase implements UpdateComment {

  constructor(private updateComment: PrismaCommentRepository) {}

  async update(id: string, data: IComment) {
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
