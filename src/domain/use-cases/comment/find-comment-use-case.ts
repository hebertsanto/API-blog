import { IComment } from '../../../utils/@interfaces';

export interface FindCommentById {
  findById(id: string): Promise<IComment | null>;
}
