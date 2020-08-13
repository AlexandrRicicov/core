import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { CounterReducer } from './counter.reducer';
import { CounterService } from './counter.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ count: CounterReducer })
  ],
  providers: [CounterService]
})
export class CounterModule { }
