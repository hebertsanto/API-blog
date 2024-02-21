import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { IUser } from '../../utils/@interfaces';

export class DeleteUserUseCase {
  constructor(private deleteUser: PrismaUserRepository) {}

  async execute(id: string) : Promise<IUser | null> {
    if (!id) {
      throw new Error('id not found');
    }
    const deleteUser = await this.deleteUser.findByIdAndDelete(id);

    return deleteUser;
  }
}
