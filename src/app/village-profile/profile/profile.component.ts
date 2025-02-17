import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavBarComponent } from '../../home/nav-bar/nav-bar.component';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module

declare var $: any; // Declare jQuery

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[CommonModule,NavBarComponent,NgxPaginationModule]
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

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
    if (typeof document !== 'undefined') {
      console.log('Initializing Owl Carousel...');
      const carouselElement = $('.profile-imgs');
      
      if (carouselElement.length === 0) {
        console.error('Owl Carousel element not found!');
        return;
      }

      // Initialize Owl Carousel
      carouselElement.owlCarousel({
        //loop:true, //loop the carousel
        margin:5,  //margin between item 
        //nav:true,  //add next and prev button
        dots:true,  //add dots for items
        //rtl:true,  //Owl will change direction from Right to left.
        autoplay: true, // Enable auto-move
        autoplayTimeout: 3000, // Time between auto-moves (in milliseconds)
        autoplayHoverPause: true ,// Pause on hover
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
    console.log('Owl Carousel initialized successfully');
  }
}

 
  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      // Destroy Owl Carousel instance
      $('.profile-imgs').trigger('destroy.owl.carousel');
    }
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
