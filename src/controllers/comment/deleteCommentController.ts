import { Request, Response  } from 'express';
import { DeleteCommentUseCase } from '../../domain/useCases/comment/deleteCommentUseCase';

const deleteCommentUseCase = new DeleteCommentUseCase();

export const deleteComment  = async(req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: 'id is required'
      });
    }
    await deleteCommentUseCase.execute(parseInt(id));
    return res.status(200).json({
      msg: 'Comment deleted successfully'
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'erro internal server',
      error
    });
  }
};
