import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from '../Data/weather.data';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor() { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }
}
