import { PrismaPostRespository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';
import { PostResponse } from '../../../utils/interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class DeletePostUseCase {
  constructor(private postRepository: PrismaPostRespository) {}

  public async execute(id: string): Promise<PostResponse | void> {
    if (!id) new MissingParamError('id');

    try {
      const post = await this.postRepository.findByIdAndDelete(id);
      if (!post) {
        throw new ParamDoesNotExist('post_id');
      }
    } catch (error) {
      logger.error(`some error ocurred ${error}`);
      throw new Error('Unable delete post');
    }
  }
}
