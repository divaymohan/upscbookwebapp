import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
    {
      path: 'login',
     
      component: LoginComponent
    },
    {
      path: 'register',
      component: RegisterComponent
    },
    {
      path:'home',
      component: HomeComponent
    },
    {
      path:'',
      redirectTo: 'home',
      pathMatch:'full'
    },
    {
      path:'test',
      component: TestComponent
    }

    
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}