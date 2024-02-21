import { IPost } from '../../../utils/@interfaces';

export interface UpdatePost {
  update(id: string, data: IPost, userId: string): Promise<IPost | null>;
}
