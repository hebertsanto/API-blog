import { IPost } from '../../../utils/@interfaces';

export interface DeletePost {
  delete(id: string): Promise<IPost | null>;
}
