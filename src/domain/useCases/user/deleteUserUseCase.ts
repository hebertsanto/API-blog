import { DeleteUserRepository } from '../../../adapters/repositories/user/deleteUserRepository';

export class DeleteUserUseCase {
  private deleteUser: DeleteUserRepository;

  constructor() {
    this.deleteUser = new DeleteUserRepository();
  }
  async execute(id: number) {
    if (!id) {
      throw new Error('id not found');
    }
    await this.deleteUser.execute(id);
  }
}
