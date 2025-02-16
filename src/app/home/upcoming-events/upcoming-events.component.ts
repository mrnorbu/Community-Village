import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css'],
  imports:[CommonModule]
})
export class UpcomingEventsComponent implements OnInit{

  constructor() { }

  ngOnInit() {
  }


  /*For Owl-Carousel*/

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      console.log('Initializing Owl Carousel...');
      const carouselElement = $('.upcoming-events-carousel');
      
      if (carouselElement.length === 0) {
        console.error('Owl Carousel element not found!');
        return;
      }

      // Initialize Owl Carousel
      carouselElement.owlCarousel({
       // loop:true, //loop the carousel
       // margin:5,  //margin between item 
        nav:true,  //add next and prev button
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


//For Events
Events = [
  {  
    subEvent: [
      {
        date: 'March 15, 2025',
        name: 'Lachung Snow Festival',
        location: 'Lachung Valley, North Sikkim',
        description: 'Winter celebration featuring snow sports, local cuisine, and traditional Sikkimese performances.'
      },
      {
        date: 'May 5, 2025',
        name: 'Rumtek Monastery Festival',
        location: 'Rumtek, East Sikkim',
        description: 'Sacred Buddhist ceremonies, mask dances, and meditation retreats at the famous monastery.'
      },
      {
        date: 'June 20, 2025',
        name: 'Pelling Food Festival',
        location: 'Pelling, West Sikkim',
        description: 'Gastronomic celebration featuring local cuisine, cooking demonstrations, and food trails.'
      },
      {
        date: 'April 12, 2025',
        name: 'Namchi Heritage Festival',
        location: 'Namchi, South Sikkim',
        description: 'Cultural showcase featuring traditional arts, crafts workshops, and folk music performances.'
      }
    ]
  },
  {
    subEvent: [
      {
        date: 'July 15, 2025',
        name: 'Ravangla Tea Festival',
        location: 'Ravangla, South Sikkim',
        description: 'Experience tea tasting, plantation tours, and learn about Sikkim\'s organic tea production.'
      },
      {
        date: 'August 8, 2025',
        name: 'Yuksam Heritage Walk',
        location: 'Yuksam, West Sikkim',
        description: 'Historical walking tour exploring the first capital of Sikkim with local historians.'
      },
      {
        date: 'August 15, 2025',
        name: 'Namchi Butterfly Festival',
        location: 'Namchi, South Sikkim',
        description: 'Witness the colorful butterfly migration and learn about local conservation efforts.'
      },
      {
        date: 'August 22, 2025',
        name: 'Lachen Yak Festival',
        location: 'Lachen, North Sikkim',
        description: 'Traditional festival celebrating yak herding culture with races and local delicacies.'
      }
    ]
  },
  {
    subEvent: [
      {
        date: 'October 5, 2025',
        name: 'Dzongu Cultural Festival',
        location: 'Dzongu, North Sikkim',
        description: 'Celebration of Lepcha culture with traditional music, dance, and indigenous crafts.'
      },
      {
        date: 'October 15, 2025',
        name: 'Namchi Mahotsav',
        location: 'Namchi, South Sikkim',
        description: 'Annual cultural festival showcasing local arts, crafts, and traditional performances.'
      },
      {
        date: 'October 25, 2025',
        name: 'Gangtok Food Festival',
        location: 'Gangtok, East Sikkim',
        description: 'Culinary celebration featuring traditional Sikkimese cuisine and cooking demonstrations.'
      },
      {
        date: 'November 5, 2025',
        name: 'Pelling Heritage Walk',
        location: 'Pelling, West Sikkim',
        description: 'Guided tour of historical monasteries and cultural landmarks with local storytellers.'
      }
    ]
  }
];



}
