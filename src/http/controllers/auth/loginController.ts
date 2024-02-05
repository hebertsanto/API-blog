import { Request, Response } from 'express';
import { AuthUseCase } from '../../../use-cases/user/authUseCase';
import {
  PasswordDoesNotMatch,
  UserDoesNotExists,
} from '../../../utils/errors/missingParamError';

const makeAuthenticationUser = new AuthUseCase();
export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const { user, token } = await makeAuthenticationUser.auth(email, password);
    return res.status(200).json({
      msg: 'Authentication successful',
      user,
      token,
    });
  } catch (error) {
    if (error instanceof UserDoesNotExists) {
      return res.status(400).json({
        msg: 'user not found on database',
      });
    }
    if (error instanceof PasswordDoesNotMatch) {
      return res.status(400).json({
        msg: 'passwod incorrect',
      });
    }
  }
};
