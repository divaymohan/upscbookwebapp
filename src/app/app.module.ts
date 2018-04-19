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
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { HttpModule, Http,  URLSearchParams,Response, RequestOptions, Headers } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './_directives/index';
import { AlertService } from './_services/index';




@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    RegisterComponent,
    HomeComponent,
    TestComponent,
    AlertComponent
 
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AlertService],
  bootstrap: [AppComponent],
  
})
export class AppModule{ }
