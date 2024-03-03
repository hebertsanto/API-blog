import { PrismaCommentRepository } from '../../../../infra/database/prisma/prisma-comment-repository';
import { PrismaUserRepository } from '../../../../infra/database/prisma/prisma-user-repository';
import { CreateCommentUseCase } from '../../comment/create-comment-use-case';
import { GetUserByIdUseCase } from '../../user/getUserUseCase';

export async function makeCreateComment() {
  const createCommentRepository = new PrismaCommentRepository();
  const userRepository = new PrismaUserRepository();

  const userService = new GetUserByIdUseCase(userRepository);
  const createCommentUseCase = new CreateCommentUseCase(
    createCommentRepository,
    userService,
  );

  return createCommentUseCase;
}
