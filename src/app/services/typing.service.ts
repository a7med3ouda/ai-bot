import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  text: string = '';
  isTyping: boolean = false;

  constructor() {}

  make(str: string) {
    return new Promise((resolve, reject) => {
      this.text = '';
      this.isTyping = true;
      const interval = setInterval(() => {
        const index = this.text.length;
        if (index < str.length) {
          this.text += str[index];
        } else {
          clearInterval(interval);
          resolve(str);
          this.isTyping = false;
          this.text = '';
        }
      }, 30);
    });
  }
}
