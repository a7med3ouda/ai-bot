import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IChat from '../@types/IChat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  isLoading: boolean = false;
  list: IChat[] = [];
  constructor(private http: HttpClient) {}

  sendMessage(message: string, caputcha: string) {
    return this.http.post<{ message: string }>(
      '/api',
      {
        message,
      },
      {
        headers: {
          ['X-CAPUTCHA-TOKEN']: caputcha,
        },
      }
    );
  }
}
