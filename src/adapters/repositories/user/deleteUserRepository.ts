import { prisma } from '../../database/prismaClient';

export class DeleteUserRepository {
  async execute(id: number) {
    const deleteUser = await prisma.user.delete({
      where: { id: id },
    });

    const deleteAllPosts = await prisma.post.deleteMany({
      where: { userId: id },
    });
    return {
      deleteUser,
      deleteAllPosts,
    };
  }
}
