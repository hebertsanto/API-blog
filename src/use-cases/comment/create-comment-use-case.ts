import { IComment } from '../../utils/@types';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';
import { prisma } from '../../adapters/database/prismaClient';
import { PrimaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';

export class CreateCommentUseCase {
  constructor(private createCommentRepository: PrimaCommentRepository) {}
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

    const createComment = await this.createCommentRepository.create({
      comment,
      postId,
    });

    return createComment;
  }
}
