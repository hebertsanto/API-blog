import { Post, Prisma } from '@prisma/client';

export interface PrismaPostRepository{
    create(data: Prisma.PostUncheckedCreateInput): Promise<Post>
    findById(id: string): Promise<Post | null>
    findByIdAndDelete(id: string): Promise<Post | null>
    findByIdAndUpdate(id: string): Promise<Post>
}
