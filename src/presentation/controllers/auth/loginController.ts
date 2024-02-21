import { Request, Response } from 'express';
import { makeAuthUseCase } from '../../../use-cases/factories/user/auth-use-case';
import {
  PasswordDoesNotMatch,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { z } from 'zod';

export const loginController = async (req: Request, res: Response) => {
  const authUseCase = await makeAuthUseCase();

  const authZodValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authZodValidationSchema.parse(req.body);

  try {
    const { user, token } = await authUseCase.auth(email, password);

    return res.status(200).json({
      msg: 'Authentication successful',
      user,
      token,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'user not found on database, create account',
      });
    }
    if (error instanceof PasswordDoesNotMatch) {
      return res.status(400).json({
        msg: 'passwod incorrect',
      });
    }
  }
};
