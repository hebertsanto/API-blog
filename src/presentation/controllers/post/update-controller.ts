import { Request, Response } from 'express';
import { makeUpdatePostUseCase } from '../../../use-cases/factories/post/make-update-post-use-case';
import { ParamDoesNotExist, UserNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';

export const updatePostController = async (req: Request, res: Response) => {

  const paramsZodValidationSchema = z.object({
    id: z.string().uuid()
  });

  const updatePostZodValidationSchema = z.object({
    id: z.string().uuid(),
    title: z.string(),
    content: z.string(),
    userId: z.string().uuid()
  });

  const { id } = paramsZodValidationSchema.parse(req.params);

  const { title, content, userId } = updatePostZodValidationSchema.parse(req.body);

  const makeUpdate = await makeUpdatePostUseCase();

  try {
    const updatedPost = await makeUpdate.execute(
      id,
      {
        title,
        content,
        userId,
      },
      userId,
    );

    return res.status(200).json({
      msg: 'post has been updated successfully',
      updatedPost,
    });
  } catch (error) {
    if (error instanceof UserNotExist) {
      return res.status(404).json({
        msg: 'user do not exit',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'post id does not exist',
      });
    }
  }
};
