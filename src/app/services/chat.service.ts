import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IChat from '../@types/IChat';
import { generateId } from '../@types/static';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  isLoading: boolean = false;
  list: IChat[];
  constructor(private http: HttpClient) {
    const chatList = JSON.parse(localStorage.getItem('chat-list') || '');
    this.list = Array.isArray(chatList) ? chatList : [];
  }

  addToChat({ isAi, message }: { isAi: boolean; message: string }) {
    this.list.push({
      _id: generateId(),
      isAi,
      message,
    });

    localStorage.setItem('chat-list', JSON.stringify(this.list));
  }

  sendMessage(message: string, caputcha: string) {
    return this.http.post<{ message: string }>(
      '/api',
      {
        message,
      },
      {
        headers: {
          ['x-caputcha-token']: caputcha,
        },
      }
    );
  }
}
