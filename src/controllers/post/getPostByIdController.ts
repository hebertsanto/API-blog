import { Request, Response } from 'express';
import { GetPostByIdUseCase } from '../../domain/useCases/post/getPostByIdUseCase';

const postUseCase = new GetPostByIdUseCase();

export const getPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await postUseCase.execute(parseInt(id));
    return res.status(200).json({
      msg: 'post found successfully',
      post,
    });
  } catch (error) {
    res.status(400).json({
      msg: 'some error occurred',
      error,
    });
  }
};
