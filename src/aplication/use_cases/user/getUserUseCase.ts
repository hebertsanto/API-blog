import { PrismaUserRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { UserResponse } from '../../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class GetUserByIdUseCase {
  constructor(private getUserRepository: PrismaUserRepository) {}

  async findUserById(id: string): Promise<UserResponse | null> {
    try {
      if (!id) throw new MissingParamError('user_id');

      const user = await this.getUserRepository.findById(id);

      if (!user) throw new ParamDoesNotExist('user_id');

      return {
        user,
      };

    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
