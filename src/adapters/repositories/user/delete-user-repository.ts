import { prisma } from '../../database/prismaClient';

export class DeleteUserRepository {
  async execute(id: string) {
    const deleteUser = await prisma.user.delete({
      where: { id: id },
      include:{
        posts:{
          where: {
            userId: id,
          }
        },
      }
    });


    return deleteUser;
  }
}
