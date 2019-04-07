import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { MaintenanceComponent } from './maintenance.component';
import { InstalledComputersComponent } from './installed-computers/installed-computers.component';

@NgModule({
  imports: [
    CommonModule,
    MaintenanceRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      MaintenanceComponent,
      InstalledComputersComponent
    ]
})

export class MaintenanceModule { }
