import { CreateUserRepository } from '../../../adapters/repositories/user/createUserRepository';
import { IUser } from '../../../utils/@types';
import { hash } from 'bcrypt';
import { MissingParamError } from '../../../utils/errors/missingParamError';

export class CreateUserUseCase {
  constructor(private userRepository: CreateUserRepository) {}

  async create({ name, password, email }: IUser) {
    if (!name) {
      throw new MissingParamError('name');
    }
    if (!password) {
      throw new MissingParamError('name');
    }
    if (!email) {
      throw new MissingParamError('name');
    }
    const passwordhash = await hash(password, 6);
    const verifyUserExists = await this.userRepository.findEmail(email);

    if (verifyUserExists) {
      throw new Error('user already exists');
    }
    const user = await this.userRepository.execute({
      name,
      email,
      password: String(passwordhash),
    });
    return {
      user,
    };
  }
}
