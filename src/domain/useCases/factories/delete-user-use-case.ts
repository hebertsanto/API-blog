import { DeleteUserRepository } from '../../../adapters/repositories/user/deleteUserRepository';
import { DeleteUserUseCase } from '../user/deleteUserUseCase';

export function makeDeleteUserUseCase() {
  const deleteUserRepository = new DeleteUserRepository();
  const deleleteUseCase = new DeleteUserUseCase(deleteUserRepository);

  return deleleteUseCase;
}
