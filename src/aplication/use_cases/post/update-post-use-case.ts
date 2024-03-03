import { PrismaPostRespository } from '../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PostRequest, PostResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class UpdatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}

  async update(id: string, data: PostRequest): Promise<PostResponse | null> {
    try {
      if (!id) throw new MissingParamError('post_id');
      await this.userService.findUserById(data.userId);

      const postId = await this.postRepository.findById(id);

      if (!postId) throw new ParamDoesNotExist('post_id');

      const post = await this.postRepository.findByIdAndUpdate(id, data);

      return {
        post,
      };
    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }

  }
}
