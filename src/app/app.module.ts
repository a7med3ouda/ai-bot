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

@NgModule({
  declarations: [
    AppComponent,
    SendIconComponent,
    LoadingComponent,
    BotIconComponent,
    UserIconComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
