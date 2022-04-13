import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() change = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  onKeyUp(evt) {
    const str = evt.currentTarget.value;
    this.change.emit(str);
  }
}
