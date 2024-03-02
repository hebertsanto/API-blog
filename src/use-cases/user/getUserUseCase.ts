import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { UserResponse } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class GetUserByIdUseCase {
  constructor(private getUserRepository: PrismaUserRepository) {}

  async findUserById(id: string): Promise<UserResponse | null> {
    if (!id) {
      throw new MissingParamError('user_id');
    }

    const user = await this.getUserRepository.findById(id);

    if (!user) {
      throw new ParamDoesNotExist('user_id');
    }
    return {
      user,
    };
  }
}
