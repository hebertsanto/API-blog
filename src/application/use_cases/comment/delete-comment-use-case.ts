import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/@interfaces';
import { Logger } from '../../../utils/logger';
import { GetCommentUseCase } from './get-comment-use-case';

export class DeleteCommentUseCase {
  constructor(
    private deleteCommentRepository: PrismaCommentRepository,
    private getCommentService: GetCommentUseCase,
  ) {}

  async findByIdAndDelete(id: string): Promise<CommentResponse | void> {
    try {
      await this.getCommentService.findById(id);
      await this.deleteCommentRepository.findByIdAndDelete(id);
    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
