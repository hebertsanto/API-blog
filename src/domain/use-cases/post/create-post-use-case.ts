import { IPost } from '../../../utils/@types';

export interface CreatePost{
    create(data: IPost) : Promise<IPost>;
}
