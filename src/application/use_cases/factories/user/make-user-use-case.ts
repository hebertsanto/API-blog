import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { CreateUserUseCase } from '../../user/create-user-use-case';

export async function makeCreateUserUseCase() {
  const userRepository = new PrismaUserRepository();
  const useCase = new CreateUserUseCase(userRepository);

  return useCase;
}
