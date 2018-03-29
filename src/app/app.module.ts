import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import {Routes, RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ }
