import { Component } from '@angular/core';
import { CaputchaService } from 'src/app/services/caputcha.service';
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
    public chatService: ChatService,
    private caputchaService: CaputchaService
  ) {
    chatService.isLoading = true;
    setTimeout(async () => {
      const msg =
        "Hello, I'm AI Bot .. Created by Ahmed Ouda from ( https://ouddah.com ) .. How can I help you today?";
      await typingService.make(msg);
      chatService.isLoading = false;
      chatService.addToChat({ isAi: true, message: msg });
    }, 1500);
  }

  handleSendMessage(e?: SubmitEvent) {
    e?.preventDefault();
    if (this.chatService.isLoading) return;
    const msg = this.message.trim();
    if (!msg) return;
    this.chatService.isLoading = true;
    this.chatService.addToChat({
      isAi: false,
      message: msg,
    });
    this.message = '';

    this.chatService.sendMessage(msg).subscribe({
      next: async (res) => {
        const message = res.message.trim();
        await this.typingService.make(message);
        this.chatService.addToChat({
          isAi: true,
          message: message,
        });
        this.chatService.isLoading = false;
      },
      error: (error) => {
        this.chatService.isLoading = false;
        this.caputchaService.caputcha = '';
        alert(error.error.message);
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
