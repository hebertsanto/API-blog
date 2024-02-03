export interface IPost {
  title: string
  content: string
  createdAt?: Date
  updatedAt?: Date
  userId: number
}

export interface IUser {
  name: string
  email: string
  password: string
}
export interface IProfile {
  name: string
  social?: string[]
  jop: string
}
export interface IComment {
  comment: string
  postId: number
}
