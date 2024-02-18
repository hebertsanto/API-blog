import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../../use-cases/factories/user/make-user-use-case';
import { UserAlreadyExistError } from '../../../utils/errors/index.';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const createUserUseCase = await makeCreateUserUseCase();

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
    throw error;
  }
};
