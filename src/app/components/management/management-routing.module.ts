import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagementComponent } from './management.component';
import { InstalledSoftwareComponent } from './installed-software/installed-software.component';

const routes: Routes = [
  {
    path: '',
    component: ManagementComponent,
    children: [
      {
        path: '',
        redirectTo: 'installed-software',
        pathMatch: 'full'
      },
      {
        path: 'installed-software',
        component: InstalledSoftwareComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
