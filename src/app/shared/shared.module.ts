import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
  ],

  exports: [
    HeaderComponent,
]


})

export class SharedModule { }
