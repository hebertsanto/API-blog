import { Request, Response } from 'express';
import makeFindCategoryUseCase from '../../../application/use_cases/factories/category/make-find-category';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class FindCategoryController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const findCategoryUseCase = await makeFindCategoryUseCase();

    const validateQueryParam = z.object({
      id: z.string().uuid(),
    });

    const { id } = validateQueryParam.parse(req.body);

    try {
      const categoryFound = await findCategoryUseCase.execute(id);

      return res.status(200).json({
        message: 'Category found',
        categoryFound,
      });
    } catch (error) {
      return res.status(500);
    }
  }
}
