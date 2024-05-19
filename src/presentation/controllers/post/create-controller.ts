import { Request, Response } from 'express';
import { makeCreatePostUseCase } from '../../../application/use_cases/factories/post/make-create-post-use-case';
import { z } from 'zod';
import { handleRequestController } from '../../request-controller';

export class AddPostController implements handleRequestController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createPostUseCase = await makeCreatePostUseCase();

    const createPostZodValidationSchema = z.object({
      title: z.string(),
      content: z.string(),
      userId: z.string().uuid(),
    });

    const { title, content, userId } = createPostZodValidationSchema.parse(req.body);

    try {
      const makePost = await createPostUseCase.execute({
        title,
        content,
        userId,
      });

      return res.status(201).json({
        msg: 'post created successfully',
        post: makePost,
      });
    } catch (error) {
      return res.status(500).json(error);
    }
  }
}
