import { Encrypter } from '../../../../utils/helpers/encrypter';
import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma_repositories/prisma-user-repository';
import { JwtService } from '../../../../utils/helpers/tokenGenerator';
import { AuthUseCase } from '../../user/auth-use-case';

export async function makeAuthUseCase() {
  const token = new JwtService();
  const user = new PrismaUserRepository();
  const encrypter = new Encrypter();

  const auth = new AuthUseCase(encrypter, user, token);

  return auth;
}
