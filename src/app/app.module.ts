import { CounterService } from './counter/counter.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/counter.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule
  ],
  providers: []
})
export class AppModule { }
