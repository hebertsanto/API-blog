import { CreatePostRepository } from '../../../adapters/repositories/post/createPostRepository';

export class CreatePostUseCase{
  private createPost: CreatePostRepository;

  constructor(){
    this.createPost = new CreatePostRepository();
  }
  async execute(title: string, content: string, userId: number){
    const createPost = await this.createPost.execute({
      title,
      content,
      userId
    });
    return createPost;
  }
}