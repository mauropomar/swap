import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../../services/people';
import { PeopleModel } from '../../../models/people';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  peoples: PeopleModel[] = [];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.peopleService.getAll().subscribe((data: any) => {
      const results = data.results;
      let i = 1;
      for(const item of results){
         item.id = this.getId(item.url);
         this.peoples.push(item);
         i++;
      }
    });
  }

  getId(url:string){
    const array = url.split('/');
    const id = array[5];
    return id;
  }

}
