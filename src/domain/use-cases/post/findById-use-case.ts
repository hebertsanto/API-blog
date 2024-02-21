import { IPost } from '../../../utils/@types';

export interface findPostById{
    findById(id: string): Promise<IPost | null>
}
