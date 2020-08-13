import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CounterReducer } from './counter.reducer';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    StoreModule.forRoot({ count: CounterReducer })
  ]
})
export class CounterModule { }
