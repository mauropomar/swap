import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { StarShipService } from '../../../services/starship';
import { StarShipModel } from '../../../models/starship';

@Component({
  selector: 'app-detail-starship',
  templateUrl: './detail-starship.component.html',
  styleUrls: ['./detail-starship.component.css']
})
export class DetailStarshipComponent implements OnInit {
  ship: StarShipModel;
  constructor(private shipService: StarShipService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.get(params.id);
    })
  }

  get(id: string): void{
    this.shipService.get(id).subscribe((data: any) => {
      this.ship = data;
    });
  }

  goBack(){
    this.router.navigate(['starships']);
  }
}
