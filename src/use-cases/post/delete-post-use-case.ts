import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostResponse } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class DeletePostUseCase {
  constructor(private postRepository: PrismaPostRespository) {}

  async delete(id: string): Promise<PostResponse | void> {
    const post = await this.postRepository.findByIdAndDelete(id);

    if (!id) {
      throw new MissingParamError('post_id');
    }

    if (!post) {
      throw new ParamDoesNotExist('post_id');
    }
  }
}
