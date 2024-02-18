import { PrismaUserRepository } from '../../adapters/repositories/prisma/prisma-user-repository';
import { MissingParamError } from '../../utils/errors/index.';
import { Encrypter } from '../../utils/helpers/encrypter';
import { TokenGenerator } from '../../utils/helpers/tokenGenerator';
import { ParamDoesNotExist } from '../../utils/errors/index.';
import { PasswordDoesNotMatch } from '../../utils/errors/index.';

export class AuthUseCase {
  private encrypter: Encrypter;
  private user: PrismaUserRepository;
  private acesstoken: TokenGenerator;

  constructor() {
    this.encrypter = new Encrypter();
    this.user = new PrismaUserRepository();
    this.acesstoken = new TokenGenerator();
  }
  async auth(email: string, password: string) {
    if (!email) {
      throw new MissingParamError('email');
    }
    if (!password) {
      throw new MissingParamError('pasword');
    }
    const user = await this.user.findByEmail(email);

    if (!user?.email) {
      throw new ParamDoesNotExist('user dot not exist');
    }
    const isValidPassword = await this.encrypter.compare(
      password,
      user?.password as string,
    );

    if (!isValidPassword) {
      throw new PasswordDoesNotMatch();
    }
    const token = await this.acesstoken.generateToken(user.id);
    return {
      user,
      token,
    };
  }
}
