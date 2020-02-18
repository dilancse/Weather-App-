import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar/top-bar.component';
import { WeatherItemComponent } from './WeatherItem/weather-item/weather-item.component';
import { WeatherListComponent } from './WeatherList/weather-list/weather-list.component';
import { WeatherSearchComponent } from './searchBar/weather-search/weather-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WeatherItemComponent,
    WeatherListComponent,
    WeatherSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
