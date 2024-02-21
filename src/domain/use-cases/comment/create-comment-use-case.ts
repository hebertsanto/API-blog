import { IComment } from '../../../utils/@interfaces';

export interface CreateComment {
  create(data: IComment): Promise<IComment>;
}
