import { Request, Response } from 'express';
import { GetCommentUseCase } from '../../domain/useCases/comment/get-comment-use-case';

const getCommentByIdUseCase = new GetCommentUseCase();

export const getCommentById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: 'id not found',
      });
    }
    const comment = await getCommentByIdUseCase.execute(id);

    return res.status(200).json({
      msg: 'comment here',
      comment,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'internal error server',
    });
  }
};
