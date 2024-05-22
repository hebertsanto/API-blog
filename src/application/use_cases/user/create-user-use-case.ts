import { PrismaUserRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';
import { UserRequest, UserResponse } from '../../../utils/interfaces';
import { hash } from 'bcrypt';
import { MissingParamError, UserAlreadyExistError } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class CreateUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  public async execute({ name, password, email }: UserRequest): Promise<UserResponse> {
    if (!name) throw new MissingParamError('name');
    if (!password) throw new MissingParamError('password');
    if (!email) throw new MissingParamError('email');

    try {
      const passwordhash = await hash(password, 6);
      const existentUser = await this.userRepository.findByEmail(email);

      if (existentUser?.email) {
        logger.info(`[${existentUser} aready exist]`);
        throw new UserAlreadyExistError();
      }
      const user = await this.userRepository.create({
        name,
        email,
        password: passwordhash,
      });

      return {
        user,
      };
    } catch (error) {
      logger.error(`Some error has been ocurred ${error}`);
      throw new Error('Unable create a new user');
    }
  }
}
