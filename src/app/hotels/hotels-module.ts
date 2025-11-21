import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HotelsRoutingModule } from './hotels-routing-module';
import { Hotels } from './hotels';
import { HotelList } from './hotel-list/hotel-list';


@NgModule({
  declarations: [
    Hotels,
    HotelList
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule
  ]
})
export class HotelsModule { }
