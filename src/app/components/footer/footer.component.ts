import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { TypingService } from 'src/app/services/typing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  message = '';

  @ViewChild('txt_message') txt_message!: ElementRef;

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
        this.txt_message.nativeElement.focus();
      },
      error: (error: HttpErrorResponse) => {
        let message = '';
        if (error.status === 429) {
          message = error.error;
        } else {
          message = error.error.message;
        }
        console.log(error.error);
        alert(message);
        this.chatService.isLoading = false;
        this.txt_message.nativeElement.focus();
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
