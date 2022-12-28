import { Component } from '@angular/core';

interface settlement {
  name: string;
  county: string;
  area: number;
  population: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'latogatni';
}
