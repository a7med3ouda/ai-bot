import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let headers = new HttpHeaders();
    headers = headers.append('X-CAPUTCHA-TOKEN', caputcha);
    return this.http.post<{ message: string }>(
      '/api',
      {
        message,
      },
      {
        headers,
      }
    );
  }
}
