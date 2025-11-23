import { Component, OnDestroy, OnInit , inject} from '@angular/core'; // 1. 導入 OnInit 生命週期鉤子
import { HotelService } from '../../service/hotelService';
import { IHotel } from '../../interface/IHotelList';
import { ActivatedRoute, Router } from '@angular/router';

// 2. 定義資料結構（TypeScript Interface）


@Component({
  selector: 'app-hotel-list',
  standalone: false,
  templateUrl: './hotel-list.html', // 確保這裡的路徑是正確的
  styleUrl: './hotel-list.scss',
})
// 3. 實作 OnInit
export class HotelList implements OnInit, OnDestroy { 
  private hotelServie = inject(HotelService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  hotels: IHotel[] = [];



  constructor() { }

  ngOnInit(): void {
    this.hotels = this.hotelServie.getHotelList() 
    // 這裡可以在元件初始化時執行資料載入等邏輯
    console.log('飯店列表元件已載入');
  }

  clickBtn(hotel_id: number){
    const target = this.hotelServie.getTargethotelRoom(hotel_id)
    console.log(target);

  }

  goToRoom(hotel_id: number) {
    this.router.navigate(['room/' + hotel_id], { relativeTo: this.route });
  }
  

  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}