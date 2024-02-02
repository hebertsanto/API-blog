import { Request, Response } from 'express';
import { GetUserByIdUseCase } from '../../domain/useCases/user/getUserUseCase';

const getUser = new GetUserByIdUseCase();
export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await getUser.execute(parseInt(id));

    return res.status(200).json({
      msg: 'user found',
      user,
    });
  } catch (error) {
    return res.json({
      msg: 'some error ocurred',
      error,
    });
  }
};
