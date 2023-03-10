import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TypingService {
  text: string = '';
  isTyping: boolean = false;

  constructor() {}

  make(str: string) {
    this.text = '';
    this.isTyping = true;
    const interval = setInterval(() => {
      const index = this.text.length;
      if (index < str.length) {
        this.text += str[index];
      } else {
        this.isTyping = false;
        clearInterval(interval);
      }
    }, 30);
  }
}
