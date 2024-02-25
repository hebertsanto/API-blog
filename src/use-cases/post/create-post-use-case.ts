import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { PostRequest, PostResponse } from '../../utils/@interfaces';
import { GetUserByIdUseCase } from '../user/getUserUseCase';

export class CreatePostUseCase {
  constructor(
    private createPostRepository: PrismaPostRespository,
    private userService: GetUserByIdUseCase,
  ) {}
  async create({ title, content, userId }: PostRequest): Promise<PostResponse> {
    await this.userService.findUserById(userId);

    const post = await this.createPostRepository.create({
      title,
      content,
      userId,
    });

    return {
      post,
    };
  }
}
