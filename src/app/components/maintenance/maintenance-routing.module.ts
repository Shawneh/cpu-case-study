import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaintenanceComponent } from './maintenance.component';
import { InstalledComputersComponent } from './installed-computers/installed-computers.component';

const routes: Routes = [
  {
    path: '',
    component: MaintenanceComponent,
    children: [
      {
        path: '',
        redirectTo: 'installed-computers',
        pathMatch: 'full'
      },
      {
        path: 'installed-computers',
        component: InstalledComputersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
