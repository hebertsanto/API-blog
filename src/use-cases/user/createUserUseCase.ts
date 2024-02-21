import { PrismaUserRepository } from '../../infra/adapters/repositories/prisma/prisma-user-repository';
import { IUser } from '../../utils/@interfaces';
import { hash } from 'bcrypt';
import {
  MissingParamError,
  UserAlreadyExistError,
} from '../../utils/errors/index.';

export class CreateUserUseCase {
  constructor(private userRepository: PrismaUserRepository) {}

  async create({ name, password, email }: IUser) : Promise<IUser> {
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
    const verifyUserExists = await this.userRepository.findByEmail(email);

    if (verifyUserExists?.email) {
      throw new UserAlreadyExistError();
    }

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordhash,
    });
    return user;
  }
}
