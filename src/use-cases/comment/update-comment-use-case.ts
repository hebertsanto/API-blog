import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { MissingParamError } from '../../utils/errors/index.';
import { CommentRequest, CommentResponse } from '../../utils/@interfaces';

export class UpdateCommentUseCase {
  constructor(private updateComment: PrismaCommentRepository) {}

  async update(
    id: string,
    data: CommentRequest,
  ): Promise<CommentResponse | null> {
    if (!id) {
      throw new MissingParamError('id');
    }
    if (!id) {
      throw new MissingParamError('data');
    }

    const commentResponse = await this.updateComment.findByIdAndUpdate(
      id,
      data,
    );

    return {
      commentResponse,
    };
  }
}
