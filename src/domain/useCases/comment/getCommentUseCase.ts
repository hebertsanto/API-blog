import { GetCommentById } from '../../../adapters/repositories/comments/getCommentRepository';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class GetCommentUseCase {
  comment: GetCommentById;

  constructor() {
    this.comment = new GetCommentById();
  }

  async execute(id: number) {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.execute(id);

    return commentFound;
  }
}
