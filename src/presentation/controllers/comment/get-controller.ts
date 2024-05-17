import { Request, Response } from 'express';
import { makeGetCommentByIdUseCase } from '../../../application/use_cases/factories/comment/make-get-comment-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class GetCommentController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const paramsZodSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsZodSchema.parse(req.params);

    const makeGetCommentById = await makeGetCommentByIdUseCase();

    try {
      const comment = await makeGetCommentById.execute(id);

      return res.status(200).json({
        comment,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
