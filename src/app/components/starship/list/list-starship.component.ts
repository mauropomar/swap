import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { FilterService } from '../../../services/filter';
import { StarShipService } from '../../../services/starship';

@Component({
  selector: 'app-list-starship',
  templateUrl: './list-starship.component.html',
  styleUrls: ['./list-starship.component.css']
})
export class ListStarshipComponent implements OnInit, OnDestroy {
  ships = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(private shipService: StarShipService,  private filterService: FilterService) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      const url = window.location.href.split('/');
      if (url[3] === 'starships') {
        this.filter(text);
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();
  }

  getAll() {
    this.shipService.getAll().subscribe((data: any) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.ships.push(item);
         localStorage.setItem('items', JSON.stringify(this.ships));
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }

  filter(text: string) {
    let array: any = localStorage.getItem('items');
    array = JSON.parse(array);
    text = text !== '' ? text.toLocaleLowerCase() : '';
    this.ships = array.filter(
      (item: any) =>
        item.name.toLocaleLowerCase().indexOf(text) > -1 ||
        item.model.toLocaleLowerCase().indexOf(text) > -1 ||
        item.manufacturer.toLocaleLowerCase().indexOf(text) > -1 ||
        item.starship_class.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.ships.length === 0;
    if (this.ships.length > 0 && text !== '') {
      let search = localStorage.getItem('search');
      let searchArray = search !== null ? JSON.parse(search) : [];
      const obj = {
        text: text,
        route: 'starships',
      };
      searchArray.push(obj);
      localStorage.setItem('search', JSON.stringify(searchArray));
      this.filterService.reloadSearch();
    }
  }
}
