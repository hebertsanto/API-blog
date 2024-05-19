import { PrismaUserRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';
import { UserResponse } from '../../../utils/interfaces';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class GetUserByIdUseCase {
  constructor(private getUserRepository: PrismaUserRepository) {}

  public async execute(id: string): Promise<UserResponse | null> {
    if (!id) throw new MissingParamError('user_id');

    try {
      const user = await this.getUserRepository.findById(id);
      if (!user) {
        throw new ParamDoesNotExist('user_id');
      }

      return {
        user,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw new Error('Unable get user');
    }
  }
}
