import { Request, Response } from 'express';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';
import makeDeleteCategoryUseCase from '../../../aplication/use_cases/factories/category/make-delete-category';

export const deleteCategory = async (request: Request, response: Response) => {
  const updateCategoryUseCase = await makeDeleteCategoryUseCase();

  const categoryValidationSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = categoryValidationSchema.parse(request.body);

  try {
    const updatedCategory = await updateCategoryUseCase.execute(id);

    return response.status(200).json({
      message: 'Category was updated',
      updatedCategory,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return response.status(400).json({
        message: 'comment id does not exist',
        error,
      });
    }
    Logger.error(`Some error occurred in delete controller: ${error}`);
  }
};
