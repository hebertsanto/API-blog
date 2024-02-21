import { IPost } from '../../../utils/@interfaces';

export interface findPostById {
  findById(id: string): Promise<IPost | null>;
}
