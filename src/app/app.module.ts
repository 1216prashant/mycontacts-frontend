import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleModule } from './authModule/auth-module.module';
import { DashboardComponentComponent } from './Modules/dashboardModule/dashboard-component/dashboard-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorInterceptor } from './httpInterceptor/http-interceptor.interceptor';
import { HeaderComponent } from './Modules/header/header.component';
import { CreateContactComponent } from './Modules/create-contact/create-contact.component';
import { HomeComponent } from './Modules/home/home.component';

@NgModule({
  declarations: [AppComponent, DashboardComponentComponent, HeaderComponent, CreateContactComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModuleModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:HttpInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
