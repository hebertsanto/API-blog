import { Request, Response } from 'express';
import { UpdateCommentUseCase } from '../../domain/useCases/comment/update-comment-use-case';

const update = new UpdateCommentUseCase();

export const updateComment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        msg: 'id not provided',
      });
    }
    const { comment, postId } = req.body;

    const updatedComment = await update.execute(id, {
      comment,
      postId,
    });

    return res.status(200).json({
      msg: 'comment was updated successfully',
      updatedComment,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'internal server error',
      error,
    });
  }
};
