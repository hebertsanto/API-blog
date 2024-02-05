import { Request, Response } from 'express';
import { makeCreatePostUseCase } from '../../../use-cases/factories/post/make-create-post-use-case';
import { UserIdDoeNotExistError } from '../../../use-cases/post/create-post-use-case';



export const createPost = async (req: Request, res: Response) => {

  const createPostUseCase = await makeCreatePostUseCase();
  const { title, content, userId } = req.body;

  try {

    const makePost = await createPostUseCase.execute(title, content, userId);
    return res.status(200).json({
      msg: 'post created successfully',
      post : makePost
    });
  } catch (error) {
    if (error instanceof UserIdDoeNotExistError) {
      return res.status(400).json({
        msg: 'id is required'
      });
    }
  }
};
