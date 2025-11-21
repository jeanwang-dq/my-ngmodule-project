export interface Hotel {
  hotel_id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  location: string;
  favorite: boolean;
  rooms: IRooms[];
}

export interface IRooms {
  room_id: number;
  name: string;
  price: number;
  imageUrl: string;

}

