import { Request, Response } from 'express';
import { DeletePostUseCase } from '../../../use-cases/post/delete-post-use-case';

const post = new DeletePostUseCase();

export const deletePost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await post.execute(id);

    if (!deleted.id) {
      return res.status(404).json({
        msg: 'post not found',
      });
    }
    return res.status(200).json({
      msg: 'this post has been deleted',
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred deliting this post',
      error,
    });
  }
};
