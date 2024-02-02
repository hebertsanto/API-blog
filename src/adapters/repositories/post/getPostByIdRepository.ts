import { prisma } from '../../database/primaClient';

export class GetPostByIdRepository {
  async execute(id: number) {
    const post = await prisma.post.findUnique({
      where:{
        id: id
      }
    });
    return post;
  }
}
