import { GetUserRepository } from '../../adapters/repositories/user/get-user-repository';
import { MissingParamError, ParamDoesNotExist } from '../../utils/errors/index.';

export class GetUserByIdUseCase {
  constructor(private getUserRepository: GetUserRepository) {}
  async execute(id: string) {
    if (!id) {
      throw new MissingParamError('id is required');
    }

    const user = await this.getUserRepository.execute(id);
    if (!user) {
      throw new ParamDoesNotExist('this user not exist');
    }
    return user;
  }
}
