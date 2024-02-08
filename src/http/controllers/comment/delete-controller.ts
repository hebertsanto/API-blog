import { Request, Response } from 'express';
import { makeDeleteCommentUseCase } from '../../../use-cases/factories/comment/make-delete-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { makeGetCommentByIdUseCase } from '../../../use-cases/factories/comment/make-get-comment-use-case';

export const deleteComment = async (req: Request, res: Response) => {
  const makeDeleteComment = await makeDeleteCommentUseCase();
  const makeGetComment = await makeGetCommentByIdUseCase();
  try {
    const { id } = req.params;

    if (!makeGetComment) {
      throw new ParamDoesNotExist('id do comentário não existe');
    }
    await makeDeleteComment.execute(id);
    return res.status(200).json({
      msg: 'Comment deleted successfully',
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'comment id does not exist',
      });
    }
  }
};
