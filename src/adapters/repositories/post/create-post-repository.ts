import { IPost } from '../../../utils/@types';
import { prisma } from '../../database/prismaClient';

export class CreatePostRepository {
  async execute({ title, content, userId }: IPost) {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        userId,
      },
    });
    return newPost;
  }
}