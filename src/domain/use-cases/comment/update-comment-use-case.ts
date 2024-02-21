import { IComment } from '../../../utils/@interfaces';

export interface UpdateComment {
  update(id: string, data: IComment): Promise<IComment | null>;
}
