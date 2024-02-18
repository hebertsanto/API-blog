import { Comment, Prisma } from '@prisma/client';

export interface PrismaCommentRepository{
    create(data: Prisma.CommentUncheckedCreateInput): Promise<Comment>
    findById(id: string): Promise<Comment | null>
    findByIdAndDelete(id: string): Promise<Comment | null>
    findByIdAndUpdate(id: string): Promise<Comment>
}
