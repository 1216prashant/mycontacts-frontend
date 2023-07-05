import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleModule } from './authModule/auth-module.module';
import { DashboardComponentComponent } from './Modules/dashboardModule/dashboard-component/dashboard-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DashboardComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AuthModuleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
