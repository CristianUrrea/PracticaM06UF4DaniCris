import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DropdownRoutingModule } from './dropdown-routing.module';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CityComponent } from './city/city.component';

@NgModule({
    declarations: [
      CityComponent,
      DropdownComponent
    ],
    imports: [
      CommonModule,
      BrowserModule,
      FormsModule,
      DropdownRoutingModule

    ],
    exports: [
      DropdownComponent
    ],
    providers: []
})
export class DropdownModule { }
