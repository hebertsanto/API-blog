import { Request, Response } from 'express';
import { makeCreateComment } from '../../../aplication/use_cases/factories/comment/make-create-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';

export const createComment = async (req: Request, res: Response) => {
  const createComment = await makeCreateComment();

  const commentValidationSchema = z.object({
    comment: z.string(),
    postId: z.string().uuid(),
    userId: z.string().uuid(),
  });

  const { comment, postId, userId } = commentValidationSchema.parse(req.body);

  try {
    const commentCreated = await createComment.create({
      comment,
      postId,
      userId,
    });

    return res.status(200).json({
      msg: 'comment was created',
      commentCreated,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'post id does not exist',
        error,
      });
    }
    Logger.error(`some error ocurred  in create comment controller : ${error}`);
  }
};
