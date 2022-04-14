import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/services/toolbar';
import { StarShipService } from '../../../services/starship';
import { StarShipModel } from '../../../models/starship';

@Component({
  selector: 'app-detail-starship',
  templateUrl: './detail-starship.component.html',
  styleUrls: ['./detail-starship.component.css']
})
export class DetailStarshipComponent implements OnInit {
  ship: StarShipModel;
  errorMessage: string;

  constructor(private shipService: StarShipService, private activatedRoute: ActivatedRoute,
    private router: Router, private toolbarService: ToolbarService) {
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
    this.shipService.errorMessage.subscribe(error => {
      this.errorMessage = error
    })
    this.toolbarService.show(false);
  }

  get(id: string): void{
    this.shipService.get(id).subscribe((data) => {
      this.ship = data;
    });
  }

  goBack(): void{
    this.router.navigate(['starships']);
    this.toolbarService.show(true);
  }
}
