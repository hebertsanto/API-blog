import { IPost } from '../../../utils/@types';
import { prisma } from '../../database/primaClient';

export class UpdatePostRepository {
  async execute(id: number, data: IPost) {
    const updatePost = await prisma.post.update({
      where: {
        id: id,
      },
      data: {
        ...data,
      },
    });
    return updatePost;
  }
  async findPost(id: number) {
    const postFound = await prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return postFound;
  }
}
