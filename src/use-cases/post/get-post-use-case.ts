import { findPostById } from '../../domain/use-cases/post/findById-use-case';
import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';

export class GetPostByIdUseCase implements findPostById {
  constructor(private post: PrismaPostRespository) {}
  async findById(id: string) {
    const postFound = await this.post.findById(id);

    if (!postFound) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    return postFound;
  }
}
