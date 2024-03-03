import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { CreateUserUseCase } from '../../user/createUserUseCase';

export async function makeCreateUserUseCase() {
  const userRepository = new PrismaUserRepository();
  const useCase = new CreateUserUseCase(userRepository);

  return useCase;
}
