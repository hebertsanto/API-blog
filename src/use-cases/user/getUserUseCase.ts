import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { IUser } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class GetUserByIdUseCase {

  constructor(private getUserRepository: PrismaUserRepository) {}

  async execute(id: string) : Promise<IUser | null> {
    if (!id) {
      throw new MissingParamError('id is required');
    }

    const user = await this.getUserRepository.findById(id);
    if (!user) {
      throw new ParamDoesNotExist('this user not exist');
    }
    return user;
  }
}
