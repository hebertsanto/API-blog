import { Request, Response } from 'express';
import { makeGetCommentByIdUseCase } from '../../../use-cases/factories/comment/make-get-comment-use-case';
import { prisma } from '../../../adapters/database/prismaClient';
import { GenericsErros } from '../../../utils/errors/index.';


export const getCommentById = async (req: Request, res: Response) => {

  const { id } = req.params;
  const makeGetCommentById = await makeGetCommentByIdUseCase();

  try {

    const commentExist = await prisma.comment.findUnique({
      where: {
        id: id
      }
    });

    if (!commentExist) {
      throw new GenericsErros('comment');
    }
    const comment = await makeGetCommentById.execute(id);

    return res.status(200).json({
      msg: 'comment here',
      comment,
    });
  } catch (error) {
    if (error instanceof GenericsErros) {
      res.status(400).json({
        msg: 'esse id não existe'
      });
    }
  }
};
