import { Meta } from './meta.interface';
import { User } from './user.interface';

export interface Room {
  id?: number;
  name?: string;
  description?: string;
  users?: User[];
  created_at?: Date;
  updated_at?: Date;
}

export interface RoomPaginate {
  items: Room[];
  meta: Meta;
}
