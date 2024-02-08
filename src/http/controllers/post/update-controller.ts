import { Request, Response } from 'express';
import { makeUpdatePostUseCase } from '../../../use-cases/factories/post/make-update-post-use-case';
import { MissingParamError, ParamDoesNotExist } from '../../../utils/errors/index.';
import { makeGetUserUseCase } from '../../../use-cases/factories/user/make-get-user-use-case';

export const updatePostController = async (req: Request, res: Response) => {

  const { id } = req.params;
  const { title, content, userId } = req.body;
  const makeUpdate = await makeUpdatePostUseCase();
  const makeGetUser = makeGetUserUseCase();
  const user = await makeGetUser.execute(userId);

  try {
    if (!id) {
      throw new MissingParamError('id is required');
    }
    if (!user) {
      throw new ParamDoesNotExist('user id not exist');
    }
    const updatedPost = await makeUpdate.execute(id, {
      title,
      content,
      userId,
    });
    return res.status(200).json({
      msg: 'post has been updated successfully',
      updatedPost,
    });
  } catch (error) {
    if (error instanceof MissingParamError) {
      return res.status(404).json({
        msg:'Missing parameter'
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg:'usuário não existe'
      });
    }
  }
};
