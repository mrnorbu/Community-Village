import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
  imports:[CommonModule,NgxPaginationModule]
})
export class UpcomingEventsComponent implements OnInit{


 private apiService = inject(ApiService) 
  constructor() { }
  page: number = 1;

 events:any=[]

  ngOnInit() {
     this.getEvents();
  }

 

  getEvents(): void {
    this.apiService.getData('website/events').subscribe({
      next: (data: any) => {
       
      this.events = data;
        
      },
      error: (error:any) => {
        console.error('Error fetching Events:', error);
        // Optionally, set a default value or handle the error
        this.events = []; // Fallback to an empty array
      },
      complete: () => {
        // Optional: Handle completion logic if needed
        console.log('Events fetch completed.');
      
      }
    });
  }
  


}