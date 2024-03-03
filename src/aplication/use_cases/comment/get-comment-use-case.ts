import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma-comment-repository';
import { CommentResponse } from '../../../utils/@interfaces';

import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';

export class GetCommentUseCase {
  constructor(private commentRepository: PrismaCommentRepository) {}

  async findById(id: string): Promise<CommentResponse | null> {
    if (!id) {
      throw new MissingParamError('comment_id');
    }

    const commentResponse = await this.commentRepository.findById(id);

    if (!commentResponse) {
      throw new ParamDoesNotExist('comment_id');
    }
    return {
      commentResponse,
    };
  }
}
