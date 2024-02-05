import { Request, Response } from 'express';
import { SearchPostUseCase } from '../../domain/useCases/post/search-post-use-case';

const searchPostUseCase = new SearchPostUseCase();

export const searchPosts = async (req: Request, res: Response) => {
  try {
    const { query } = req.query;

    const postsFound = await searchPostUseCase.execute(String(query));

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
