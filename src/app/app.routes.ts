import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeMainComponent } from './home/home-main/home-main.component';
import { VillageMainComponent } from './village-profile/village-main/village-main.component';
import { SearchComponent } from './search/search/search.component';

export const routes: Routes = [
   { path:'', component: HomeMainComponent},
   { path: 'village', component: VillageMainComponent },
   { path: 'search', component: SearchComponent  }
  
];
