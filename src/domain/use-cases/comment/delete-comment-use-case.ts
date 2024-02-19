import { IComment } from '../../../utils/@types';

export interface DeleteComment {
  findByIdAndDelete(id: string): Promise<IComment | null>;
}
