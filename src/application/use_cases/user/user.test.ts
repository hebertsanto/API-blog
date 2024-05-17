import { randomUUID } from 'crypto';
import { CreateUserUseCase } from './createUserUseCase';

const mockeUserRepository = {
  create: jest.fn(),
  findByEmail: jest.fn(),
  findByIdAndDelete: jest.fn(),
  findById: jest.fn(),
  findByIdAndUpdate: jest.fn(),
};

describe('User use case', () => {
  it('Should create a user correctly', async () => {
    const createUserUseCase = new CreateUserUseCase(mockeUserRepository);

    const mockUserData = {
      id: randomUUID(),
      name: 'Hebert',
      password: '203040',
      email: 'hebertsantosdeveloper@gmail.com',
    };

    mockeUserRepository.create.mockResolvedValue(mockUserData);

    const createUser = await createUserUseCase.create(mockUserData);

    expect(createUser).toEqual({ user: mockUserData });

    expect(createUser.user).toBeDefined();
  });
});
