import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleModule } from './authModule/auth-module.module';
import { LoginComponent } from './authModule/login/login.component';
import { RegisterComponent } from './authModule/register/register.component';

const routes: Routes = [
  { path:'' ,redirectTo:'login',pathMatch:'full'}, 
  { path:'login' ,component: LoginComponent}, 
  { path:'register' ,component: RegisterComponent},
  { path:'dashboard' ,loadChildren:()=>import("./Modules/dashboardModule/dashboard.module").then(m=>m.DashboardModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
