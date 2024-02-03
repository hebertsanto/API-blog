import { CreateUserRepository } from '../../../adapters/repositories/user/createUserRepository';
import { IUser } from '../../../utils/@types';
import { HashPassword } from '../../../utils/helpers/hash';

export class UserUseCase {
  private userRepository: CreateUserRepository;
  private passwordHash: HashPassword;
  constructor() {
    this.userRepository = new CreateUserRepository();
    this.passwordHash = new HashPassword();
  }

  async create({ name, password, email }: IUser) {
    if (!name || !password || email) {
      throw new Error('all params are required');
    }
    const passwordhash = await this.passwordHash.hash(password);

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
}
