import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public test;
  title = 'weather-app';

  constructor() {
    this.test = 'Blex';
  }
}
