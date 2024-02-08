import { Request, Response } from 'express';
import { makeSearchPostsUseCase } from '../../../use-cases/factories/post/make-search-post-use-case';

export const searchPosts = async (req: Request, res: Response) => {

  const makeSearchPosts = await makeSearchPostsUseCase();
  const { query } = req.query;

  try {

    const postsFound = await makeSearchPosts.execute(String(query));

    if (postsFound.length == 0) {
      return res.status(400).json({
        msg: 'No posts found',
      });
    }

    return res.status(200).json({
      msg: 'search query has been made successfully',
      postsFound,
    });
  } catch (error) {
    return res.status(400).json({
      msg: 'some error occurred',
      error,
    });
  }
};
