import { IPost } from '../../../utils/@types';

export interface UpdatePost{
    update(id: string, data: IPost, userId: string) : Promise<IPost | null>;
}
