import { PrismaCommentRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class GetCommentUseCase {
  constructor(private commentRepository: PrismaCommentRepository) {}

  public async execute(id: string): Promise<CommentResponse | null> {
    try {
      if (!id) throw new MissingParamError('comment_id');

      const commentResponse = await this.commentRepository.findById(id);

      if (!commentResponse) throw new ParamDoesNotExist('comment_id');

      return {
        commentResponse,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
