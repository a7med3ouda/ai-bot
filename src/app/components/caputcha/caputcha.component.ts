import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-caputcha',
  templateUrl: './caputcha.component.html',
  styleUrls: ['./caputcha.component.scss'],
})
export class CaputchaComponent {
  @Output() caputchaChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() caputcha: string = '';

  onVerify(token: string) {
    this.caputchaChange.emit(token);
  }

  onExpired(response: any) {
    // The verification expired.
    this.caputchaChange.emit('');
  }

  onError(error: any) {
    // An error occured during the verification process.
    this.caputchaChange.emit('');
  }
}
