import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DropdownModule } from './searchModule/dropdown.module';

import { WeatherService } from './services/weather.service';
import { DatePipe } from '@angular/common';

import { NavbarModule } from './navbarModule/navbar.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DropdownModule,
    AppRoutingModule,
    NavbarModule

  ],
  providers: [WeatherService, DatePipe],
  bootstrap: [AppComponent]
})
  export class AppModule { }
