import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';

export class GetPostByIdUseCase {
  constructor(private post: PrismaPostRespository) {}
  async execute(id: string) {
    const postFound = await this.post.findById(id);

    if (!postFound) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    return postFound;
  }
}
