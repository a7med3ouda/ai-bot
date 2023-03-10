import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendIconComponent } from './components/send-icon/send-icon.component';
import { LoadingComponent } from './components/loading/loading.component';
import { BotIconComponent } from './components/bot-icon/bot-icon.component';
import { UserIconComponent } from './components/user-icon/user-icon.component';

@NgModule({
  declarations: [AppComponent, SendIconComponent, LoadingComponent, BotIconComponent, UserIconComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
