import { Request, Response } from 'express';
import { z } from 'zod';
import makeCreateCategoryUseCase from '../../../application/use_cases/factories/category/make-create-category';
import { handleRequestController } from '../../request-controller';

export class AddCategoryController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const addCategoryService = await makeCreateCategoryUseCase();

    const categoryValidationSchema = z.object({
      id: z.string().uuid(),
      name: z.string(),
      postId: z.string().uuid(),
    });

    const { id, name, postId } = categoryValidationSchema.parse(req.body);
    try {
      const addCategory = await addCategoryService.execute({
        id,
        name,
        postId,
      });

      return res.status(200).json({ message: 'Category add', addCategory });
    } catch (error) {
      return res.status(200).json();
    }
  }
}
