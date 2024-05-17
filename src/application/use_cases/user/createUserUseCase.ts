import { PrismaUserRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { UserRequest, UserResponse } from '../../../utils/@interfaces';
import { hash } from 'bcrypt';
import {
  MissingParamError,
  UserAlreadyExistError,
} from '../../../utils/errors/index.';
import { logger } from '../../../utils/logger';

export class CreateUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  public async create({ name, password, email }: UserRequest): Promise<UserResponse> {
    try {
      if (!name) throw new MissingParamError('name');
      if (!password) throw new MissingParamError('password');
      if (!email) throw new MissingParamError('email');

      const passwordhash = await hash(password, 6);

      const verifyUserExists = await this.userRepository.findByEmail(email);

      if (verifyUserExists?.email) throw new UserAlreadyExistError();

      const user = await this.userRepository.create({
        name,
        email,
        password: passwordhash,
      });

      return {
        user,
      };
    } catch (error) {
      logger.error(`An error occurred: ${error}`);
      throw error;
    }
  }
}
