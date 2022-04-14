import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  searchText: string;
  lastSearch: string;

  constructor() {}

  ngOnInit(): void {}

  onChange(evt){
     this.find();
  }

  onClick(){
    this.find();
  }

  find(){
    if(this.searchText !== this.lastSearch){
      this.change.emit(this.searchText);
      this.lastSearch = this.searchText;
    }
  }
}
