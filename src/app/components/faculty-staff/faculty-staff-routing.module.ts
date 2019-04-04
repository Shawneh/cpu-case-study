
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyStaffComponent } from './faculty-staff.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: FacultyStaffComponent,
    children: [
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full'
      },
      {
        path: 'inquiry',
        component: InquiryComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyStaffRoutingModule { }
