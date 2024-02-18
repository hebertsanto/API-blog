import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { IPost } from '../../utils/@types';

export class UpdatePostUseCase {
  constructor(private updateUseCase: PrismaPostRespository) {}
  async execute(id: string, data: IPost) {
    const updatePost = await this.updateUseCase.findByIdAndUpdate(id, data);

    return updatePost;
  }
}
