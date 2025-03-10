import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { GlobalEnums } from '../../globalEnums.enum';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-hero-section',
  imports: [CommonModule, RouterLink,ReactiveFormsModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  private apiService = inject(ApiService);
  counts: any = {};
  districts:any=[];
  villages:any=[];
  filteredVillages:any=[];
  GlobalEnums=GlobalEnums
  activeTab=this.GlobalEnums.homestays;


  searchForm = new FormGroup({
    location:new FormControl(''),
    village:new FormControl(''),
    searchKeyboard:new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {
    this.entityCount();
    this.getDistricts();
  }
   
  setActiveTab(category:GlobalEnums){
      this.activeTab = category;
  }

  entityCount(): void {
    this.apiService.getData('website/entity-counts').pipe(
      catchError((error) => {
        return of({}); // Return an empty object as a default value
      })
    ).subscribe({
      next: (data: any) => {
        // Safely format the counts
        try {
          this.counts = this.formatCounts(data);
        } catch (error) {
          console.error('Error formatting entity counts:', error);
          this.counts = {}; // Fallback to an empty object
        }
      },
      error: (error) => {
        // This block is optional since errors are already caught by `catchError`
        console.error('Subscription error:', error);
      },
      complete: () => {
        // Optional: Handle completion logic if needed
        console.log('Entity count fetch completed.');
      }
    });
  }

  getDistricts(): void {
    this.apiService.getData('website/districts').subscribe({
      next: (data: any) => {
        // Assign the data to the districts property
        this.districts = data;
      },
      error: (error) => {
        console.error('Error fetching districts in hero section:', error);
        // Optionally, set a default value or handle the error
        this.districts = []; // Fallback to an empty array
      },
      complete: () => {
        // Optional: Handle completion logic if needed
        console.log('Districts fetch completed.');
      }
    });
  }

  onDistrictChange(event: any): void {
    console.log(event);
    // this.filteredVillages = this.villages.filter((village:any) => village.districtId === districtId);
    console.log(this.filteredVillages);  
    this.searchForm.controls['village'].setValue(''); // Reset village selection
  }


  formatCounts(data: any): Record<string, string> {

    if (!data || typeof data !== 'object') {
      return {}; // Return empty object if data is invalid
    }

    const formattedData: any = {};
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        formattedData[key] = this.formatNumber(data[key]);
      }
    }
    return formattedData;
  }

  formatNumber(value: number | string | null | undefined): string {
    if (value === null || value === undefined) {
      return '00'; // Default handling for null or undefined
    }

    if (value === null || value === undefined) {
      return '00'; // Default handling for null or undefined
    }

    let strValue = value.toString().trim(); // Ensure it's a string and remove spaces

    if (!/^\d+$/.test(strValue)) {
      return '00'; // Handle non-numeric values gracefully
    }

    return strValue.length === 1 ? '0' + strValue : strValue; // Ensure two-digit format

  }
}
