import { Request, Response } from 'express';
import { makeGetUserUseCase } from '../../../application/use_cases/factories/user/make-get-user-use-case';
import { handleRequestController } from '../../request-controller';
import { z } from 'zod';
export class GetUserController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const paramsZodValidationSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsZodValidationSchema.parse(req.params);

    const makeGetUser = await makeGetUserUseCase();

    try {
      const user = await makeGetUser.execute(id);

      return res.status(200).json({
        msg: 'User found',
        user,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
