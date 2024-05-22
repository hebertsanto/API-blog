import { PrismaCommentRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-comment-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { CommentRequest, CommentResponse } from '../../../utils/interfaces';
import { logger } from '../../../infrastructure/logger';

export class UpdateCommentUseCase {
  constructor(private updateComment: PrismaCommentRepository) {}

  public async execute(
    id: string,
    data: CommentRequest,
  ): Promise<CommentResponse | null> {
    if (!id) throw new MissingParamError('id');

    try {
      const commentResponse = await this.updateComment.findByIdAndUpdate(id, data);

      return {
        commentResponse,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw new Error('Unable update comment');
    }
  }
}
