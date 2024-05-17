import { Request, Response } from 'express';
import { makeUpdateCommentUseCase } from '../../../application/use_cases/factories/comment/make-upate-comment-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class UpdateCommentController implements handleRequestController {
  public async handle(req: Request, res : Response): Promise<Response> {
    const updateCommentService = await makeUpdateCommentUseCase();

    const updateCommentZodValidationSchema = z.object({
      comment: z.string(),
      postId: z.string().uuid(),
      userId: z.string().uuid(),
    });

    const paramsZodValidationSchema = z.object({
      id: z.string().uuid(),
    });

    try {
      const { id } = paramsZodValidationSchema.parse(req.params);

      const { comment, postId, userId } = updateCommentZodValidationSchema.parse(
        req.body,
      );

      const updatedComment = await updateCommentService.execute(id, {
        comment,
        postId,
        userId,
      });

      return res.status(200).json({
        msg: 'comment was updated successfully',
        updatedComment,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
