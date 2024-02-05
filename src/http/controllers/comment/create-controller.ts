import { Request, Response } from 'express';
import { CreateCommentUseCase } from '../../../use-cases/comment/create-comment-use-case';

const createCommentUseCase = new CreateCommentUseCase();

export const createComment = async (req: Request, res: Response) => {
  try {
    const { comment, postId } = req.body;
    if (!postId) {
      return res.status(400).json({
        msg: 'post id is required',
      });
    }
    const comentWasCreated = await createCommentUseCase.execute({
      comment,
      postId,
    });
    res.status(200).json({
      msg: 'your comment was created successfully',
      comentWasCreated,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'internal error',
      error,
    });
  }
};
