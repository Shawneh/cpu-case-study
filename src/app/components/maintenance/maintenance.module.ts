import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { MaintenanceComponent } from './maintenance.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      MaintenanceComponent
    ]
})

export class MaintenanceModule { }
