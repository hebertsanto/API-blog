import { Request, Response } from 'express';
import { makeAuthUseCase } from '../../../application/use_cases/factories/user/auth-use-case';
import {
  PasswordDoesNotMatch,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { z } from 'zod';
import { logger } from '../../../utils/logger';

export const loginController = async (req: Request, res: Response) => {
  const authUseCase = await makeAuthUseCase();

  const authZodValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authZodValidationSchema.parse(req.body);

  try {
    const { user, token } = await authUseCase.execute(email, password);

    return res.status(200).json({
      msg: 'Authentication successful',
      user,
      token,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'user does not exist, create an account please',
      });
    }
    if (error instanceof PasswordDoesNotMatch) {
      return res.status(400).json({
        msg: 'password/email invalid',
      });
    }
    logger.error(`some error ocurred in login controller ${error}`);
    throw error;
  }
};
