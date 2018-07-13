import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ValidationComponent } from './validation/validation.component';
import { RegistrationComponent } from './registration/registration.component';
import { BPayComponent } from './b-pay/b-pay.component';
import{Routes,RouterModule} from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
const routes:Routes=[{path:'registration',component:RegistrationComponent},
{path:'b-pay',component:BPayComponent},
{path:'nav-bar',component:NavBarComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    ValidationComponent,
    RegistrationComponent,
    BPayComponent,
    NavBarComponent,
    ReactiveFormsComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(routes),FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
