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
  @Input() caputcha: string = '';

  constructor(
    public typingService: TypingService,
    public chatService: ChatService
  ) {
    chatService.isLoading = true;
    setTimeout(async () => {
      const msg =
        "Hello, I'm AI Bot .. Created by Ahmed Ouda from ( https://ouddah.com ) .. How can I help you today?";
      await typingService.make(msg);
      chatService.isLoading = false;
      chatService.list.push({
        _id: generateId(),
        isAi: true,
        message: msg,
      });
    }, 1500);
  }

  handleSendMessage(e?: SubmitEvent) {
    e?.preventDefault();
    if (this.chatService.isLoading) return;
    const msg = this.message.trim();
    if (!msg) return;
    this.chatService.isLoading = true;
    this.chatService.list.push({
      _id: generateId(),
      isAi: false,
      message: msg,
    });
    this.message = '';

    this.chatService.sendMessage(msg, this.caputcha).subscribe({
      next: async (res) => {
        const message = res.message.trim();
        await this.typingService.make(message);
        this.chatService.list.push({
          _id: generateId(),
          isAi: true,
          message: message,
        });
        this.chatService.isLoading = false;
      },
      error: (error) => {
        console.log(error);
        this.chatService.isLoading = false;
      },
    });
  }

  handleFormKeyDown(e: KeyboardEvent) {
    if (this.chatService.isLoading) return;
    if (e.altKey || e.shiftKey || e.ctrlKey || e.key !== 'Enter') return;
    e.preventDefault();
    this.handleSendMessage();
  }
}
