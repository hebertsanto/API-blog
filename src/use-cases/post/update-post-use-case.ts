import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { IPost } from '../../utils/@types';
import { ParamDoesNotExist, UserNotExist } from '../../utils/errors/index.';

export class UpdatePostUseCase {
  constructor(
    private updateUseCase: PrismaPostRespository,
    private userUseCase: PrismaUserRepository
  ) {}
  async execute(id: string, data: IPost, userId : string) {
    const user =  await this.userUseCase.findById(userId);
    if (!user) {
      throw new UserNotExist();
    }
    const postId = await this.updateUseCase.findById(id);

    if (!postId) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    const updatePost = await this.updateUseCase.findByIdAndUpdate(id, data);

    return updatePost;
  }
}
