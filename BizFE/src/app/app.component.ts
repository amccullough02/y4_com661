import { Component } from '@angular/core';
import { Data, RouterOutlet } from '@angular/router';
import { BusinessesComponent } from './businesses.component';
import { NavComponent } from './nav.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BusinessesComponent, NavComponent],
  providers: [DataService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'BizDB Front-end';

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.populateReviews();
  }
}
