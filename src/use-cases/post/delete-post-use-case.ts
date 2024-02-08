import { DeletePostRepository } from '../../adapters/repositories/post/delete-post-repository';

export class DeletePostUseCase {
  constructor(private deleteService: DeletePostRepository) {}
  async execute(id: string) {
    const post = await this.deleteService.execute(id);
    return post;
  }
}
