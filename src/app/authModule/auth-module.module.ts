import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AuthComponentComponent } from './auth-component/auth-component.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: AuthComponentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponentComponent,
    NotFoundComponentComponent,
    LogoutComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
})
export class AuthModuleModule {}
