import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { DetailVehicleComponent } from './detail/detail-vehicle.component';
import { ListVehicleComponent } from './list/list-vehicle.component';


@NgModule({
  declarations: [DetailVehicleComponent, ListVehicleComponent],
  imports: [
    CommonModule,
    VehicleRoutingModule
  ]
})
export class VehicleModule { }
