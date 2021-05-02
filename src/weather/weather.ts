export interface Weather {
  date: string;
  time: string;
  windDomDir: string;
  temp: number;
  hum: number;
  dew: number;
  press: number;
  windAvg: number;
  windAvgDayMax: number;
  windAvgDayMaxTime: string;
  wind: number;
  windMax: number;
  windDayMax: number;
  windDayMaxTime: string;
  windDir: number;
  windAvgDir: number;
  windBft: number;
  tempDayMax: number;
  tempDayMaxTime: string;
  tempDayMin: number;
  tempDayMinTime: string;
}
