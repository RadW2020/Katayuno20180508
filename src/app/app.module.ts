import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { Kata20180522Component } from './kata20180522/kata20180522.component';
import { Kata20180529Component } from './kata20180529/kata20180529.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertButtonComponent,
    Kata20180522Component,
    Kata20180529Component
  ],
  imports: [
    BrowserModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
