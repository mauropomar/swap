import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PeopleService } from '../../../services/people';
import { FilterService } from '../../../services/filter';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit, OnDestroy {
  peoples = [];
  isEmpty: boolean = false;
  public sucription: Subscription;

  constructor(private peopleService: PeopleService, private filterService: FilterService) {
    this.sucription = this.filterService.filterSubject.subscribe((text) => {
      if (this.peoples.length > 0) {
        this.filter(text);
      }else{
        if(this.isEmpty){
          this.peoples = JSON.parse(localStorage.getItem('items'));
          this.isEmpty = false
        }
      }
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  ngOnDestroy(): void {
    this.sucription.unsubscribe();
  }

  getAll():void {
    this.peopleService.getAll().subscribe((data) => {
      const results = data.results;
      for(const item of results){
         item.id = this.getId(item.url);
         this.peoples.push(item);
      }
      localStorage.setItem('items', JSON.stringify(this.peoples));
      const text = this.filterService.getFiltertext();
      if (text !== '') {
        this.filter(text);
      }
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
    this.peoples = array.filter(
      (item: any) =>
        item.name.toLocaleLowerCase().indexOf(text) > -1 ||
        item.birth_year.toLocaleLowerCase().indexOf(text) > -1
    );
    this.isEmpty = this.peoples.length === 0;
    if (this.peoples.length > 0 && text !== '') {
      let search = localStorage.getItem('search');
      let searchArray = search !== null ? JSON.parse(search) : [];
      const obj = {
        text: text,
        route: 'peoples',
      };
      const elements = searchArray.filter(
        (item) => item.text === obj.text && item.route === obj.route
      );
      if (elements.length === 0) {
        searchArray.push(obj);
        localStorage.setItem('search', JSON.stringify(searchArray));
        this.filterService.reloadSearch();
      }
    }
  }

}
