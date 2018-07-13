import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import{FormsModule} from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component'

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    EmployeeComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
