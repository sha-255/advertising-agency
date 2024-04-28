import { Post } from './post.dto';

export class Shift {
  id: number;
  reference: Post;
  postId: number;
  isOpen: boolean;
  createdAt: Date;
  description: string;
  image: string; //?
}
