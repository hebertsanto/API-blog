import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/@interfaces';
import { GetCommentUseCase } from './get-comment-use-case';

export class DeleteCommentUseCase {
  constructor(
    private deleteCommentRepository: PrismaCommentRepository,
    private getCommentService: GetCommentUseCase,
  ) {}

  async findByIdAndDelete(id: string): Promise<CommentResponse | void> {
    await this.getCommentService.findById(id);
    await this.deleteCommentRepository.findByIdAndDelete(id);
  }
}
