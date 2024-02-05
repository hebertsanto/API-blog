import { Request, Response } from 'express';
import { makeDeleteUserUseCase } from '../../domain/useCases/factories/delete-user-use-case';

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleteUser = makeDeleteUserUseCase();

    await deleteUser.execute(id);
    return res.status(200);
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error,
    });
  }
};
