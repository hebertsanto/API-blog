import { GetCommentById } from '../../adapters/repositories/comments/get-comment-repository';
import { MissingParamError } from '../../utils/errors/missingParamError';

export class GetCommentUseCase {
  comment: GetCommentById;

  constructor() {
    this.comment = new GetCommentById();
  }

  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.execute(id);

    return commentFound;
  }
}
