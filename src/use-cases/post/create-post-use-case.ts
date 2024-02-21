import { PrismaPostRespository } from '../../infra/adapters/repositories/prisma/prisma-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { IPost } from '../../utils/@interfaces';
import { makeGetUserUseCase } from '../factories/user/make-get-user-use-case';
import { CreatePost } from '../../domain/use-cases/post/create-post-use-case';

export class CreatePostUseCase implements CreatePost {
  constructor(private createPostRepository: PrismaPostRespository) {}
  async create({ title, content, userId }: IPost) : Promise<IPost> {
    const makeUser = await makeGetUserUseCase();
    const user = await makeUser.execute(userId);
    if (!user) {
      throw new ParamDoesNotExist('userId');
    }
    const createPost = await this.createPostRepository.create({
      title,
      content,
      userId,
    });

    return createPost;
  }
}
