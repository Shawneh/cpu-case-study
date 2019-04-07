import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { ManagementComponent } from './management.component';
import { InstalledSoftwareComponent } from './installed-software/installed-software.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      ManagementComponent,
      InstalledSoftwareComponent
    ]
})

export class ManagementModule { }
