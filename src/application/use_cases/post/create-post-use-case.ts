import { PrismaPostRespository } from '../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PostRequest, PostResponse } from '../../../utils/@interfaces';
import { MissingParamError } from '../../../utils/errors/index.';
import { logger } from '../../../utils/logger';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class CreatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}
  public async create({ title, content, userId }: PostRequest): Promise<PostResponse> {
    try {
      if (!title) throw new MissingParamError('title');
      if (!content) throw new MissingParamError('content');
      if (!userId) throw new MissingParamError('user_id');

      await this.userService.findUserById(userId);

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
