import { Request, Response } from 'express';
import { makeDeletePostUseCase } from '../../../use-cases/factories/post/make-delete-post-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';

export const deletePost = async (req: Request, res: Response) => {
  const makeDeletePost = await makeDeletePostUseCase();

  const paramsZodValidationSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsZodValidationSchema.parse(req.params);

  try {
    await makeDeletePost.delete(id);

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
