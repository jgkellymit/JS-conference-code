import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { LoginPage } from './LoginPage';
import { Spin } from './Spin';
import { Wheels } from './Wheels';

import { getSpin } from './getSpin';

@NgModule({
  declarations: [
    AppComponent, Spin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [getSpin],
  bootstrap: [AppComponent]
})
export class AppModule { }
