import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MdCheckboxModule} from '@angular/material';

import { AppComponent } from './app.component';
import { TodoElementComponent } from './todo-element/todo-element.component';
import { FooterLeftComponent } from './footer-left/footer-left.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoElementComponent,
    FooterLeftComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
