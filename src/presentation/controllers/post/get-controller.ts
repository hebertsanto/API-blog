import { Request, Response } from 'express';
import { makeGetPostByIdUseCase } from '../../../application/use_cases/factories/post/make-get-user-use-case';
import { z } from 'zod';
import { handleRequestController } from '../../request-controller';

export class GetPostController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const makeGetPostById = await makeGetPostByIdUseCase();

    const paramsZodValidationSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsZodValidationSchema.parse(req.params);

    try {
      const post = await makeGetPostById.execute(id);

      return res.status(200).json({
        msg: 'post found successfully',
        post,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
