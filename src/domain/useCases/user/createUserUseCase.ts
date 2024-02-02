import { CreateUserRepository} from '../../../adapters/repositories/user/createUserRepository';

export class UserUseCase {
  private userRepository: CreateUserRepository;

  constructor() {
    this.userRepository = new CreateUserRepository();
  }
  
  async create(name: string, password: string, email: string) {
    const userExist = await this.userRepository.findEmail(email);

    if(userExist){
      throw new Error('this user already exists');
    }
    
    const user = await this.userRepository.execute({
      name,
      email,
      password
    });
    return user;
  }
}
