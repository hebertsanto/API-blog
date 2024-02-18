import { CreateUserUseCase } from '../../user/createUserUseCase';
import { PrismaUserRepository } from '../../../infra/adapters/repositories/prisma/prisma-user-repository';

export async function makeCreateUserUseCase() {
  const userRepository = new PrismaUserRepository();
  const useCase = new CreateUserUseCase(userRepository);

  return useCase;
}
