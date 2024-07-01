import { Request, Response } from 'express';
import { handleRequestController } from '../../request-controller';
import { HttpStatusCode } from '../../../utils/helpers/http-status';
import { GetUserByIdUseCase } from '../../../application/use_cases/user/get-user-use-case';
import { param } from 'express-validator';
import { validateRequest } from '../../middlewares/request-validator';
import { PrismaUserRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';

export class GetUserController implements handleRequestController {
  private userService: GetUserByIdUseCase;
  constructor(userService: GetUserByIdUseCase) {
    this.userService = userService;
  }

  public validate = [
    param('user_id').notEmpty().isUUID().withMessage('Must be a valid id'),
    validateRequest,
  ];

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const user = await this.userService.execute(req.params.id);
      return res.status(HttpStatusCode.Ok).json({
        user,
      });
    } catch (error) {
      return res.status(error.code).json({ message: error.message });
    }
  }
}

export const getUserHandler = new GetUserController(
  new GetUserByIdUseCase(new PrismaUserRepository()),
);
