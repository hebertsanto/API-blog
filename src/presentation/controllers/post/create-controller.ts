import { Request, Response } from 'express';
import { makeCreatePostUseCase } from '../../../use-cases/factories/post/make-create-post-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const createPost = async (req: Request, res: Response) => {
  const createPostUseCase = await makeCreatePostUseCase();
  const { title, content, userId } = req.body;

  try {
    const makePost = await createPostUseCase.execute({ title, content, userId });

    return res.status(200).json({
      msg: 'post created successfully',
      post: makePost,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'userId not found',
      });
    }
  }
};
