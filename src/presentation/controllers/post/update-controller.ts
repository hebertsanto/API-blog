import { Request, Response } from 'express';
import { makeUpdatePostUseCase } from '../../../application/use_cases/factories/post/make-update-post-use-case';
import { z } from 'zod';
import { handleRequestController } from '../../request-controller';

export class UpdatePostController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const paramsZodValidationSchema = z.object({
      id: z.string().uuid(),
    });

    const updatePostZodValidationSchema = z.object({
      id: z.string().uuid(),
      title: z.string(),
      content: z.string(),
      userId: z.string().uuid(),
    });

    const { id } = paramsZodValidationSchema.parse(req.params);

    const { title, content, userId } = updatePostZodValidationSchema.parse(req.body);

    const makeUpdate = await makeUpdatePostUseCase();

    try {
      const updatedPost = await makeUpdate.execute(id, {
        title,
        content,
        userId,
      });

      return res.status(200).json({
        msg: 'post has been updated successfully',
        updatedPost,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
