import { Request, Response } from 'express';
import { makeCreateUserUseCase } from '../../domain/useCases/factories/make-user-use-case';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const createUserUseCase = makeCreateUserUseCase();

    await createUserUseCase.create({ name, email, password });

    return res.status(200).json();
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error,
    });
  }
};
