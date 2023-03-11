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
    const storedChat = localStorage.getItem('chat-list');
    this.list = storedChat ? JSON.parse(storedChat) : [];
  }

  addToChat({ isAi, message }: IChat) {
    this.list.push({
      _id: generateId(),
      isAi,
      message,
    });

    localStorage.setItem('chat-list', JSON.stringify(this.list));
  }

  sendMessage(message: string) {
    return this.http.post<{ message: string }>('/api/chat', {
      message,
    });
  }
}
