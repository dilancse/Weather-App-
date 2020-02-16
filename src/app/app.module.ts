import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar/top-bar.component';
import { WeatherItemComponent } from './WeatherItem/weather-item/weather-item.component';
import { WeatherListComponent } from './WeatherList/weather-list/weather-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    WeatherItemComponent,
    WeatherListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
