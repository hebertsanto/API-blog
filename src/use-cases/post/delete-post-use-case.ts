import { DeletePost } from '../../domain/use-cases/post/delete-post-use-case';
import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { IPost } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class DeletePostUseCase implements DeletePost {

  constructor(private deleteService: PrismaPostRespository) {}

  async delete(id: string) : Promise<IPost | null> {
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
