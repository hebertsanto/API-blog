import { GetCommentByIdRepository } from '../../adapters/repositories/comments/get-comment-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class GetCommentUseCase {
  constructor(private comment: GetCommentByIdRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.execute(id);
    if (!commentFound) {
      throw new ParamDoesNotExist('comment id does not exist');
    }
    return commentFound;
  }
}
