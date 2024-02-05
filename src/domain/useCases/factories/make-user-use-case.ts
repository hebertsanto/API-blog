import { CreateUserUseCase } from '../user/createUserUseCase';
import { CreateUserRepository } from '../../../adapters/repositories/user/createUserRepository';

export function makeCreateUserUseCase() {
  const userRepository = new CreateUserRepository();
  const useCase = new CreateUserUseCase(userRepository);

  return useCase;
}
