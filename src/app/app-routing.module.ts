import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModuleModule } from './authModule/auth-module.module';
import { LoginComponent } from './authModule/login/login.component';
import { RegisterComponent } from './authModule/register/register.component';
import { AuthComponentComponent } from './authModule/auth-component/auth-component.component';
import { LogoutComponent } from './authModule/logout/logout.component';

const routes: Routes = [
  // {path:'',},

  { path: '', component: AuthComponentComponent },
  { path: 'login', component: AuthComponentComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./Modules/dashboardModule/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
