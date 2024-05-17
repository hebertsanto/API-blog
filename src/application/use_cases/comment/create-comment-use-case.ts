import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { GetUserByIdUseCase } from '../user/getUserUseCase';
import { CommentRequest, CommentResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { prisma } from '../../../infra/database/prisma/client/prismaClient';
import { Logger } from '../../../utils/logger';

export class CreateCommentUseCase {
  constructor(
    private createCommentRepository: PrismaCommentRepository,
    private userService: GetUserByIdUseCase,
  ) {}

  async create({
    comment,
    postId,
    userId,
  }: CommentRequest): Promise<CommentResponse> {
    try {
      if (!comment) throw new MissingParamError('comment');

      if (!postId) throw new MissingParamError('post_id');

      if (!userId) throw new MissingParamError('user_id');

      const verifyPostExist = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (!verifyPostExist) throw new ParamDoesNotExist('post_id');

      await this.userService.findUserById(userId);

      const commentResponse = await this.createCommentRepository.create({
        comment,
        postId,
        userId,
      });

      return {
        commentResponse,
      };
    } catch (error) {
      Logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
