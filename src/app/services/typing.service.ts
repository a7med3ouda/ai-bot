import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  text: string = '';
  isTyping: boolean = false;
  endTyping: boolean = false;

  constructor() {}

  make(message: string) {
    return new Promise((resolve, reject) => {
      this.text = '';
      this.isTyping = true;
      const interval = setInterval(() => {
        const index = this.text.length;
        if (index < message.length && this.endTyping === false) {
          this.text += message[index];
        } else {
          this.endTyping = false;
          this.isTyping = false;
          clearInterval(interval);
          resolve(message);
          this.text = '';
        }
      }, 30);
    });
  }
}
