import { Request, Response } from 'express';
import { makeGetCommentByIdUseCase } from '../../../use-cases/factories/comment/make-get-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const getCommentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const makeGetCommentById = await makeGetCommentByIdUseCase();

  try {
    const comment = await makeGetCommentById.execute(id);

    if (!comment) {
      throw new ParamDoesNotExist('comment id does not exist');
    }
    return res.status(200).json({
      msg: 'comment here',
      comment,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      res.status(400).json({
        msg: 'esse id não existe',
      });
    }
  }
};
