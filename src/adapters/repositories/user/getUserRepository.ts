import { prisma } from '../../database/primaClient';

export class GetUserRepository{
  async execute(id: number){
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    });
    return user;
  }
  
}