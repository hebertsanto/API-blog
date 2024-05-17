import { Request, Response } from 'express';
import { makeAuthUseCase } from '../../../application/use_cases/factories/user/auth-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class AuthController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const authZodValidationSchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { email, password } = authZodValidationSchema.parse(req.body);

    const authService = await makeAuthUseCase();

    try {
      const { token } = await authService.execute(email, password);

      return res.status(200).json({
        message: 'Authentication successfully',
        acessToken: token,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
