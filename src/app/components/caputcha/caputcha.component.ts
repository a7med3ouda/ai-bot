import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaputchaService } from 'src/app/services/caputcha.service';

@Component({
  selector: 'app-caputcha',
  templateUrl: './caputcha.component.html',
  styleUrls: ['./caputcha.component.scss'],
})
export class CaputchaComponent {
  constructor(private cap: CaputchaService) {}

  onVerify(token: string) {
    this.cap.caputcha = token;
    // this.caputchaChange.emit(token);
  }

  onExpired(response: any) {
    this.cap.caputcha = '';
  }

  onError(error: any) {
    this.cap.caputcha = '';
  }
}
