import { UpdatePostRepository } from '../../adapters/repositories/post/update-post-repository';
import { IPost } from '../../utils/@types';

export class UpdatePostUseCase {
  constructor(private updateUseCase: UpdatePostRepository) {}
  async execute(id: string, data: IPost) {
    const updatePost = await this.updateUseCase.execute(id, data);

    return updatePost;
  }
}
