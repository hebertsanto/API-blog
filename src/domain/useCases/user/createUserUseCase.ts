import { CreateUserRepository } from '../../../adapters/repositories/user/createUserRepository';
import { IUser } from '../../../utils/@types';
import bcrypt from 'bcrypt';

export class UserUseCase {
  private userRepository: CreateUserRepository;

  constructor() {
    this.userRepository = new CreateUserRepository();
  }

  async create({ name, password, email }: IUser) {
    const passwordhash = await this.hash(password);
    const newUser = await this.userRepository.execute({
      name,
      email,
      password: String(passwordhash),
    });
    return newUser;
  }
  async findUserExist(user: string) {
    const existerUser = await this.userRepository.findEmail(user);
    return existerUser;
  }
  async hash(password: string) {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (error) {
      return error;
    }
  }
}
