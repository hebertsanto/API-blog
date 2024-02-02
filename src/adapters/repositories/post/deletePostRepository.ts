import { prisma } from '../../database/primaClient';

export class DeletePostRepository {
  async execute(id: number) {
    return await prisma.post.delete({
      where: { id: id },
    });
  }
}
