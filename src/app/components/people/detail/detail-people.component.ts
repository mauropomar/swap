import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/services/toolbar';
import { PeopleService } from '../../../services/people';
import { PeopleModel } from '../../../models/people';

@Component({
  selector: 'app-detail-people',
  templateUrl: './detail-people.component.html',
  styleUrls: ['./detail-people.component.css']
})
export class DetailPeopleComponent implements OnInit {
  people: PeopleModel;
  errorMessage: string;

  constructor(private peopleService: PeopleService, private activatedRoute: ActivatedRoute,
    private router: Router, private toolbarService: ToolbarService) {
    this.errorMessage = '';
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
    this.peopleService.errorMessage.subscribe(error => {
      this.errorMessage = error
    })
    this.toolbarService.show(false);
  }

  get(id: string): void{
    this.peopleService.get(id).subscribe((data) => {
      this.people = data;
    });
  }

  goBack(): void{
    this.router.navigate(['peoples']);
    this.toolbarService.show(true);
  }

}
