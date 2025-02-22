import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { VillageMainComponent } from './village-profile/village-main/village-main.component';
import { SearchComponent } from './search/search/search.component';
import { EventMainComponent } from './event/event-main/event-main.component';
import { HomestayMainComponent } from './homestay/homestay-main/homestay-main.component';
import { LocalProductMainComponent } from './local-product/localProduct-main/localProduct-main.component';
import { ActivityMainComponent } from './activity/activity-main/activity-main.component';

export const routes: Routes = [
   { path:'', component: HomeMainComponent},
   { path: 'village', component: VillageMainComponent },
   { path: 'search', component: SearchComponent  },
   {path:'event', component:EventMainComponent},
   {path:'homestay',component:HomestayMainComponent},
   {path:'product',component:LocalProductMainComponent},
   {path:'activity',component:ActivityMainComponent}
];
