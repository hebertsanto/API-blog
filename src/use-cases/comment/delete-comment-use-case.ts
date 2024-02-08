import { DeleteCommentRepository } from '../../adapters/repositories/comments/delete-comment-repository';

export class DeleteCommentUseCase {
  constructor(private deleteComment : DeleteCommentRepository) {}
  async execute(id: string) {
    await this.deleteComment.execute(id);
  }
}
