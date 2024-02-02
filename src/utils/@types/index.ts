export interface IPost {
  title: string;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
  userId: number;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
