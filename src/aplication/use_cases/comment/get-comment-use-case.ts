import { PrismaCommentRepository } from '../../../infra/database/prisma/prisma_repositories/prisma-comment-repository';
import { CommentResponse } from '../../../utils/@interfaces';

import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../../utils/errors/index.';
import { Logger } from '../../../utils/logger';

export class GetCommentUseCase {
  constructor(private commentRepository: PrismaCommentRepository) {}

  async findById(id: string): Promise<CommentResponse | null> {
    try {
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
    } catch (error) {
      Logger.error(`some error ocurred : ${error}`);
      throw error;
    }

  }
}
