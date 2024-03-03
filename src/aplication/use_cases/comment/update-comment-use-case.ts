import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { CommentRequest, CommentResponse } from '../../../utils/@interfaces';
import { Logger } from '../../../utils/logger';

export class UpdateCommentUseCase {
  constructor(private updateComment: PrismaCommentRepository) {}

  async update(
    id: string,
    data: CommentRequest,
  ): Promise<CommentResponse | null> {
    try {
      if (!id) throw new MissingParamError('id');

      const commentResponse = await this.updateComment.findByIdAndUpdate(
        id,
        data,
      );

      return {
        commentResponse,
      };
    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
