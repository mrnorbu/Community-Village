import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { NavBarComponent } from '../../home/nav-bar/nav-bar.component';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[CommonModule,NavBarComponent]
})
export class ProfileComponent implements OnInit, AfterViewInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

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


  /*****************Images ***********************/
  Images=[
    {
      src:'assets/images/villages/namchi.jpg',
      alt:'Beautiful landscapes around Namchi',
      src2:'assets/images/villages/rinchenpong.jpg',
      alt2:'Traditional architecture in Rinchenpong'

    },
    {
      src:'assets/images/villages/rinchenpong.jpg',
      alt:'Traditional architecture in Rinchenpong',
      src2:'assets/images/villages/namchi.jpg',
      alt2:'Beautiful landscapes around Namchi',
    }
  ];

}
