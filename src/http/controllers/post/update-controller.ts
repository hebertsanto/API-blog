import { Request, Response } from 'express';
import { UpdatePostUseCase } from '../../../use-cases/post/update-post-use-case';

const update = new UpdatePostUseCase();
export const updatePostController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, userId } = req.body;
    const updatedPost = await update.execute(id, {
      title,
      content,
      userId,
    });

    return res.status(200).json({
      msg: 'post has been updated successfully',
      updatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error found',
      error,
    });
  }
};
