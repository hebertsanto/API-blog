import { Request, Response } from 'express';
import { makeGetCommentByIdUseCase } from '../../../use-cases/factories/comment/make-get-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';

export const getCommentById = async (req: Request, res: Response) => {
  const paramsZodSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsZodSchema.parse(req.params);

  const makeGetCommentById = await makeGetCommentByIdUseCase();

  try {
    const comment = await makeGetCommentById.findById(id);

    return res.status(200).json({
      msg: 'comment here',
      comment,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      res.status(400).json({
        msg: 'comment id does not exist',
      });
    }
    Logger.error(`some error ocurred in get comment controller: ${error}`);
  }
};
