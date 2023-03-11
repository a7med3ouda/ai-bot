import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CaputchaService {
  caputcha = '';
  constructor(private http: HttpClient) {}

  validate(token: string) {
    this.http
      .post(
        '/api/caputcha',
        {},
        {
          headers: {
            ['x-caputcha-token']: token,
          },
        }
      )
      .subscribe({
        next: () => {
          this.caputcha = token;
        },
        error: () => {
          this.caputcha = '';
        },
      });
  }
}
