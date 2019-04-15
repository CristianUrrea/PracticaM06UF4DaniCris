import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CityComponent } from './city/city.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const routes: Routes = [
  {path: '', redirectTo: '/city', pathMatch: 'full' },
  {path: 'city', component: CityComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class  DropdownRoutingModule { }
