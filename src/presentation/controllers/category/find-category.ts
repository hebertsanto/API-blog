import { Request, Response } from 'express';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';
import makeFindCategoryUseCase from '../../../aplication/use_cases/factories/category/make-find-category';

export const findCategory = async (request: Request, response: Response) => {
  const findCategoryUseCase = await makeFindCategoryUseCase();

  const categoryValidationSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = categoryValidationSchema.parse(request.body);

  try {
    const categoryFound = await findCategoryUseCase.execute(id);

    return response.status(200).json({
      message: 'Category found',
      categoryFound,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return response.status(400).json({
        message: 'category id does not exist',
        error,
      });
    }
    Logger.error(`Some error occurred in delete controller: ${error}`);
  }
};
