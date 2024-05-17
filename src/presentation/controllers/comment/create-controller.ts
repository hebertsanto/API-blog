import { Request, Response } from 'express';
import { makeCreateComment } from '../../../application/use_cases/factories/comment/make-create-comment-use-case';
import { z } from 'zod';
import { handleRequestController } from '../../request-controller';

export class AddCommentController implements handleRequestController {
  public async handle(req: Request, res: Response) : Promise<Response> {
    const createComment = await makeCreateComment();

    const commentValidationSchema = z.object({
      comment: z.string(),
      postId: z.string().uuid(),
      userId: z.string().uuid(),
    });

    const { comment, postId, userId } = commentValidationSchema.parse(req.body);

    try {
      const commentCreated = await createComment.execute({
        comment,
        postId,
        userId,
      });

      return res.status(200).json({
        msg: 'comment was created',
        commentCreated,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
