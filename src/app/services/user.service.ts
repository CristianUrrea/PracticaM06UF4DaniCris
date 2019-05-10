import { Injectable } from '@angular/core';
import { CONSTANTS_LOGIN } from './constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  async getUser(email, password){
    try {
      const url = "https://reqres.in/api/login";
      let data = {email: "eve.holt@reqres.in", password: "cityslicka"}
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => localStorage.setItem('login',JSON.stringify(response.token)));

      console.log(JSON.parse(localStorage.getItem('login')));
      } catch(e) {
        console.log(e);
    }
  }

  async getRegister(email, password){
    try {
      const url = "https://reqres.in/api/register";
      let data = {email: "eve.holt@reqres.in", password: "pistol"}
        fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => localStorage.setItem('register',JSON.stringify(response.token)));

      console.log(JSON.parse(localStorage.getItem('register')));
      } catch(e) {
        console.log(e);
    }
  }
}
