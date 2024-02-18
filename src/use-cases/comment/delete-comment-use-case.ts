import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { DeleteComment } from '../../domain/use-cases/comment/delete-comment-use-case';
import { IComment } from '../../utils/@types';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { makeDeleteCommentUseCase } from '../factories/comment/make-delete-comment-use-case';

export class DeleteCommentUseCase implements DeleteComment {
  constructor(private deleteComment: PrismaCommentRepository) {}

  async findByIdAndDelete(id: string): Promise<IComment | null> {
    const makeGetComment = await makeDeleteCommentUseCase();
    const comment = await makeGetComment.findByIdAndDelete(id);
    if (!comment) {
      throw new ParamDoesNotExist('id do comentário não existe');
    }
    return await this.deleteComment.findByIdAndDelete(id);
  }
}
