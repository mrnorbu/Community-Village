import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance} from '../../utils/utils'; 
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-village-carousel',
  templateUrl: './village-carousel.component.html',
  styleUrls: ['./village-carousel.component.css'],
  imports:[CommonModule,RouterLink]
})
export class VillageCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  private apiService=inject(ApiService)
  constructor(){
  }


  villagesCommunity:any[]=[]

  ngOnInit(): void {
   this.getVillages();
  }

  
  ngAfterViewInit() {
   setTimeout(() => {
    initializeOwlCarousel('.village-carousel',true,true,5,false,[2,3,4])
   }, 500);
  }

 ngOnDestroy() {
    destroyOwlInstance('.village-carousel')
  }


  getClass(input:number){
    return getDynamicClass(input);
  }


  getVillages(): void {
    this.apiService.getData('website/committees').subscribe({
      next: (data: any) => {
        // Assign the data to the districts property
          // Add a placeholder image to each committee
      this.villagesCommunity = data.map((committee: any) => ({
        ...committee, // Spread the existing properties
        image: 'https://placehold.co/600x400' // Add a placeholder image
      }));
     
      },
      error: (error:any) => {
        console.error('Error fetching Committies:', error);
        // Optionally, set a default value or handle the error
        this.villagesCommunity = []; // Fallback to an empty array
      },
      complete: () => {
        // Optional: Handle completion logic if needed
        console.log('Committies fetch completed.');
      
      }
    });
  }


}
