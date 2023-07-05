import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponentComponent } from './dashboard-component/dashboard-component.component';

const routes: Routes = [
  {path:'', component:DashboardComponentComponent},
  {path:'dashboard', component:DashboardComponentComponent},
  { path:'' ,redirectTo:'dashboard',pathMatch:'full'},
  {path: '**', redirectTo:'dashboard'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
