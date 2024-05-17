import { CreateCategoryUseCase } from './create-category-use-case';

const mockCategoryRepository = {
  create: jest.fn(),
  findById: jest.fn(),
  findByIdAndDelete: jest.fn(),
  findByIdAndUpdate: jest.fn(),
};

describe('Create category use case', () => {
  it('should create a new category', async () => {
    const addCategory = new CreateCategoryUseCase(mockCategoryRepository);

    const categoryData = {
      id: 'postId',
      name: 'Technology',
      postId: '123',
    };

    mockCategoryRepository.create.mockResolvedValue(categoryData);

    const newCategory = await addCategory.execute(categoryData);

    expect(newCategory).toBeDefined();
    expect(newCategory).toEqual(categoryData);
    expect(newCategory).toHaveProperty('id');
    expect(newCategory).toHaveProperty('name');
    expect(newCategory).toHaveProperty('postId');
  });

  it('should throw error if postId is missing', async () => {
    const addCategory = new CreateCategoryUseCase(mockCategoryRepository);

    const categoryData = {
      id: 'postId',
      name: 'Technology',
      postId: '',
    };

    await expect(addCategory.execute(categoryData)).rejects.toThrow();
  });
});
