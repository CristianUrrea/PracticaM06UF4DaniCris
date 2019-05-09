import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username:string;
  pass:string;
  checkLogin:boolean;

  constructor(private route: ActivatedRoute,
  private router: Router,
  private userService: UserService
) { }

  ngOnInit() {
  }

    async registro(){
     const res = await this.userService.getRegister();
     alert("Register succed");
      // console.log(res);
      //
      // console.log(this.username, this.pass);
      // const login = {
      //   username: this.username,
      //   pass: this.pass
      // };
      // localStorage.setItem('login',JSON.stringify(login));
      // console.log(JSON.parse(localStorage.getItem('login')));




      // const url = "https://reqres.in/api/login/1";
      // let data = {email: "eve.holt@reqres.in", password: "cityslicka"}
      //   fetch(url, {
      //   method: 'POST', // or 'PUT'
      //   body: JSON.stringify(data), // data can be `string` or {object}!
      //   headers:{
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => res.json())
      // .catch(error => console.error('Error:', error))
      // .then(response => localStorage.setItem('login',JSON.stringify(response.token)));
      //
      // console.log(JSON.parse(localStorage.getItem('login')));
    }

}
