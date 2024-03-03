import { Request, Response } from 'express';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';
import makeUpdateCategoryUseCase from '../../../aplication/use_cases/factories/category/make-update-category';

export const updateCategory = async (request: Request, response: Response) => {
  const updateCategoryUseCase = await makeUpdateCategoryUseCase();

  const categoryValidationSchema = z.object({
    id: z.string().uuid(),
    name: z.string(),
    postId: z.string().uuid(),
  });

  const { id, name, postId } = categoryValidationSchema.parse(request.body);

  try {
    const updatedCategory = await updateCategoryUseCase.execute(id, {
      id,
      name,
      postId
    });

    return response.status(200).json({
      message: 'Category was updated',
      updatedCategory,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return response.status(400).json({
        message: 'Post id does not exist',
        error,
      });
    }
    Logger.error(`Some error occurred in updateCategory controller: ${error}`);
  }
};
