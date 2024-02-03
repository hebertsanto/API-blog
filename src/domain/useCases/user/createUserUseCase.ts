import { CreateUserRepository } from '../../../adapters/repositories/user/createUserRepository';
import { IUser } from '../../../utils/@types';

export class UserUseCase {
  private userRepository: CreateUserRepository;

  constructor() {
    this.userRepository = new CreateUserRepository();
  }

  async create({ name, password, email }: IUser) {
    const newUser = await this.userRepository.execute({
      name,
      email,
      password,
    });
    return newUser;
  }
  async findUserExist(user: string) {
    const existerUser = await this.userRepository.findEmail(user);
    return existerUser;
  }
}
