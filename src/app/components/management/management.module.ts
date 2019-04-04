import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementRoutingModule } from './management-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { ManagementComponent } from './management.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      ManagementComponent
    ]
})

export class ManagementModule { }
