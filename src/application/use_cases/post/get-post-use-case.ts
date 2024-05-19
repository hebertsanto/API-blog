import { PrismaPostRespository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-post-repository';
import { PostResponse } from '../../../utils/interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class GetPostByIdUseCase {
  constructor(private post: PrismaPostRespository) {}
  public async execute(id: string): Promise<PostResponse | null> {
    try {
      if (!id) throw new MissingParamError('post_id');

      const post = await this.post.findById(id);

      if (!post) throw new ParamDoesNotExist('post_id');
      return {
        post,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
