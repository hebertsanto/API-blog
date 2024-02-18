import { Request, Response } from 'express';
import { makeUpdateCommentUseCase } from '../../../use-cases/factories/comment/make-upate-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const updateComment = async (req: Request, res: Response) => {
  const makeUpdateComment = await makeUpdateCommentUseCase();

  try {
    const { id } = req.params;

    const { comment, postId } = req.body;

    const updatedComment = await makeUpdateComment.update(id, {
      comment,
      postId,
    });

    return res.status(200).json({
      msg: 'comment was updated successfully',
      updatedComment,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'this id do not exist',
      });
    }
  }
};
