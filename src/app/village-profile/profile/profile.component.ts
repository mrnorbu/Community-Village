import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from '../../../services/api.service';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[CommonModule,NgxPaginationModule]
})
export class ProfileComponent implements OnInit, AfterViewInit {
  
  private apiService = inject(ApiService)
  committeeInfo:any=[]

  constructor() { }

  ngOnInit(): void {
    this.getVillages();
    // Initialization logic can go here
  }

  p: number = 1;//for image pagination



  ngAfterViewInit(): void {
  }


 

  isBoxVisible: boolean = true;
  toggleDivs(divType:string) {
    if(divType=='villageDetails') this.isBoxVisible=true;
    else if(divType=='leaderShip') this.isBoxVisible=false;
  }



getVillages(): void {
  this.apiService.getData('website/committees').subscribe({
    next: (data: any) => {
      // Map the data and add the images array to each committee
      this.committeeInfo = data.map((committee: any) => ({
        ...committee, // Spread the existing properties
        images: [] = [
          { url: 'assets/images/villages/namchi.jpg' },
          { url: 'assets/images/villages/rinchenpong.jpg' },
          { url: 'assets/images/villages/lingee.jpg' },
          { url: 'assets/images/villages/lachen.jpg' },
          { url: 'assets/images/villages/martam.jpg' }
        ]
      }));
      console.log(this.committeeInfo)
    },
    error: (error: any) => {
      console.error('Error fetching CommitteesInfo:', error);
      this.committeeInfo = []; // Fallback to an empty array
      console.log(this.committeeInfo)
    },
    complete: () => {
      console.log('CommitteesInfo fetch completed.');
    }
  });
}



  
}
