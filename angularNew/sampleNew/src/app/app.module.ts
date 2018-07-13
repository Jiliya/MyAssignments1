import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Rectangle } from './rectangle.component';
import { FormsModule } from '@angular/forms';
import { Student } from './student.component';
import { ArryOfObj } from './arryOfObj.component';
@NgModule({
  declarations: [
    AppComponent,Rectangle,Student,ArryOfObj
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
