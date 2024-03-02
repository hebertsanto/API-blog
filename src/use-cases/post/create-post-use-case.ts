import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostRequest, PostResponse } from '../../utils/@interfaces';
import { MissingParamError } from '../../utils/errors/index.';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class CreatePostUseCase {
  constructor(
    private postRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}
  async create({ title, content, userId }: PostRequest): Promise<PostResponse> {
    if (!title) {
      throw new MissingParamError('title');
    }

    if (!content) {
      throw new MissingParamError('content');
    }

    if (!userId) {
      throw new MissingParamError('user_id');
    }

    await this.userService.findUserById(userId);

    const post = await this.postRepository.create({
      title,
      content,
      userId,
    });

    return {
      post,
    };
  }
}
