import { Request, Response } from 'express';
import { makeCreatePostUseCase } from '../../../use-cases/factories/post/make-create-post-use-case';
import { UserIdNotFound } from '../../../use-cases/user/getUserUseCase';
import { prisma } from '../../../adapters/database/prismaClient';
import { ParamDoesNotExist } from '../../../utils/errors/index.';

export const createPost = async (req: Request, res: Response) => {
  const createPostUseCase = await makeCreatePostUseCase();
  const { title, content, userId } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!user) {
      throw new ParamDoesNotExist('user does not exist');
    }
    const makePost = await createPostUseCase.execute(title, content, userId);

    return res.status(200).json({
      msg: 'post created successfully',
      post: makePost,
    });
  } catch (error) {
    if (error instanceof UserIdNotFound) {
      return res.status(400).json({
        msg: 'id not found',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(400).json({
        msg: 'id not found on database',
      });
    }
  }
};
