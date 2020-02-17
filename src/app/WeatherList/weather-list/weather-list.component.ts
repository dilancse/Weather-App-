import { Component, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/Models/weather-item';
import { WEATHER_ITEMS } from 'src/app/Data/weather.data';
import { WeatherServiceService } from 'src/app/Services/weather-service.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit() {
    this.weatherItems = this.weatherService.getWeatherItems();
  }

}
