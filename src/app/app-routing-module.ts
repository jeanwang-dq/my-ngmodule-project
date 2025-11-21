import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { App } from './app';
import { HotelList } from './hotels/hotel-list/hotel-list';


const routes: Routes = [
// 設置首頁
  // { path: '', component: App },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: 'home', component: Home },

  { path: 'hotels', 
    loadChildren: () => import('./hotels/hotels-module').then(m => m.HotelsModule) 
  },  
  { path: '**', redirectTo: '/home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
