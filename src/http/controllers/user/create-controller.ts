import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../../use-cases/factories/user/make-user-use-case';
import { UserAlreadyExistError } from '../../../use-cases/user/createUserUseCase';

export const createUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const createUserUseCase = await makeCreateUserUseCase();
    await createUserUseCase.create({ name, email, password });

    return res.status(201).json({
      msg: 'user created successfully',
    });
  } catch (error) {
    if (error instanceof UserAlreadyExistError) {
      return res.status(404).json({
        msg: 'this user alrady exist',
      });
    }
    throw error;
  }
};
