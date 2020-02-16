import { Component, OnInit } from '@angular/core';
import { WeatherItem } from 'src/app/Models/weather-item';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {

  weatherItem: WeatherItem;

  constructor() {
    this.weatherItem = new WeatherItem();
    this.weatherItem.cityName = 'Melbourn';
    this.weatherItem.info = 'Sunny';
    this.weatherItem.temperature = 23.56;
  }

  ngOnInit() {
  }

}
