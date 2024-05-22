import { PrismaUserRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { Encrypter } from '../../../utils/helpers/encrypter';
import { JwtService } from '../../../utils/helpers/tokenGenerator';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { PasswordDoesNotMatch } from '../../../utils/errors/index.';
import { logger } from '../../../infrastructure/logger';

export class AuthUseCase {
  constructor(
    private encrypter: Encrypter,
    private user: PrismaUserRepository,
    private acesstoken: JwtService,
  ) {}

  public async execute(email: string, password: string) {
    if (!email) throw new MissingParamError('email');
    if (!password) throw new MissingParamError('pasword');

    try {
      const existentUser = await this.user.findByEmail(email);

      if (!existentUser?.email) {
        throw new ParamDoesNotExist('user dot not exist');
      }

      const isValidPassword = await this.encrypter.compare(
        password,
        existentUser?.password as string,
      );

      if (!isValidPassword) {
        throw new PasswordDoesNotMatch();
      }

      const token = await this.acesstoken.generateToken(existentUser.id);

      return {
        existentUser,
        token,
      };
    } catch (error) {
      logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
