import { Request, Response } from 'express';
import { makeCreateComment } from '../../../use-cases/factories/comment/make-create-comment-use-case';
import { prisma } from '../../../adapters/database/prismaClient';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const createComment = async (req: Request, res: Response) => {
  const { comment, postId } = req.body;
  const createComment = await makeCreateComment();

  try {
    const verifyPostExist = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });
    if (!verifyPostExist) {
      throw new ParamDoesNotExist('post id not exit');
    }
    const commentCreated = await createComment.execute({ comment, postId });

    return res.status(200).json({
      msg: 'comment was created',
      commentCreated,
    });
  } catch (error) {
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'this id does not existe',
      });
    }
  }
};
