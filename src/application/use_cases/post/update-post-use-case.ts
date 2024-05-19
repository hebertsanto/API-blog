import { PrismaPostRespository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';
import { PostRequest, PostResponse } from '../../../utils/interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';
import { GetUserByIdUseCase } from '../user/get-user-use-case';

export class UpdatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}

  public async execute(id: string, data: PostRequest): Promise<PostResponse | null> {
    try {
      if (!id) throw new MissingParamError('post_id');
      await this.userService.execute(data.userId);

      const postId = await this.postRepository.findById(id);

      if (!postId) throw new ParamDoesNotExist('post_id');

      const post = await this.postRepository.findByIdAndUpdate(id, data);

      return {
        post,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
