import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostRequest, PostResponse } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class UpdatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}

  async update(id: string, data: PostRequest): Promise<PostResponse | null> {
    if (!id) {
      throw new MissingParamError('post_id');
    }

    await this.userService.findUserById(data.userId);

    const postId = await this.postRepository.findById(id);

    if (!postId) {
      throw new ParamDoesNotExist('post_id');
    }

    const post = await this.postRepository.findByIdAndUpdate(id, data);

    return {
      post,
    };
  }
}
