import { PrismaUserRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { UserRequest, UserResponse } from '../../../utils/@interfaces';
import { hash } from 'bcrypt';
import {
  MissingParamError,
  UserAlreadyExistError,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class CreateUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  async create({ name, password, email }: UserRequest): Promise<UserResponse> {
    try {
      if (!name) throw new MissingParamError('name');

      if (!password) throw new MissingParamError('password');

      if (!email) throw new MissingParamError('email');

      const generateHash = await hash(password, 6);

      const verifyUserExists = await this.userRepository.findByEmail(email);

      if (verifyUserExists?.email) throw new UserAlreadyExistError();

      Logger.info('user log in and generate payload');

      const user = await this.userRepository.create({
        name,
        email,
        password: generateHash,
      });

      return {
        user,
      };

    } catch (error) {
      Logger.error(`An error occurred: ${error}`);
      throw error;
    }
  }
}
