import { Component, OnInit } from '@angular/core';

import { Weather } from './weather';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'wbs-weather-app',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  public params: Weather = {
    date: '0',
    time: '0',
    windDomDir: 'N',
    temp: 0,
    hum: 0,
    dew: 0,
    press: 0,
    windAvg: 0,
    windAvgDayMax: 0,
    windAvgDayMaxTime: '0',
    wind: 0,
    windMax: 0,
    windAvgDir: 0,
    windDayMax: 0,
    windDayMaxTime: '0',
    windDir: 0,
    windBft: 0,
    tempDayMax: 0,
    tempDayMaxTime: '0',
    tempDayMin: 0,
    tempDayMinTime: '0',
  };
  public CurrentDate;

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

  public round(num) {
    var m = Number((Math.abs(num) * 10).toPrecision(15));
    return Math.round(m) / 10 * Math.sign(num);
  }

  public deg2dir(windDeg): string {
		var degrees = [
      [11.25,"N"],
      [33.75,"NNO"],
      [56.25, "NO"],
      [78.75, "ONO"],
      [101.25, "O"], 
      [123.75,"OSO"], 
      [146.25,"SO"],
      [168.75, "SSO"],
      [191.25,"S"],
      [213.75, "SSW"],
      [236.25, "SW"],
      [258.75, "WSW"],
      [281.25,"W"],
      [303.75,"WNW"],
      [326.25,"NW"],
      [348.75,"NNW"],
      [360, "N"]
    ];
		for (let i=0; i<degrees.length; i++) {
			let direction = degrees[i][0];
			if (direction > windDeg) {
				return String(degrees[i][1]);
			}
		}
	}

  getData(): void {
    const params = 'https://www.wattnboardsport.de/fileadmin/cam/wetter/params.json';

    this.http.get(params, {}).subscribe((data: Weather) => {
      this.params.date = data[0];
      this.params.time = data[1];
      this.params.temp = parseFloat(data[2]);
      this.params.hum = parseFloat(data[3]);
      this.params.dew = parseFloat(data[4]);
      this.params.press = parseFloat(data[10]);
      this.params.windAvg = this.round(data[5] * 1.944);
      this.params.windAvgDayMax = this.round(data[30] * 1.944);
      this.params.windAvgDayMaxTime = data[31];
      this.params.wind = this.round(data[6] * 1.944);
      this.params.windMax = this.round(data[40] * 1.944);
      this.params.windAvgDir = parseFloat(data[51]);
      this.params.windDayMax = this.round(data[32] * 1.944);
      this.params.windDayMaxTime = data[33].substring(8,10) + ':' + data[33].substring(10,12) + ' Uhr';
      this.params.windDir = parseFloat(data[7]);
      this.params.windBft = parseFloat(data[12]);
      this.params.tempDayMax = parseFloat(data[26]);
      this.params.tempDayMaxTime = data[27];
      this.params.tempDayMin = parseFloat(data[28]);
      this.params.tempDayMinTime = data[29];
      this.params.windDomDir = this.deg2dir(data[51]);
      console.log(this.params);
    });
  }
}
