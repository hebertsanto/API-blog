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
export interface IComment {
  comment: string;
  postId: string;
  userId: string;
}
