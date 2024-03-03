import { PrismaUserRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { UserResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';
import { GetUserByIdUseCase } from './getUserUseCase';

export class DeleteUserUseCase {
  constructor(
    private userRepositoy: PrismaUserRepository,
    private userService: GetUserByIdUseCase,
  ) {}

  async execute(id: string): Promise<UserResponse | void> {
    try {
      const user = await this.userService.findUserById(id);

      if (!id) throw new MissingParamError('user_id');

      if (!user) throw new ParamDoesNotExist('user_id');

      await this.userRepositoy.findByIdAndDelete(id);
    } catch (error) {
      Logger.error(`some error ocurred ${error}`);
      throw error;
    }

  }
}
