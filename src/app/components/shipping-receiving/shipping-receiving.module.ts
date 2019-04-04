import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingReceivingRoutingModule } from './shipping-receiving-routing.module';
import { AppMaterialModule } from '../../app-material.module';

import { ShippingReceivingComponent } from './shipping-receiving.component';
import { OverviewComponent } from './overview/overview.component';
import { AddComputerComponent } from './add-computer/add-computer.component';

@NgModule({
  imports: [
    CommonModule,
    ShippingReceivingRoutingModule,
    AppMaterialModule
  ],
  declarations: [
      ShippingReceivingComponent,
      OverviewComponent,
      AddComputerComponent
    ]
})

export class ShippingReceivingModule { }
