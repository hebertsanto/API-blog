import { CreateCommentRepository } from '../../adapters/repositories/comments/create-comment-repository';
import { IComment } from '../../utils/@types';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';
import { prisma } from '../../adapters/database/prismaClient';

export class CreateCommentUseCase {
  constructor(private createCommentRepository: CreateCommentRepository) {}
  async execute({ comment, postId }: IComment) {
    if (!comment) {
      throw new MissingParamError('comment');
    }
    const verifyPostExist = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!verifyPostExist) {
      throw new ParamDoesNotExist('post id not exit');
    }

    const createComment = await this.createCommentRepository.execute({
      comment,
      postId,
    });

    return createComment;
  }
}
