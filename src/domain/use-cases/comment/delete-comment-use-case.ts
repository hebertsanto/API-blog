import { IComment } from '../../../utils/@interfaces';

export interface DeleteComment {
  findByIdAndDelete(id: string): Promise<IComment | null>;
}
