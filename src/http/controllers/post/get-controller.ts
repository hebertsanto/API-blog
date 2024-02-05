import { Request, Response } from 'express';
import { GetPostByIdUseCase } from '../../../use-cases/post/get-post-use-case';

const postUseCase = new GetPostByIdUseCase();

export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await postUseCase.execute(id);

    if (!post) {
      return res.status(400).json({
        msg: 'post not found',
      });
    }
    return res.status(200).json({
      msg: 'post found successfully',
      post,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred controller',
      error,
    });
  }
};
