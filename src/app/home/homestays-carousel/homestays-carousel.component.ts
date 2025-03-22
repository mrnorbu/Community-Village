import { CommonModule } from '@angular/common';
import { Component, OnInit ,AfterViewInit,OnDestroy, inject} from '@angular/core';
import { getDynamicClass,initializeOwlCarousel,destroyOwlInstance } from '../../utils/utils';
import { RouterLink } from '@angular/router';
import { HomestaysService } from '../../../services/homestays.service';
import { ApiService } from '../../../services/api.service';
import { paginatedEndpoints } from '../../globalEnums.enum';

@Component({
  selector: 'app-homestays-carousel',
  templateUrl: './homestays-carousel.component.html',
  styleUrls: ['./homestays-carousel.component.css'],
  imports:[CommonModule,RouterLink]
})
export class HomestaysCarouselComponent implements OnInit ,AfterViewInit,OnDestroy{

  private apiService = inject(ApiService)

  homestays:any=[];
  
  ngOnInit() {
    this.getHomestays();
  }

  ngAfterViewInit(): void {
    
  }

  ngOnDestroy() {
    destroyOwlInstance('.homestays-carousel')
  }


getClass(input:number){
  return getDynamicClass(input);
}


 
getHomestays(): void {
  this.apiService.getPaginatedData(paginatedEndpoints.homestays,1,5).subscribe({
    next: (data: any) => {
     
      if (data && data.data && Array.isArray(data.data) && data.data.length > 0) {
        // Enrich the fetched data with additional properties
        this.homestays = data.data.map((item: any) => ({
          ...item,
          image: 'https://placehold.co/600x400', // Add static image
        }));
      }

     // Ensure carousel initializes after DOM updates
     if (this.homestays.length > 0) {
      setTimeout(() => {
        initializeOwlCarousel('.homestays-carousel',true,true,5,false,[1,2,5]) 
      }, 300);// Small delay to ensure DOM is updated
    }    
  
    },
    error: (error:any) => {
      console.error('Error fetching Committies:', error);
      // Optionally, set a default value or handle the error
      this.homestays = []; // Fallback to an empty array
    },
    complete: () => {
      // Optional: Handle completion logic if needed
      console.log('Homestays fetch completed.');
    
    }
  });
}

}
