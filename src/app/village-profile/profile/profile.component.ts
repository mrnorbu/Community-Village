import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ApiService } from '../../../services/api.service';

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
    this.apiService.getDataById('website/committee',1).subscribe({
      next: (data: any) => {
        // Directly modify the single object (not an array)
        this.committeeInfo = {
          ...data, // Spread the existing properties
          images: [
             'assets/images/villages/namchi.jpg' ,
             'assets/images/villages/rinchenpong.jpg',
             'assets/images/villages/lingee.jpg' ,
             'assets/images/villages/lachen.jpg' ,
             'assets/images/villages/martam.jpg' 
          ]
        };
      },
      error: (error: any) => {
        console.error('Error fetching CommitteeInfo:', error);
        this.committeeInfo = null; // Fallback to null
      },
      complete: () => {
        console.log('CommitteeInfo fetch completed.');
      }
    });
  }
  



  
}
