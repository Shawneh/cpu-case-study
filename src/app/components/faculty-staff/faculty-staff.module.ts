import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyStaffRoutingModule } from './faculty-staff-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { FacultyStaffComponent } from './faculty-staff.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  imports: [
    CommonModule,
    FacultyStaffRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      FacultyStaffComponent,
      InquiryComponent,
      OverviewComponent
    ]
})

export class FacultyStaffModule { }
