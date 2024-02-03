import { prisma} from '../../database/prismaClient';

export class DeleteCommentRepository {
  async execute(id: number) {
    await prisma.comment.delete({
      where: {
        id: id
      }
    });
  }
}
