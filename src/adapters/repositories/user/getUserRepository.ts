import { prisma } from '../../database/primaClient';

export class GetUserRepository {
  async execute(id: number) {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });
    return user;
  }
  async findeUserByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    return {
      id: user?.id,
      email: user?.email,
      password: user?.password,
    };
  }
}
