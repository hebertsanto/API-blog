import { DeleteUserRepository } from '../../../adapters/repositories/user/delete-user-repository';
import { DeleteUserUseCase } from '../../user/deleteUserUseCase';

export async function makeDeleteUserUseCase() {
  const deleteUserRepository = new DeleteUserRepository();
  const deleleteUseCase = new DeleteUserUseCase(deleteUserRepository);

  return  deleleteUseCase;
}
