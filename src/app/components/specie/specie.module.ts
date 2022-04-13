import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecieRoutingModule } from './specie-routing.module';
import { ListSpecieComponent } from './list/list-specie.component';
import { DetailSpecieComponent } from './detail/detail-specie.component';


@NgModule({
  declarations: [ListSpecieComponent, DetailSpecieComponent],
  imports: [
    CommonModule,
    SpecieRoutingModule
  ]
})
export class SpecieModule { }
