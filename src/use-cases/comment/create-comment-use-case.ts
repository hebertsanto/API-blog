import { IComment } from '../../utils/@types';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';
import { prisma } from '../../adapters/database/prismaClient';
import { PrismaCommentRepository } from '../../adapters/repositories/prisma/prisma-comment-repository';
import { CreateComment } from '../../domain/use-cases/comment/create-comment-use-case';

export class CreateCommentUseCase implements CreateComment {
  constructor(private createCommentRepository: PrismaCommentRepository) {}
  async create({ comment, postId }: IComment) {
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
