import { ListCommentsRepository } from '../../adapters/repositories/comments/list-comment-repository';
import { MissingParamError } from '../../utils/errors/missingParamError';

export class ListCommentsUseCase {
  private Listcomments: ListCommentsRepository;

  constructor() {
    this.Listcomments = new ListCommentsRepository();
  }

  async execute(userId: string) {
    if (!userId) {
      throw new MissingParamError('userid');
    }
    const listComments = await this.Listcomments.execute(userId);

    return listComments;
  }
}
