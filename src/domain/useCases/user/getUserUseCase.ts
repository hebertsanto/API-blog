import { GetUserRepository } from '../../../adapters/repositories/user/getUserRepository'

export class GetUserByIdUseCase {
  private getUserById: GetUserRepository

  constructor() {
    this.getUserById = new GetUserRepository()
  }

  async execute(id: number) {
    const user = this.getUserById.execute(id)

    if (!user) {
      throw new Error('user does not exist')
    }

    return user
  }
}
