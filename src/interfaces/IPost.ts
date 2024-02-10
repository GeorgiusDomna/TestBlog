export interface IResponsePostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Reaction {
  count: number;
  status: boolean;
}

export interface Reactions {
  like: Reaction;
  dislike: Reaction;
}

export interface IPost extends IResponsePostData {
  reaction: Reactions
}