import { Request, Response } from 'express';
import { handleRequestController } from '../../request-controller';
import { HttpStatusCode } from '../../../utils/helpers/http-status';
import { body } from 'express-validator';
import { validateRequest } from '../../middlewares/request-validator';
import { CreateUserUseCase } from '../../../application/use_cases/user/create-user-use-case';
import { PrismaUserRepository } from '../../../infrastructure/database/prisma/prisma_repositories/prisma-user-repository';

export class CreateUserController implements handleRequestController {
  private createUserService: CreateUserUseCase;

  constructor(userService: CreateUserUseCase) {
    this.createUserService = userService;
  }

  public validate = [
    body(['email']).notEmpty().isEmail().withMessage('Must be a valid email'),
    body(['name']).notEmpty().isString().withMessage('Name is required'),
    body('password')
      .notEmpty()
      .withMessage('Password is required')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
    validateRequest,
  ];

  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      await this.createUserService.execute({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
      });
      return res.status(HttpStatusCode.Created).send();
    } catch (error) {
      return res.status(error.code).json({ message: error.message });
    }
  }
}

export const createUserHandler = new CreateUserController(
  new CreateUserUseCase(new PrismaUserRepository()),
);
