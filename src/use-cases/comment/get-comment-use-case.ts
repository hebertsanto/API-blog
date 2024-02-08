import { GetCommentByIdRepository } from '../../adapters/repositories/comments/get-comment-repository';
import { MissingParamError } from '../../utils/errors/index.';

export class GetCommentUseCase {
  constructor(private comment: GetCommentByIdRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.execute(id);

    return commentFound;
  }
}
