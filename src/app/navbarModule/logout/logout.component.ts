import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  username:string;
  pass:string;
  checkLogin:boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }
  ngDoCheck(){
    // si esta en el localStorage checkLogin true,
    const login = JSON.parse(localStorage.getItem('login'));
    if(!login){
    } else {

    }
  }
  desloguearse(){
    //eliminar el storage al logout
    localStorage.removeItem('login');
    this.router.navigate(['/']);
  }

}
