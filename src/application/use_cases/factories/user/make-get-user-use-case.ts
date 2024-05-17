import { GetUserByIdUseCase } from '../../user/getUserUseCase';
import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';

export async function makeGetUserUseCase() {
  const userRepository = new PrismaUserRepository();
  const user = new GetUserByIdUseCase(userRepository);

  return user;
}
