import { Encrypter } from '../../../utils/helpers/encrypter';
import { PrismaUserRepository } from '../../../infra/adapters/repositories/prisma/prisma-user-repository';
import { TokenGenerator } from '../../../utils/helpers/tokenGenerator';
import { AuthUseCase } from '../../user/authUseCase';

export async function makeAuthUseCase() {
  const token = new TokenGenerator();
  const user = new PrismaUserRepository();
  const encrypter = new Encrypter();

  const auth = new AuthUseCase(
    encrypter,
    user,
    token
  );

  return auth;
}