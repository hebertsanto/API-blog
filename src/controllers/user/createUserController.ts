import { Request, Response } from 'express';
import { UserUseCase } from '../../domain/useCases/user/createUserUseCase';

const userUseCase = new UserUseCase();

export const createUser = async (req: Request, res: Response) => {
  try {
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const { name, email, password } = req.body;

    if (!regexEmail.test(email)) {
      return res.status(400).json({
        message: 'Invalid email format',
      });
    }
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
    return res.status(500).json({
      msg: 'internal server error',
      error,
    });
  }
};
