import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { UserResponse } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';
import { GetUserByIdUseCase } from './getUserUseCase';

export class DeleteUserUseCase {
  constructor(
    private userRepositoy: PrismaUserRepository,
    private userService: GetUserByIdUseCase,
  ) {}

  async execute(id: string): Promise<UserResponse | void> {
    const user = await this.userService.findUserById(id);

    if (!id) {
      throw new MissingParamError('user_id');
    }

    if (!user) {
      throw new ParamDoesNotExist('user_id');
    }

    await this.userRepositoy.findByIdAndDelete(id);

  }
}
