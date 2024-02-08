import { IPost } from '../../../utils/@types';
import { prisma } from '../../database/prismaClient';

export class UpdatePostRepository {
  async execute(id: string, data: IPost) {
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
}
