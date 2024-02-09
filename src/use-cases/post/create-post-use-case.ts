import { CreatePostRepository } from '../../adapters/repositories/post/create-post-repository';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { IPost } from '../../utils/@types';
import { makeGetUserUseCase } from '../factories/user/make-get-user-use-case';

export class CreatePostUseCase {
  constructor(private createPostRepository: CreatePostRepository) {}
  async execute({ title, content, userId }: IPost) {
    const makeUser = await makeGetUserUseCase();
    const user = await makeUser.execute(userId);
    if (!user) {
      throw new ParamDoesNotExist('userId');
    }
    const createPost = await this.createPostRepository.execute({
      title,
      content,
      userId,
    });

    return createPost;
  }
}
