import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[CommonModule,NgxPaginationModule]
})
export class ProfileComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

   /*****************Images ***********************/
   Images=[
    {
      src:'assets/images/villages/namchi.jpg',
      alt:'Beautiful landscapes around Namchi',
    },
    {
      src:'assets/images/villages/rinchenpong.jpg',
      alt:'Traditional architecture in Rinchenpong'
    },
    {
      src:'assets/images/villages/lingee.jpg',
      alt:'Traditional architecture in Rinchenpong',
    },
    {
      src:'assets/images/villages/lachen.jpg',
      alt:'Beautiful landscapes around Namchi',
     },
     {
      src:'assets/images/villages/martam.jpg',
      alt:'Beautiful landscapes around Namchi',
     },
  ];
  
  p: number = 1;//for image pagination
  largeImage: string =this.Images[0].src ;


  ngAfterViewInit(): void {
  }


 

  isBoxVisible: boolean = true;
  toggleDivs(divType:string) {
    if(divType=='villageDetails') this.isBoxVisible=true;
    else if(divType=='leaderShip') this.isBoxVisible=false;
  }

 

  updateImage(clickedImage: any): void {
    let temp = this.largeImage;
    this.largeImage = clickedImage.src;
    clickedImage.src = temp;
  }


  
}
