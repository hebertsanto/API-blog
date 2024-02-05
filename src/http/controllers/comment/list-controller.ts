import { Request, Response } from 'express';
import { ListCommentsUseCase } from '../../../use-cases/comment/list-comment-use-case';

const comments = new ListCommentsUseCase();
export const listComments = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        msg: 'id is required',
      });
    }
    const commentsFound = await comments.execute(id);

    return res.status(200).json({
      msg: 'all comments user are here',
      comments: commentsFound,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
    });
  }
};
