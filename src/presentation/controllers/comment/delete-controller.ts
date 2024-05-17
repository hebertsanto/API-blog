import { Request, Response } from 'express';
import { makeDeleteCommentUseCase } from '../../../application/use_cases/factories/comment/make-delete-comment-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class RemoveCommentController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const makeDeleteComment = await makeDeleteCommentUseCase();

    const paramsZodSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsZodSchema.parse(req.params);

    try {
      await makeDeleteComment.execute(id);
      return res.status(200).json({
        msg: 'Comment deleted successfully',
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}

