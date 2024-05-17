import { Request, Response } from 'express';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';
import makeCreateCategoryUseCase from '../../../application/use_cases/factories/category/make-create-category';

export const createCategory = async (req: Request, res: Response) => {
  const createCategory = await makeCreateCategoryUseCase();

  const categoryValidationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    postId: z.string().uuid(),
  });

  const { id, name, postId } = categoryValidationSchema.parse(req.body);

  try {
    const categoryCreated = await createCategory.execute({
      id,
      name,
      postId,
    });

    return res.status(200).json({
      msg: 'Category was created',
      categoryCreated,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'Post id does not exist',
        error,
      });
    }
    Logger.error(`Some error occurred in create category controller: ${error}`);
  }
};
