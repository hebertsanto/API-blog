import { Request, Response } from 'express';
import { makeGetPostByIdUseCase } from '../../../application/use_cases/factories/post/make-get-user-use-case';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';

export const getPostById = async (req: Request, res: Response) => {
  const makeGetPostById = await makeGetPostByIdUseCase();

  const paramsZodValidationSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsZodValidationSchema.parse(req.params);

  try {
    const post = await makeGetPostById.findById(id);

    return res.status(200).json({
      msg: 'post found successfully',
      post,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'this post does not exist',
      });
    }
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'post id is required',
      });
    }
    Logger.error(`some error ocurred in get post controller ${error}`);
    throw error;
  }
};
