import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/@interfaces';
import { logger } from '../../../utils/logger';
import { GetCommentUseCase } from './get-comment-use-case';

export class DeleteCommentUseCase {
  constructor(
    private deleteCommentRepository: PrismaCommentRepository,
    private getCommentService: GetCommentUseCase,
  ) {}

  public async execute(id: string): Promise<CommentResponse | void> {
    try {
      await this.getCommentService.execute(id);
      await this.deleteCommentRepository.findByIdAndDelete(id);
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
