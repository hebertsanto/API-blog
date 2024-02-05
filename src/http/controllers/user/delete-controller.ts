import { Request, Response } from 'express';
import { makeDeleteUserUseCase } from '../../../use-cases/factories/user/make-delete-user-use-case';

export const deleteUser = async (req: Request, res: Response) => {
  const deleteUser = await makeDeleteUserUseCase();
  const { id } = req.params;

  try {
    await deleteUser.execute(id);
    return res.status(200);

  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error,
    });
  }
};
