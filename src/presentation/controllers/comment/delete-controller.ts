import { Request, Response } from 'express';
import { makeDeleteCommentUseCase } from '../../../use-cases/factories/comment/make-delete-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';

export const deleteComment = async (req: Request, res: Response) => {
  const makeDeleteComment = await makeDeleteCommentUseCase();

  const paramsZodSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsZodSchema.parse(req.params);

  try {
    await makeDeleteComment.findByIdAndDelete(id);
    return res.status(200).json({
      msg: 'Comment deleted successfully',
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'comment id does not exist',
      });
    }
  }
};
