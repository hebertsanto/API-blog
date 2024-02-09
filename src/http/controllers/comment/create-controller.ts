import { Request, Response } from 'express';
import { makeCreateComment } from '../../../use-cases/factories/comment/make-create-comment-use-case';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const createComment = async (req: Request, res: Response) => {
  const createComment = await makeCreateComment();
  const { comment, postId } = req.body;
  try {
    const commentCreated = await createComment.execute({ comment, postId });

    return res.status(200).json({
      msg: 'comment was created',
      commentCreated,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'post id not found',
      });
    }
  }
};
