import { Request, Response } from 'express';
import { makeGetUserUseCase } from '../../../use-cases/factories/user/make-get-user-use-case';
import { UserIdNotFound } from '../../../use-cases/user/getUserUseCase';

export const getUserById = async (req: Request, res: Response) => {

  const { id } = req.params;
  const userId = makeGetUserUseCase();

  try {

    const user = await userId.execute(id);

    return res.status(200).json({
      msg: 'user found',
      user
    });


  } catch (error) {
    if (error instanceof UserIdNotFound) {
      return res.status(400).json({
        msg: 'id not found'
      });
    }
  }
};
