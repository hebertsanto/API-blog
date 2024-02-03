import { Request, Response } from 'express';
import { UserUseCase } from '../../domain/useCases/user/createUserUseCase';

const userUseCase = new UserUseCase();

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const existerUser = await userUseCase.findUserExist(email);
    if (existerUser && existerUser.email) {
      return res.status(400).json({
        msg: 'User already exists',
      });
    }

    const newUser = await userUseCase.create({ name, email, password });

    return res.status(201).json({
      msg: 'user created successfully',
      newUser,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'algum erro aconteceu',
      error,
    });
  }
};
