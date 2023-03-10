import { Component } from '@angular/core';
import { generateId } from './@types/static';
import { TypingService } from './services/typing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-bot';
  responses = [];
  isLoading = false;
  chatList = [];

  constructor(public typing: TypingService) {
    setTimeout(() => {
      typing.make('hello my friend .. how are you doing?');
      console.log(generateId());
      console.log(generateId());
      console.log(generateId());
      console.log(generateId());
      console.log(generateId().length);
    }, 3000);
  }

  handleSendMessage(e: any) {
    e.preventDefault();
  }
}
