import { CreatePostRepository } from '../../adapters/repositories/post/create-post-repository';

export class UserIdDoeNotExistError extends Error {
  constructor() {
    super('user id not found');
  }
}

export class CreatePostUseCase {
  constructor(private createPostRepository: CreatePostRepository) {}
  async execute(title: string, content: string, userId: string) {
    const createPost = await this.createPostRepository.execute({
      title,
      content,
      userId,
    });
    return createPost;
  }
}
