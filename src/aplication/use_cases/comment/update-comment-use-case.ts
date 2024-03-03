import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { CommentRequest, CommentResponse } from '../../../utils/@interfaces';

export class UpdateCommentUseCase {
  constructor(private updateComment: PrismaCommentRepository) {}

  async update(
    id: string,
    data: CommentRequest,
  ): Promise<CommentResponse | null> {
    if (!id) {
      throw new MissingParamError('id');
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
