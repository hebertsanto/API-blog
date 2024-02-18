import { Request, Response } from 'express';
import { makeDeletePostUseCase } from '../../../use-cases/factories/post/make-delete-post-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const deletePost = async (req: Request, res: Response) => {
  const makeDeletePost = await makeDeletePostUseCase();
  const { id } = req.params;

  try {
    await makeDeletePost.execute(id);

    return res.status(200).json({
      msg: 'this post has been deleted',
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'post does not exist',
      });
    }
  }
};