import { Comment, Post } from '@prisma/client';

export interface IPost {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: string;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IProfile {
  name: string;
  social?: string[];
  job: string;
}
export interface CommentRequest {
  comment: string;
  postId: string;
  userId: string;
}
export interface CommentResponse {
  commentResponse: Comment;
}


export interface PostRequest {
  title: string;
  content: string;
  userId: string;
}
export interface PostResponse {
  post: Post;
}
