import { PrismaCommentRepository } from '../../../../infrastructure/database/prisma/prisma_repositories/prisma-comment-repository';
import { PrismaUserRepository } from '../../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';
import { CreateCommentUseCase } from '../../comment/create-comment-use-case';
import { GetUserByIdUseCase } from '../../user/get-user-use-case';

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
