import { Request, Response } from 'express';
import { DeleteUserUseCase } from '../../domain/useCases/user/deleteUserUseCase';

const deleteUseCase = new DeleteUserUseCase();

export const deleteUser = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: 'user not found'
      });
    }
    await deleteUseCase.execute(parseInt(id));

    return res.status(200).json({
      msg: 'this user has been deleted'
    });

  } catch (error) {
    return res.status(400).json({
      msg:'some error occurred',
      error
    });
  }
};
