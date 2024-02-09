import { prisma } from '../../adapters/database/prismaClient';
import { DeleteCommentRepository } from '../../adapters/repositories/comments/delete-comment-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { makeGetCommentByIdUseCase } from '../factories/comment/make-get-comment-use-case';
export class DeleteCommentUseCase {
  constructor(private deleteComment: DeleteCommentRepository) {}

  async execute(id: string) {
    const makeGetComment = await makeGetCommentByIdUseCase();
    const comment = await makeGetComment.execute(id);
    if (!comment) {
      throw new ParamDoesNotExist('id do comentário não existe');
    }
    await prisma.comment.delete({
      where: {
        id: id
      }
    });
  }
}
