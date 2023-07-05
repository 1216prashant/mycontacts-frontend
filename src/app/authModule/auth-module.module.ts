import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path: '**', redirectTo:''}
]

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModuleModule { }
