import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostRequest, PostResponse } from '../../utils/@interfaces';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class UpdatePostUseCase {
  constructor(
    private updateUseCase: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}

  async update(id: string, data: PostRequest): Promise<PostResponse | null> {
    await this.userService.findUserById(data.userId);

    const postId = await this.updateUseCase.findById(id);

    if (!postId) {
      throw new ParamDoesNotExist('post id does not exist');
    }
    const post = await this.updateUseCase.findByIdAndUpdate(id, data);

    return {
      post,
    };
  }
}
