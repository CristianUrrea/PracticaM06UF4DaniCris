import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [WeatherService]

})
export class CityComponent implements OnInit {

  constructor(
    private weatherService: WeatherService

  ) { }

  async ngOnInit() {
    const city_res = await this.weatherService.getCity();
    console.log(city_res);
  }

}
