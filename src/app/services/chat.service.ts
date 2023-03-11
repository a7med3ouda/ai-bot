import { Injectable } from '@angular/core';
import IChat from '../@types/IChat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  isLoading: boolean = false;
  list: IChat[] = [];
  constructor() {}
}
