import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RectangleComponent } from './rectangle/rectangle.component';

import { FormsModule } from '@angular/forms';
import { TempuratureComponent } from './tempurature/tempurature.component';
import { RevStringComponent } from './rev-string/rev-string.component';
import { SummaryPipeComponent } from './summary-pipe/summary-pipe.component';
import {ReverseStringPipe } from './reverse.pipe';
import {SummaryStringPipe } from './summary.pipe';
import { OrderByComponent } from './order-by/order-by.component';

import {orderByPipe} from './orderBy.pipe';


@NgModule({
  declarations: [
    AppComponent,
    RectangleComponent,
    TempuratureComponent,
    RevStringComponent,
    ReverseStringPipe,
    SummaryStringPipe,
    SummaryPipeComponent,
    OrderByComponent,
    orderByPipe
    
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
