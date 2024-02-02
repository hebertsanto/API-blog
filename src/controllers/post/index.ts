import { Request, Response } from 'express';
import { CreatePostUseCase } from '../../domain/useCases/post/postUseCase';

const newPost = new CreatePostUseCase();

export const createPost = async (req: Request, res: Response) => {
  try {
    const { title, content, userId } = req.body;
    const post = await newPost.execute(title, content, userId);

    return res.status(200).json({
      msg: 'post created successfully',
      post,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error,
    });
  }
};
