import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { NavbarRoutingModule } from './navbar-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NavbarRoutingModule,
    FormsModule,
    CommonModule
  ],
  //providers: [],
  //bootstrap: [ModulloginComponent]
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
