import { Request, Response } from 'express';
import { UserUseCase } from '../../domain/useCases/user/createUserUseCase';

const userUseCase = new UserUseCase();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const user = await userUseCase.create(name, email, password);

    return res.status(201).json({
      msg: 'user created successfully',
      user
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error
    });
  }
};
