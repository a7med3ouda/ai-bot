import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SendIconComponent } from './components/send-icon/send-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BotIconComponent } from './components/bot-icon/bot-icon.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { CaputchaComponent } from './components/caputcha/caputcha.component';
import { NgHcaptchaModule } from 'ng-hcaptcha';

@NgModule({
  declarations: [
    AppComponent,
    SendIconComponent,
    LoadingComponent,
    BotIconComponent,
    UserIconComponent,
    HeaderComponent,
    FooterComponent,
    ChatComponent,
    CaputchaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgHcaptchaModule.forRoot({
      siteKey: '63548551-867b-4f97-8697-a71f20b0b773',
      // languageCode: 'en' // optional, will default to browser language
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
