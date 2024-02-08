import { Request, Response } from 'express';
import { makeGetUserUseCase } from '../../../use-cases/factories/user/make-get-user-use-case';
import { UserIdNotFound } from '../../../use-cases/user/getUserUseCase';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const makeGetUser = makeGetUserUseCase();

  try {

    const user = await makeGetUser.execute(id);
    if (!user) {
      throw new ParamDoesNotExist('this user does not exist');
    }
    if (!id) {
      throw new UserIdNotFound();
    }
    return res.status(200).json({
      msg: 'user found',
      user,
    });
  } catch (error) {
    if (error instanceof UserIdNotFound) {
      return res.status(400).json({
        msg: 'id not found on request',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'user does not exist',
      });
    }
  }
};
