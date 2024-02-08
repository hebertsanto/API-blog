import { Request, Response } from 'express';
import { makeUpdateCommentUseCase } from '../../../use-cases/factories/comment/make-upate-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';
import { makeGetCommentByIdUseCase } from '../../../use-cases/factories/comment/make-get-comment-use-case';

export const updateComment = async (req: Request, res: Response) => {
  const makeUpdateComment = await makeUpdateCommentUseCase();
  const makeGetComment =  await makeGetCommentByIdUseCase();
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({
        msg: 'id not provided',
      });
    }
    const commentId = await makeGetComment.execute(id);

    if (!commentId) {
      throw new ParamDoesNotExist('id desse comentario nao existe');
    }
    const { comment, postId } = req.body;

    const updatedComment = await makeUpdateComment.execute(id, {
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
        msg: 'this id do not exist'
      });
    }
  }
};
