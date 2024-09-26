import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  title = 'Naše usluge';
  servicesList = [
    'Osobni treninzi',
    'Grupni treninzi',
    'Nutricionističko savjetovanje',
    'Fitness programi',
    'Wellness usluge'
  ];
}
