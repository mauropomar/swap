import { Component, OnInit } from '@angular/core';
import { FilterService } from 'src/app/services/filter';
import { ToolbarService } from 'src/app/services/toolbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private filterService: FilterService, private toolbarService: ToolbarService) { }

  ngOnInit(): void {
  }

  onClick(){
    this.filterService.setFilterText('');
    this.toolbarService.show(true);
  }

}
