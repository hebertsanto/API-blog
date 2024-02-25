import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { CommentResponse } from '../../utils/@interfaces';
import { GetCommentUseCase } from './get-comment-use-case';

export class DeleteCommentUseCase {
  constructor(
    private deleteComment: PrismaCommentRepository,
    private getCommentService: GetCommentUseCase
  ) {}

  async findByIdAndDelete(id: string): Promise<CommentResponse | void> {
    await this.getCommentService.findById(id);
    await this.deleteComment.findByIdAndDelete(id);
  }
}
