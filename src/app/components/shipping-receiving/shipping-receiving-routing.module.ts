import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddComputerComponent } from './add-computer/add-computer.component';
import { OverviewComponent } from './overview/overview.component';
import { ShippingReceivingComponent } from './shipping-receiving.component';

const routes: Routes = [
  {
    path: '',
    component: ShippingReceivingComponent,
    children: [
      {
        path: '',
        redirectTo: 'add-computer',
        pathMatch: 'full'
      },
      {
        path: 'add-computer',
        component: AddComputerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippingReceivingRoutingModule { }
