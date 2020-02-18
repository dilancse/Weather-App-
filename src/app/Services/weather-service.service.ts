import { Injectable } from '@angular/core';
import { WEATHER_ITEMS } from '../Data/weather.data';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherItem } from '../Models/weather-item';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey = '0e0aa93fa2abe78d7688b8b16ab830dc';
  constructor(private http: HttpClient) { }

  getWeatherItems() {
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }

  searchWeatherData(cityname: string) : Observable<any> {

    return this.http.get('http://api.openweathermap.org/data/2.5/weather?&units=metric&q=' + cityname + '&appid=' + this.apiKey);
    //return of(WEATHER_ITEMS);
  }
}
