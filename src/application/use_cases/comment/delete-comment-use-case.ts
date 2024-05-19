import { PrismaCommentRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/interfaces';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';
import { GetCommentUseCase } from './get-comment-use-case';

export class DeleteCommentUseCase {
  constructor(
    private deleteCommentRepository: PrismaCommentRepository,
    private getCommentService: GetCommentUseCase,
  ) {}

  public async execute(id: string): Promise<CommentResponse | void> {
    if (!id) throw new MissingParamError('comment_id');

    try {
      await this.getCommentService.execute(id);
      await this.deleteCommentRepository.findByIdAndDelete(id);
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
