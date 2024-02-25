import { PrismaCommentRepository } from '../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { UpdateComment } from '../../domain/use-cases/comment/update-comment-use-case';
import { MissingParamError } from '../../utils/errors/index.';
import { CommentRequest, CommentResponse } from '../../utils/@interfaces';


export class UpdateCommentUseCase implements UpdateComment {
  constructor(private updateComment: PrismaCommentRepository) {}

  async update(id: string, data: CommentRequest): Promise<CommentResponse | null> {
    if (!id) {
      throw new MissingParamError('id');
    }
    if (!id) {
      throw new MissingParamError('data');
    }

    const  commentResponse = await this.updateComment.findByIdAndUpdate(id, data);

    return {
      commentResponse
    };
  }
}
