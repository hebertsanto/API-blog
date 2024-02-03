import { IUser } from '../../../utils/@types';
import { prisma } from '../../database/primaClient';

export class CreateUserRepository {
  async execute({ name, email, password }: IUser) {
    const newuser = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });
    return newuser;
  }
  async findEmail(userEmail: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    return user;
  }
}
