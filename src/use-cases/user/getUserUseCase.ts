import { PrismaUserRepository } from '../../adapters/repositories/prisma/prisma-user-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class GetUserByIdUseCase {
  constructor(private getUserRepository: PrismaUserRepository) {}
  async execute(id: string) {
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
