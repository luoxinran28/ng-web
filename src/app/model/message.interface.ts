import { Meta } from '@angular/platform-browser';
import { Room } from './room.interface';
import { User } from './user.interface';

export interface Message {
  id?: number;
  text: string;
  user?: User;
  room: Room;
  created_at?: Date;
  updated_at?: Date;
}

export interface MessagePaginate {
  items: Message[];
  meta: Meta;
}
