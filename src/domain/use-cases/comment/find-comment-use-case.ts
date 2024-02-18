import { IComment } from '../../../utils/@types';

export interface FindCommentById{
    findById(id: string): Promise<IComment | null>;
}
