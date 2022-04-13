import { Component, OnInit } from '@angular/core';
import {FilterService} from './../../services/filter';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  changeFilter(text: string){
    this.filterService.setFilterText(text);
  }

}
