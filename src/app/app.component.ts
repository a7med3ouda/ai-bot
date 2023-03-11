import { Component } from '@angular/core';
import IChat from './@types/IChat';
import { generateId } from './@types/static';
import { ChatService } from './services/chat.service';
import { TypingService } from './services/typing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-bot';
  caputcha = '';
}
