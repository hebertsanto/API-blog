import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class DeletePostUseCase {
  constructor(private deleteService: PrismaPostRespository) {}
  async execute(id: string) {
    const post = await this.deleteService.findByIdAndDelete(id);
    if (!id) {
      throw new MissingParamError('postId');
    }
    if (!post) {
      throw new ParamDoesNotExist('postId');
    }
    return post;
  }
}
