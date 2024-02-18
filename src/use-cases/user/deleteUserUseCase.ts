import { PrismaUserRepository } from '../../adapters/repositories/prisma/prisma-user-repository';

export class DeleteUserUseCase {
  constructor(private deleteUser: PrismaUserRepository) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('id not found');
    }
    const deleteUser = await this.deleteUser.findByIdAndDelete(id);

    return deleteUser;
  }
}
