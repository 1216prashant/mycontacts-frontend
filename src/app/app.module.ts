import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModuleModule } from './authModule/auth-module.module';
import { DashboardComponentComponent } from './Modules/dashboardModule/dashboard-component/dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
