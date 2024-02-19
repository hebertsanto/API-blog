import { IComment } from '../../../utils/@types';

export interface UpdateComment {
  update(id: string, data: IComment): Promise<IComment | null>;
}
