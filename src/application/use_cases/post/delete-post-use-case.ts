import { PrismaPostRespository } from '../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PostResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class DeletePostUseCase {
  constructor(private postRepository: PrismaPostRespository) {}

  async delete(id: string): Promise<PostResponse | void> {
    try {
      const post = await this.postRepository.findByIdAndDelete(id);

      if (!id) new MissingParamError('id');

      if (!post) throw new ParamDoesNotExist('post_id');
    } catch (error) {
      Logger.error(`some error ocurred ${error}`);
      throw error;
    }
  }
}
