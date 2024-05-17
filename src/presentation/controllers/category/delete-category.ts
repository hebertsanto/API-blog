import { Request, Response } from 'express';
import makeDeleteCategoryUseCase from '../../../application/use_cases/factories/category/make-delete-category';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class RemoveCategoryController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const removeCategoryService = await makeDeleteCategoryUseCase();

    const validateQueryParam = z.object({
      id: z.string().uuid(),
    });

    const { id } = validateQueryParam.parse(req.body);

    try {
      await removeCategoryService.execute(id);
      return res.status(200).json({ message: 'Category was removed' });
    } catch (error) {
      return res.status(500);
    }
  }
}
