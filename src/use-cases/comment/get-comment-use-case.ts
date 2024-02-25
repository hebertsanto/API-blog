import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { CommentResponse } from '../../utils/@interfaces';

import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class GetCommentUseCase {
  constructor(private comment: PrismaCommentRepository) {}

  async findById(id: string): Promise<CommentResponse | null> {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentResponse = await this.comment.findById(id);
    if (!commentResponse) {
      throw new ParamDoesNotExist('comment id does not exist');
    }
    return {
      commentResponse,
    };
  }
}
