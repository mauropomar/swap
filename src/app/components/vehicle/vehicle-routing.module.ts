import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListVehicleComponent } from './list/list-vehicle.component';
import { DetailVehicleComponent } from './detail/detail-vehicle.component';

const routes: Routes = [{
  path: '',
  component: ListVehicleComponent
},{
  path: ':id',
  component: DetailVehicleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
