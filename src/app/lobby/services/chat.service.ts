import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Message, MessagePaginate } from 'src/app/model/message.interface';
import { Room, RoomPaginate } from 'src/app/model/room.interface';
import { CustomSocket } from '../sockets/custom-socket';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private socket: CustomSocket, private snackbar: MatSnackBar) {}

  getAddedMessage(): Observable<Message> {
    return this.socket.fromEvent<Message>('messageAdded');
  }

  sendMessage(message: Message) {
    this.socket.emit('addMessage', message);
  }

  joinRoom(room: Room) {
    this.socket.emit('joinRoom', room);
  }

  leaveRoom(room: Room) {
    this.socket.emit('leaveRoom', room);
  }

  getMessages(): Observable<MessagePaginate> {
    return this.socket.fromEvent<MessagePaginate>('messages');
  }

  getMyRooms(): Observable<RoomPaginate> {
    return this.socket.fromEvent<RoomPaginate>('rooms');
  }

  emitPaginateRooms(limit: number, page: number) {
    this.socket.emit('paginateRooms', { limit, page });
  }

  createRoom(room: Room) {
    this.socket.emit('createRoom', room);
    this.snackbar.open(`Room ${room.name} created successfully`, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
