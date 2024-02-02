import { IUser } from '../../../utils/@types';
import { prisma } from '../../database/primaClient';

export class CreateUserRepository {
  async execute({ name, email, password }: IUser) {
    const newuser = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    });
    return newuser;
  }
  async findEmail(email : string) {
    return await prisma.user.findUnique({
      where: {
        email
      }
    });
  }
}
