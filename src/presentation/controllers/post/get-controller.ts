import { Request, Response } from 'express';
import { makeGetPostByIdUseCase } from '../../../use-cases/factories/post/make-get-user-use-case';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';

export const getPostById = async (req: Request, res: Response) => {
  const makeGetPostById = await makeGetPostByIdUseCase();
  const { id } = req.params;

  try {
    const post = await makeGetPostById.execute(id);

    return res.status(200).json({
      msg: 'post found successfully',
      post,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'post id does not exist',
      });
    }
    if (error instanceof MissingParamError) {
      return res.status(400).json({
        msg: 'id is required',
      });
    }
  }
};
