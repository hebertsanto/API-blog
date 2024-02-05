import { GetUserRepository } from '../../adapters/repositories/user/get-user-repository';

export class UserIdNotFound extends Error {
  constructor() {
    super('id not found');
  }
}
export class GetUserByIdUseCase {
  constructor (private getUserRepository: GetUserRepository) { }
  async execute(id: string) {
    const user = await this.getUserRepository.execute(id);

    if (!user) {
      throw new UserIdNotFound();
    }

    return user;
  }
}
