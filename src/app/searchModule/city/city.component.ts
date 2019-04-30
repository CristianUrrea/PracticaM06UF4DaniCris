import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
  providers: [WeatherService]

})
export class CityComponent implements OnInit {
  cityNum:number;
  cityWeather:string;
  fromDate;
  toDate;
  citys:Array<Object> = [
      {num: 753692, name: "Barcelona"},
      {num: 1118370, name: "Tokyo"},
      {num: 2459115, name: "Nueva York NY"}
  ];

  constructor(
    private weatherService: WeatherService,
    private datePipe: DatePipe

  ) { }

  ngOnInit() {

  }

  ngDoCheck(){

    // let latest_date =this.datepipe.transform(this.fromDate, 'yyyy-MM-dd');

    // console.log  (latest_date);
  }

  async toCity(){
    const dateSendingToServer = new DatePipe('en-US').transform(this.fromDate, 'yyyy/MM/dd')

    // console.log(dateSendingToServer);

    this.cityNum = +this.cityNum;
    console.log(this.cityNum);
    const city_res = await this.weatherService.getCity(this.cityNum, dateSendingToServer);
    this.cityWeather = JSON.stringify(city_res);
    console.log(city_res);
  }
}
