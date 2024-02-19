import { Request, Response } from 'express';
import { makeCreatePostUseCase } from '../../../use-cases/factories/post/make-create-post-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';

export const createPost = async (req: Request, res: Response) => {
  const createPostUseCase = await makeCreatePostUseCase();

  const createPostZodValidationSchema = z.object({
    title: z.string().uuid(),
    content: z.string(),
    userId: z.string().uuid(),
  });

  const { title, content, userId } = createPostZodValidationSchema.parse(
    req.body,
  );

  try {
    const makePost = await createPostUseCase.execute({
      title,
      content,
      userId,
    });

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
