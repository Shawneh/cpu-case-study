import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/shared/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'faculty-staff',
    loadChildren: './components/faculty-staff/faculty-staff.module#FacultyStaffModule'
  },
  {
    path: 'maintenance',
    loadChildren: './components/maintenance/maintenance.module#MaintenanceModule'
  },
  {
    path: 'management',
    loadChildren: './components/management/management.module#ManagementModule'
  },
  {
    path: 'shipping-receiving',
    loadChildren: './components/shipping-receiving/shipping-receiving.module#ShippingReceivingModule'
  },
  {
    path: 'software-user',
    loadChildren: './components/software-user/software-user.module#SoftwareUserModule'
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
