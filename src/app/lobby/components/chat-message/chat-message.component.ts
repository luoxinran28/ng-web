import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/entrance/services/auth-service/auth.service';
import { Message } from 'src/app/model/message.interface';
import { User } from 'src/app/model/user.interface';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss'],
})
export class ChatMessageComponent {
  @Input() message!: Message;
  user: User = this.authService.getLoggedInUser();

  constructor(private authService: AuthService) {}
}
