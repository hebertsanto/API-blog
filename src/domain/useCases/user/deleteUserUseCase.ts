import { DeleteUserRepository } from '../../../adapters/repositories/user/delete-user-repository';

export class DeleteUserUseCase {
  constructor(private deleteUser: DeleteUserRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('id not found');
    }
    await this.deleteUser.execute(id);
  }
}
