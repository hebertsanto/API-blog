import { PrismaPostRespository } from '../../../infra/database/prisma/prisma_repositories/prisma-post-repository';
import { PostResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';

export class GetPostByIdUseCase {
  constructor(private post: PrismaPostRespository) {}
  async findById(id: string): Promise<PostResponse | null> {
    if (!id) {
      throw new MissingParamError('post_id');
    }

    const post = await this.post.findById(id);

    if (!post) {
      throw new ParamDoesNotExist('post_id');
    }

    return {
      post,
    };
  }
}
