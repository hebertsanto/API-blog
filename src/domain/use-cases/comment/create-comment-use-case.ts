import { IComment } from '../../../utils/@types';

export interface CreateComment {
  create(data: IComment): Promise<IComment>;
}
