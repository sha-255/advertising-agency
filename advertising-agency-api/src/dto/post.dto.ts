import { Shift } from './shift.dto';
import { User } from './user.dto';

export class Post {
  id: number;
  author: User;
  userId: number;
  shifts: Shift;
  adressId: number;
}
