
import {  MissingParamError, ParamDoesNotExist} from '../../utils/errors/index.';
import { prisma } from '../../infra/adapters/database/prismaClient';
import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { GetUserByIdUseCase } from '../user/getUserUseCase';
import { CommentRequest, CommentResponse} from '../../utils/@interfaces';

export class CreateCommentUseCase  {
  constructor(
    private createCommentRepository: PrismaCommentRepository,
    private userService : GetUserByIdUseCase
  ) {}

  async create({ comment, postId, userId }: CommentRequest): Promise<CommentResponse> {
    await this.userService.findUserById(userId);
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

    const commentResponse = await this.createCommentRepository.create({
      comment,
      postId,
      userId,
    });

    return {
      commentResponse
    };
  }
}
