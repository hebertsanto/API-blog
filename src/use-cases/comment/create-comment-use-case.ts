import { CreateCommentRepository } from '../../adapters/repositories/comments/create-comment-repository';
import { IComment } from '../../utils/@types';
import { MissingParamError } from '../../utils/errors/index.';

export class CreateCommentUseCase {
  constructor(private createCommentRepository: CreateCommentRepository) {}
  async execute({ comment, postId }: IComment) {
    if (!comment) {
      throw new MissingParamError('comment');
    }
    if (!postId) {
      throw new MissingParamError('comment');
    }
    const createComment = await this.createCommentRepository.execute({
      comment,
      postId,
    });

    return {
      msg: 'comment created successfully',
      comment: createComment,
    };
  }
}
