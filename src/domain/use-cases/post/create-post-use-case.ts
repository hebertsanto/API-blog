import { IPost } from '../../../utils/@interfaces';

export interface CreatePost {
  create(data: IPost): Promise<IPost>;
}
