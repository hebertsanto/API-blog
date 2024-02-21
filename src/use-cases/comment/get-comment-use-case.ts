import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { FindCommentById } from '../../domain/use-cases/comment/find-comment-use-case';
import { IComment } from '../../utils/@interfaces';
import {
  MissingParamError,
  ParamDoesNotExist,
} from '../../utils/errors/index.';

export class GetCommentUseCase implements FindCommentById {
  constructor(private comment: PrismaCommentRepository) {}

  async findById(id: string): Promise<IComment | null> {
    if (!id) {
      throw new MissingParamError('id comment not provided');
    }
    const commentFound = await this.comment.findById(id);
    if (!commentFound) {
      throw new ParamDoesNotExist('comment id does not exist');
    }
    return commentFound;
  }
}
