import { Injectable } from '@angular/core';
import { CONSTANTS_WEATHER } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  async getCity(city, time){
    try{
      const city_res = await fetch(`${CONSTANTS_WEATHER.url}location/${city}/${time}`);
      return await city_res.json();
    } catch(e){
      console.log(e);
    }
  }
}
