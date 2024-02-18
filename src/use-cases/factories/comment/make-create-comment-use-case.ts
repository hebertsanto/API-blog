import { PrismaCommentRepository } from '../../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { CreateCommentUseCase } from '../../comment/create-comment-use-case';

export async function makeCreateComment() {
  const createCommentRepository = new PrismaCommentRepository();
  const createCommentUseCase = new CreateCommentUseCase(createCommentRepository);

  return createCommentUseCase;
}
