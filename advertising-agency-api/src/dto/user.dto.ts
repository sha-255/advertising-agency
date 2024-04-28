import { Post } from './post.dto';

export class User {
  id: number;
  login: string;
  passwordCash: string;
  role: TypeRole;
  posts: Post[];
}

type TypeRole = 'Admin' | 'User';
