import { prisma } from '../../database/prismaClient';

export class DeletePostRepository {
  async execute(id: string) {
    return await prisma.post.delete({
      where: { id: id },
    });
  }
}
