import { PrismaPostRespository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';
import { PostRequest, PostResponse } from '../../../utils/interfaces';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';
import { GetUserByIdUseCase } from '../user/get-user-use-case';

export class CreatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}
  public async execute({ title, content, userId }: PostRequest): Promise<PostResponse> {
    if (!title) throw new MissingParamError('title');
    if (!content) throw new MissingParamError('content');
    if (!userId) throw new MissingParamError('user_id');

    try {
      await this.userService.execute(userId);

      const post = await this.postRepository.create({
        title,
        content,
        userId,
      });

      return {
        post,
      };
    } catch (error) {
      logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
