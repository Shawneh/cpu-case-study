import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftwareUserRoutingModule } from './software-user-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { SoftwareUserComponent } from './software-user.component';

@NgModule({
  imports: [
    CommonModule,
    SoftwareUserRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      SoftwareUserComponent
    ]
})

export class SoftwareUserModule { }
