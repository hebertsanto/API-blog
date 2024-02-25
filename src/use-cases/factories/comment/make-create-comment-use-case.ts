import { PrismaCommentRepository } from '../../../infra/adapters/repositories/prisma/prisma-comment-repository';
import { CreateCommentUseCase } from '../../comment/create-comment-use-case';
import { GetUserByIdUseCase } from '../../user/getUserUseCase';
import { PrismaUserRepository } from '../../../infra/adapters/repositories/prisma/prisma-user-repository';


export async function makeCreateComment() {
  const createCommentRepository = new PrismaCommentRepository();
  const userRepository = new PrismaUserRepository();

  const userService = new GetUserByIdUseCase(userRepository);
  const createCommentUseCase = new CreateCommentUseCase(
    createCommentRepository,
    userService

  );

  return createCommentUseCase;
}
