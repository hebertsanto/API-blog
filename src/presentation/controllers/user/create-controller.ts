import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../../application/use_cases/factories/user/make-user-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';

export class CreateUserController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createUserUseCase = await makeCreateUserUseCase();

    const createUserZodValidationSchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    });

    const { name, email, password } = createUserZodValidationSchema.parse(
      req.body,
    );
    try {
      const user = await createUserUseCase.execute({ name, email, password });

      return res.status(201).json({
        msg: 'user created successfully',
        user,
      });
    } catch (error) {
      return res.status(500);
    }
  }
}
