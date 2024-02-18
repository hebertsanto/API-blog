import { PrimaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { makeGetCommentByIdUseCase } from '../factories/comment/make-get-comment-use-case';
export class DeleteCommentUseCase {
  constructor(private deleteComment: PrimaCommentRepository) {}

  async execute(id: string) {
    const makeGetComment = await makeGetCommentByIdUseCase();
    const comment = await makeGetComment.execute(id);
    if (!comment) {
      throw new ParamDoesNotExist('id do comentário não existe');
    }
    await this.deleteComment.findByIdAndDelete(id);
  }
}
