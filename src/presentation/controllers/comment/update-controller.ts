import { Request, Response } from 'express';
import { makeUpdateCommentUseCase } from '../../../use-cases/factories/comment/make-upate-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';

export const updateComment = async (req: Request, res: Response) => {
  const makeUpdateComment = await makeUpdateCommentUseCase();

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

    const updatedComment = await makeUpdateComment.update(id, {
      comment,
      postId,
      userId,
    });

    return res.status(200).json({
      msg: 'comment was updated successfully',
      updatedComment,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'this id do not exist',
      });
    }
  }
};
