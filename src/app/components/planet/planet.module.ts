import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetRoutingModule } from './planet-routing.module';
import { DetailPlanetComponent } from './detail/detail-planet.component';
import { ListPlanetComponent } from './list/list-planet.component';


@NgModule({
  declarations: [DetailPlanetComponent, ListPlanetComponent],
  imports: [
    CommonModule,
    PlanetRoutingModule
  ]
})
export class PlanetModule { }
