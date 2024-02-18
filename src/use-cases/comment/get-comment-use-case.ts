import { PrismaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class GetCommentUseCase {
  constructor(private comment: PrismaCommentRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.findById(id);
    if (!commentFound) {
      throw new ParamDoesNotExist('comment id does not exist');
    }
    return commentFound;
  }
}
