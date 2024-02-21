import { IPost } from '../../../utils/@types';

export interface DeletePost {
  delete(id: string): Promise<IPost | null>;
}
