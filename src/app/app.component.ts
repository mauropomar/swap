import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToolbarService } from 'src/app/services/toolbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Swap';
  showTBar = true;
  public sucription: Subscription;

  constructor(private toolbarService: ToolbarService) {}

  ngOnInit(): void {
    this.sucription = this.toolbarService.showTBarSubject.subscribe((val) => {
      this.showTBar = val;
    });
  }

  ngOnDestroy() {
    this.sucription.unsubscribe();
  }
}
