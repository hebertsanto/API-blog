import { UpdatePostRepository } from '../../../adapters/repositories/post/updatePostRepository';
import { IPost } from '../../../utils/@types';

export class UpdatePostUseCase {
  private update: UpdatePostRepository;

  constructor() {
    this.update = new UpdatePostRepository();
  }

  async execute(id: number, data: IPost) {
    const postid = await this.update.findPost(id);
    if (!postid) {
      throw new Error('id not found');
    }
    const updatePost = await this.update.execute(id, data);

    return updatePost;
  }
}
