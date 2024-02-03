import { ListCommentsRepository } from '../../../adapters/repositories/comments/listCommentaryPostRepository';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class ListCommentsUseCase {
  private Listcomments: ListCommentsRepository;

  constructor() {
    this.Listcomments = new ListCommentsRepository();
  }

  async execute(userId: number) {
    if (!userId) {
      throw new MissingParamError('userid');
    }
    const commentsFound = await this.Listcomments.execute(userId);

    return commentsFound;
  }
}
