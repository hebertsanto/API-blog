import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { PostRequest, PostResponse } from '../../utils/@interfaces';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class CreatePostUseCase {
  constructor(
    private createPostRepository: PrismaPostRespository,
    private userService : GetUserByIdUseCase

  ) {}
  async create({ title, content, userId }: PostRequest): Promise<PostResponse> {

    const user = await this.userService.findUserById(userId);
    if (!user) {
      throw new ParamDoesNotExist('userId');
    }

    const post = await this.createPostRepository.create({
      title,
      content,
      userId,
    });

    return {
      post
    };
  }
}
