import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostResponse } from '../../utils/@interfaces';
import { ParamDoesNotExist } from '../../utils/errors/index.';

export class GetPostByIdUseCase {
  constructor(private post: PrismaPostRespository) {}
  async findById(id: string): Promise<PostResponse | null> {
    const post = await this.post.findById(id);

    if (!post) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    return {
      post,
    };
  }
}
