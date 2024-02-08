import { CreateUserRepository } from '../../adapters/repositories/user/create-user-repository';
import { IUser } from '../../utils/@types';
import { hash } from 'bcrypt';
import {
  MissingParamError,
  UserAlreadyExistError,
} from '../../utils/errors/index.';

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

    if (verifyUserExists?.email) {
      throw new UserAlreadyExistError();
    }

    const user = await this.userRepository.execute({
      name,
      email,
      password: passwordhash,
    });
    return user;
  }
}
