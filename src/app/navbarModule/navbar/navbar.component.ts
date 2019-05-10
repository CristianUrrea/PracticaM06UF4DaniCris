import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

checkLogin:boolean;
checkRegister:boolean;

  constructor() { }

  ngOnInit() {


  }


  ngDoCheck(){
    // si esta en el localStorage checkLogin true,
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login){
      this.checkLogin=false;

    } else {
      this.checkLogin = true;


    }

    const register = JSON.parse(localStorage.getItem('register'));
    if(!register){
      this.checkRegister=false;
    } else {
      this.checkRegister = true;


    }
  }

}
