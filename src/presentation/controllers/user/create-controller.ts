import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../../application/use_cases/factories/user/make-user-use-case';
import { UserAlreadyExistError } from '../../../utils/errors/index.';
import { z } from 'zod';
import { Logger } from '../../../utils/logger';

export const createUser = async (req: Request, res: Response) => {
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
    const user = await createUserUseCase.create({ name, email, password });

    return res.status(201).json({
      msg: 'user created successfully',
      user,
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistError) {
      return res.status(404).json({
        msg: 'this user already exists',
      });
    }
    Logger.error(`some error ocurred in create user controller ${error}`);
    throw error;
  }
};
