import { Request, Response } from 'express';
import { makeGetUserUseCase } from '../../../use-cases/factories/user/make-get-user-use-case';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { z } from 'zod';

export const getUserById = async (req: Request, res: Response) => {
  const paramsZodValidationSchema = z.object({
    id: z.string().uuid(),
  });

  const { id } = paramsZodValidationSchema.parse(req.params);

  const makeGetUser = await makeGetUserUseCase();

  try {
    const user = await makeGetUser.execute(id);

    return res.status(200).json({
      msg: 'user found',
      user,
    });
  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'id not found on request',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'user does not exist',
      });
    }
  }
};
