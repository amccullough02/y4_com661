import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'businesses',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.css',
})
export class BusinessesComponent {
  business_list = [
    {
      name: 'Pizza Mountain',
      town: 'Coleraine',
      rating: 5,
    },
    {
      name: 'Chilli Champions',
      town: 'Portadown',
      rating: 4,
    },
    {
      name: 'Sausage Supreme',
      town: 'Derry',
      rating: 3,
    },
  ];
}
