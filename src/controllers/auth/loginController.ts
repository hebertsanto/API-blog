import { Request, Response } from 'express';
import { AuthUseCase } from '../../domain/useCases/user/authUseCase';

const auth = new AuthUseCase();
export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userAuth = await auth.auth(email, password);

    if (userAuth.msg == 'Invalid email or password') {
      return res.status(400).json({
        userAuth,
      });
    }

    return res.status(200).json({
      msg: 'user login successful',
      userAuth,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error,
    });
  }
};
