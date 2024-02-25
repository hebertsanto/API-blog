import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { UserResponse } from '../../utils/@interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';
import { GetUserByIdUseCase } from './getUserUseCase';

export class DeleteUserUseCase {
  constructor(
    private deleteUser: PrismaUserRepository,
    private userService : GetUserByIdUseCase
  ) {}

  async execute(id: string): Promise<UserResponse | void> {
    const user = await this.userService.findUserById(id);

    if (!id) {
      throw new MissingParamError('user id not found on request');
    }

    if (!user) {
      throw new ParamDoesNotExist(`this user id ${id} does not exist`);
    }

    await this.deleteUser.findByIdAndDelete(id);
  }
}
