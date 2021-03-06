import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarRoutingModule } from './toolbar-routing.module';
import { ToolbarComponent } from './toolbar.component';
import { FilterComponent } from './filter/filter.component';
import { ButtonSearchComponent } from './search/button-search.component';


@NgModule({
  declarations: [ToolbarComponent, FilterComponent, ButtonSearchComponent],
  imports: [
    CommonModule,
    ToolbarRoutingModule,
    FormsModule
  ],
  exports:[
    ToolbarComponent
  ]
})
export class ToolbarModule { }
