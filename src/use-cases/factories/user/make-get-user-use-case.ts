import { GetUserByIdUseCase } from '../../user/getUserUseCase';
import { GetUserRepository } from '../../../adapters/repositories/user/get-user-repository';

export function makeGetUserUseCase() {
  const userRepository = new GetUserRepository();
  const user = new GetUserByIdUseCase(userRepository);

  return user;
}
