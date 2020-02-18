import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, Validators} from '@angular/forms';
import { WeatherServiceService } from 'src/app/Services/weather-service.service';
import { WeatherItem } from 'src/app/Models/weather-item';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  inputText: FormControl = new FormControl();

  constructor(private weatherServic: WeatherServiceService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    // console.log(this.inputText.value);
    this.weatherServic.searchWeatherData(this.inputText.value)
    .subscribe(value => {
      const weatherItem = {cityName: value.name, info: value.weather[0].description, temperature: value.main.temp };
      this.weatherServic.addWeatherItem(weatherItem);
    });

    console.log( this.weatherServic.getWeatherItems());
  }
}
