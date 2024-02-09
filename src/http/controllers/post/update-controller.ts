import { Request, Response } from 'express';
import { makeUpdatePostUseCase } from '../../../use-cases/factories/post/make-update-post-use-case';
import { ParamDoesNotExist, UserNotExist } from '../../../utils/errors/index.';
import { makeGetPostByIdUseCase } from '../../../use-cases/factories/post/make-get-user-use-case';
import { makeGetUserUseCase } from '../../../use-cases/factories/user/make-get-user-use-case';

export const updatePostController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, userId } = req.body;
  const makeUpdate = await makeUpdatePostUseCase();
  const makePost = await makeGetPostByIdUseCase();
  const makeUser = await makeGetUserUseCase();

  try {
    const post = await makePost.execute(id);
    const user = await makeUser.execute(userId);
    if (!post) {
      throw new ParamDoesNotExist('teste');
    }
    if (!user) {
      throw new UserNotExist();
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
    if (error instanceof UserNotExist) {
      return res.status(404).json({
        msg: 'user do not exit',
      });
    }
    if (error instanceof ParamDoesNotExist) {
      return res.status(404).json({
        msg: 'not possible update post',
      });
    }
  }
};
