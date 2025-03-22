import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { VillageMainComponent } from './village-profile/village-main/village-main.component';
import { SearchComponent } from './search/search/search.component';
import { EventMainComponent } from './event/event-main/event-main.component';
import { HomestayMainComponent } from './homestay/homestay-main/homestay-main.component';
import { LocalProductMainComponent } from './local-product/localProduct-main/localProduct-main.component';
import { ActivityMainComponent } from './activity/activity-main/activity-main.component';
import { idCheckGuard } from '../guards/id-check.guard';

export const routes: Routes = [
  // Search route for search if ID is missing
  {path:'', component:HomeMainComponent},
  {
   path: 'search',
   children:[
      {path:'',
         component:SearchComponent,
         pathMatch:'full'
      },
      {
         path:':type',
         component:SearchComponent
      }
   ]

 },

   {path: 'village',component:VillageMainComponent, canActivate:[idCheckGuard]}, //gurad check if there is id present with url if not there redirect search component 
   {path:'event', component:EventMainComponent,canActivate:[idCheckGuard]},
   {path:'homestay',component:HomestayMainComponent, canActivate:[idCheckGuard]},
   {path:'product',component:LocalProductMainComponent, canActivate:[idCheckGuard]},
   {path:'activity',component:ActivityMainComponent, canActivate:[idCheckGuard]}
];
