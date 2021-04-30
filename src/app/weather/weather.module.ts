import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WeatherComponent } from './weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, } from '@angular/common/http';

@NgModule({
  declarations: [
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [WeatherComponent]
})

export class AppModule { }
