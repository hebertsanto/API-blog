import { GetUserRepository } from '../../../adapters/repositories/user/get-user-repository';
import { MissingParamError } from '../../../utils/errors/missingParamError';
import { Encrypter } from '../../../utils/helpers/encrypter';
import { TokenGenerator } from '../../../utils/helpers/tokenGenerator';

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
    const userFound = await this.user.findeUserByEmail(email);
    if (!userFound) {
      return {
        msg: 'email not found on database',
      };
    }
    const isValid =
      userFound &&
      (await this.encrypter.compare(password, String(userFound?.password)));
    if (!isValid) {
      return {
        msg: 'Invalid email or password',
      };
    }
    const token = await this.acesstoken.generateToken(userFound.id);
    return {
      msg: 'user make login sucessfully',
      user: userFound,
      token,
    };
  }
}
