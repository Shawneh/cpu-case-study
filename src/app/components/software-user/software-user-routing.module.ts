import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SoftwareUserComponent } from './software-user.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    component: SoftwareUserComponent,
    children: [
      {
        path: '',
        redirectTo: 'training',
        pathMatch: 'full'
      },
      {
        path: 'training',
        component: TrainingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SoftwareUserRoutingModule { }
