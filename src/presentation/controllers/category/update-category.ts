import { Request, Response } from 'express';
import makeUpdateCategoryUseCase from '../../../application/use_cases/factories/category/make-update-category';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class UpdateCategoryController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const updateCategoryUseCase = await makeUpdateCategoryUseCase();

    const categoryValidationSchema = z.object({
      id: z.string().uuid(),
      name: z.string(),
      postId: z.string().uuid(),
    });

    const { id, name, postId } = categoryValidationSchema.parse(req.body);

    try {
      const updatedCategory = await updateCategoryUseCase.execute(id, {
        id,
        name,
        postId,
      });

      return res.status(200).json({
        message: 'Category was updated',
        updatedCategory,
      });
    } catch (error) {
      return res.status(500);
    }
  }
}
