import { Request, Response } from 'express';
import { AuthUseCase } from '../../../use-cases/user/authUseCase';
import {
  PasswordDoesNotMatch,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';

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
