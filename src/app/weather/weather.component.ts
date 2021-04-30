import { Component, OnInit } from '@angular/core';

import { Weather } from './weather';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'wbs-weather-app',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public gauge: Weather = {
    temp: '0',
    tempunit: '0',
    hum: '0',
    wspeed: '0',
    wgust: '0',
    wgustTM: '0',
    TwgustTM: '0',
    avgbearing: '0',
    domwinddir: '0',
    press: '0',
    date: '0'
  };
  public CurrentDate;
  myDate = new Date();


  constructor(private http: HttpClient) {
    this.CurrentDate = new Date();
  }

  ngOnInit(): void {
    this.getData();
    setInterval(() => {
      this.getData();
    }, 60000);
  }

  public goToLink(url: string): void{
    window.open(url, '_blank');
  }

  getData(): void {
    const realtimeGauge = '/fileadmin/cam/wetter/weather.php';
    //const realtimeGauge = './assets/data.json';
    this.http.get(realtimeGauge, {}).subscribe((data: Weather) => {
      this.gauge = data;
    },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log(`Backend returned: ${err.error.message}`);
        } else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
        }
      });
  }
}
