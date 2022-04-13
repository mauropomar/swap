import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { VehicleService } from '../../../services/vehicle';
import { FilterService } from '../../../services/filter';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.css']
})
export class ListVehicleComponent implements OnInit, OnDestroy {
  vehicles = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(private vehicleService: VehicleService,  private filterService: FilterService) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'vehicles') {
        this.filter(text);
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.sucription.unsubscribe();
  }

  getAll(): void {
    this.vehicleService.getAll().subscribe((data) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.vehicles.push(item);
      }
      localStorage.setItem('items', JSON.stringify(this.vehicles));
    });
  }

  getId(url:string): string{
    const array = url.split('/');
    const id = array[5];
    return id;
  }

  filter(text: string): void {
    let array: any = localStorage.getItem('items');
    array = JSON.parse(array);
    text = text !== '' ? text.toLocaleLowerCase() : '';
    this.vehicles = array.filter(
      (item: any) =>
        item.name.toLocaleLowerCase().indexOf(text) > -1 ||
        item.model.toLocaleLowerCase().indexOf(text) > -1 ||
        item.manufacturer.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.vehicles.length === 0;
    if (this.vehicles.length > 0 && text !== '') {
      let search = localStorage.getItem('search');
      let searchArray = search !== null ? JSON.parse(search) : [];
      const obj = {
        text: text,
        route:'vehicles',
      };
      searchArray.push(obj);
      localStorage.setItem('search', JSON.stringify(searchArray));
      this.filterService.reloadSearch();
    }
  }
}
