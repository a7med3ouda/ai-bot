import { Component, EventEmitter, Input, Output } from '@angular/core';
import IChat from 'src/app/@types/IChat';
import { generateId } from 'src/app/@types/static';
import { ChatService } from 'src/app/services/chat.service';
import { TypingService } from 'src/app/services/typing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  message = '';

  constructor(
    public typingService: TypingService,
    public chatService: ChatService
  ) {
    chatService.isLoading = true;
    setTimeout(async () => {
      await typingService.make('hello my friend .. how are you doing?');
      chatService.isLoading = false;
      chatService.list.push({
        _id: generateId(),
        isAi: true,
        message: 'hello my friend .. how are you doing?',
      });
    }, 3000);
  }

  handleSendMessage(e?: SubmitEvent) {
    e?.preventDefault();
    if (this.chatService.isLoading) return;
    const msg = this.message.trim();
    if (!msg) return;
    this.chatService.list.push({
      _id: generateId(),
      isAi: false,
      message: msg,
    });
    this.message = '';
  }

  handleFormKeyDown(e: KeyboardEvent) {
    if (this.chatService.isLoading) return;
    if (e.altKey || e.shiftKey || e.ctrlKey || e.key !== 'Enter') return;
    e.preventDefault();
    this.handleSendMessage();
  }
}
