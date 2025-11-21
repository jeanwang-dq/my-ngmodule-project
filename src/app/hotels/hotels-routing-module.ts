import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Hotels } from './hotels';
import { HotelList } from './hotel-list/hotel-list';

const routes: Routes = [
  { path: '', component: HotelList },
  { path: 'room/:id', component: HotelList },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
