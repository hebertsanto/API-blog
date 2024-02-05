import { DeleteUserRepository } from '../../../adapters/repositories/user/deleteUserRepository';

export class DeleteUserUseCase {
  constructor(private deleteUser: DeleteUserRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('id not found');
    }
    await this.deleteUser.execute(id);
  }
}
