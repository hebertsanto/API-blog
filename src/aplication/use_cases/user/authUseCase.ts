import { PrismaUserRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { MissingParamError } from '../../../utils/errors/index.';
import { Encrypter } from '../../../utils/helpers/encrypter';
import { TokenGenerator } from '../../../utils/helpers/tokenGenerator';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { PasswordDoesNotMatch } from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class AuthUseCase {
  constructor(
    private encrypter: Encrypter,
    private user: PrismaUserRepository,
    private acesstoken: TokenGenerator,
  ) {}

  async auth(email: string, password: string) {
    try {
      if (!email) throw new MissingParamError('email');

      if (!password) throw new MissingParamError('pasword');

      const user = await this.user.findByEmail(email);

      if (!user?.email) throw new ParamDoesNotExist('user dot not exist');

      const isValidPassword = await this.encrypter.compare(
        password,
        user?.password as string,
      );

      if (!isValidPassword) throw new PasswordDoesNotMatch();

      const token = await this.acesstoken.generateToken(user.id);

      return {
        user,
        token,
      };

    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }
  }
}
