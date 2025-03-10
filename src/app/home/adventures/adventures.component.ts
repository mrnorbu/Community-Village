import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { ActivitiesService } from '../../../services/activities.service';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css'],
  imports:[CommonModule,RouterLink]
})
export class AdventuresComponent implements OnInit ,AfterViewInit,OnDestroy{

  private apiService = inject(ApiService)

  activities:any[]=[];

  ngOnInit() {
  this.getActivities()
  }

  
  ngAfterViewInit(): void {
   setTimeout(() => {
    initializeOwlCarousel('.adventure-carousel',true,true,5,false,[1,3,5]);
   }, 500);
}

  ngOnDestroy() {
    destroyOwlInstance('.adventure-carousel')
  }


getClass(input:number):string
{
  return getDynamicClass(input)
}


getActivities(): void {
  this.apiService.getData('website/activities').subscribe({
    next: (data: any) => {
     
    this.activities = data.map((activity: any) => ({
      ...activity, // Spread the existing properties
      image: 'https://placehold.co/600x400' // Add a placeholder image
    }));
      
    },
    error: (error:any) => {
      console.error('Error fetching Activities:', error);
      // Optionally, set a default value or handle the error
      this.activities = []; // Fallback to an empty array
    },
    complete: () => {
      // Optional: Handle completion logic if needed
      console.log('Activities fetch completed.');
    
    }
  });
}


}
