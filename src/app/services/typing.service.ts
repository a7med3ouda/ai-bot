import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  text: string = '';
  isTyping: boolean = false;

  constructor() {}

  make(message: string) {
    return new Promise((resolve, reject) => {
      this.text = '';
      this.isTyping = true;
      const interval = setInterval(() => {
        const index = this.text.length;
        if (index < message.length) {
          this.text += message[index];
        } else {
          clearInterval(interval);
          resolve(message);
          this.isTyping = false;
          this.text = '';
        }
      }, 30);
    });
  }
}
