import { CreateCommentRepository } from '../../../adapters/repositories/comments/create-comment-repository';
import { IComment } from '../../../utils/@types';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class CreateCommentUseCase {
  private createComment: CreateCommentRepository;

  constructor() {
    this.createComment = new CreateCommentRepository();
  }
  async execute({ comment, postId }: IComment) {
    if (!comment) {
      throw new MissingParamError('comment');
    }
    if (!postId) {
      throw new MissingParamError('comment');
    }
    const createComment = await this.createComment.execute({
      comment,
      postId,
    });
    return {
      msg: 'comment created successfully',
      comment: createComment,
    };
  }
}
