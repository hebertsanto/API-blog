import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { GetUserByIdUseCase } from '../user/get-user-use-case';
import { CommentRequest, CommentResponse } from '../../../utils/@interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { prisma } from '../../../infra/database/prisma/client/prisma-client';
import { logger } from '../../../utils/logger';

export class CreateCommentUseCase {
  constructor(
    private createCommentRepository: PrismaCommentRepository,
    private userService: GetUserByIdUseCase,
  ) {}

  public async execute({
    comment,
    postId,
    userId,
  }: CommentRequest): Promise<CommentResponse> {
    if (!comment) throw new MissingParamError('comment');
    if (!postId) throw new MissingParamError('post_id');
    if (!userId) throw new MissingParamError('user_id');

    try {
      const post = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });

      if (!post) throw new ParamDoesNotExist('post_id');

      await this.userService.execute(userId);

      const commentResponse = await this.createCommentRepository.create({
        comment,
        postId,
        userId,
      });

      return {
        commentResponse,
      };
    } catch (error) {
      logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
