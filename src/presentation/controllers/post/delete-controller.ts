import { Request, Response } from 'express';
import { makeDeletePostUseCase } from '../../../application/use_cases/factories/post/make-delete-post-use-case';
import { z } from 'zod';
import { handleRequestController } from '../../request-controller';

export class RemovePostController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const makeDeletePost = await makeDeletePostUseCase();

    const paramsZodValidationSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsZodValidationSchema.parse(req.params);

    try {
      await makeDeletePost.execute(id);

      return res.status(200).json({
        msg: 'this post has been deleted',
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
