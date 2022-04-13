import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [ToolbarComponent, FilterComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
