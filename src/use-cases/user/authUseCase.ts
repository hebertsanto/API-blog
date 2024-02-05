import { GetUserRepository } from '../../adapters/repositories/user/get-user-repository';
import { MissingParamError } from '../../utils/errors/missingParamError';
import { Encrypter } from '../../utils/helpers/encrypter';
import { TokenGenerator } from '../../utils/helpers/tokenGenerator';
import { UserDoesNotExists } from '../../utils/errors/missingParamError';
import { PasswordDoesNotMatch } from '../../utils/errors/missingParamError';

export class AuthUseCase {
  private encrypter: Encrypter;
  private user: GetUserRepository;
  private acesstoken: TokenGenerator;

  constructor() {
    this.encrypter = new Encrypter();
    this.user = new GetUserRepository();
    this.acesstoken = new TokenGenerator();
  }
  async auth(email: string, password: string) {
    if (!email) {
      throw new MissingParamError('email');
    }
    if (!password) {
      throw new MissingParamError('pasword');
    }
    const user = await this.user.findeUserByEmail(email);

    if (!user.email) {
      throw new UserDoesNotExists();
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
