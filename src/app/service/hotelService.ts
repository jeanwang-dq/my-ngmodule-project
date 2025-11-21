import { Injectable } from '@angular/core';
import { Hotel, IRooms } from '../interface/IHotelList';

@Injectable({
  providedIn: 'root',
})
export class HotelService {
 public getHotelList(): Hotel[] {
    const hotels: Hotel[] = [
      { hotel_id: 1, name: '城市之光大飯店', price: 2800, imageUrl: 'assets/hotel-list/hotel1.png', rating: 4.5 ,location: '泰國',favorite:false,
        rooms: [
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          
        ]},
      { hotel_id: 2, name: '海灣度假村', price: 5500, imageUrl: 'assets/hotel-list/hotel2.png', rating: 4.8 , location: '泰國',favorite:true,rooms: [
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          
        ]},
      { hotel_id: 3, name: '商務精英旅館', price: 1999, imageUrl: 'assets/hotel-list/hotel3.png', rating: 4.2 , location: '泰國',favorite:false,rooms: [
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          
        ]},
      { hotel_id: 4, name: '古典藝術酒店', price: 3200, imageUrl: 'assets/hotel-list/hotel4.png', rating: 4.6 , location: '泰國',favorite:false,
        rooms: [
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          {room_id: 201, name: '海景房', price: 2000,imageUrl: 'assets/hotel-list/hotel2.png'},
          
        ]
      },
    ]; 
    return hotels;
 };
 public getTargethotel(hotel_id:number): Hotel {
    const target = this.getHotelList().find(item => item.hotel_id === hotel_id)
    if (target) {
      return target;
    }
    return null as any;
 };
 public getTargethotelRoom(hotel_id:number): IRooms[] {
    const target = this.getHotelList().find(item => item.hotel_id === hotel_id)
    if (target) {
      return target.rooms;
    }
    return [];
 };
}
