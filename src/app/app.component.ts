import { Component } from '@angular/core';
import { CaputchaService } from './services/caputcha.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ai-bot';
  constructor(public caputchaService: CaputchaService) {}
}
