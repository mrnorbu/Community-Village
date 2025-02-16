import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-adventures',
  templateUrl: './adventures.component.html',
  styleUrls: ['./adventures.component.css'],
  imports:[CommonModule]
})
export class AdventuresComponent implements OnInit ,AfterViewInit,OnDestroy{

  constructor() { }

  ngOnInit() {
  }

  Adventures = [
    {
      image: 'assets/images/activities/yakherding.jpg',
      name: 'Yak Herding',
      description: 'Experience the daily life of yak herders, learn about their traditions and help with herding activities.',
      location: 'Lachung',
      region: 'North Sikkim'
    },
    {
      image: 'assets/images/activities/trekking.jpg',
      name: 'Mountain Trekking',
      description: 'Guided treks through scenic mountain trails, exploring hidden waterfalls and pristine forests.',
      location: 'Gangtok',
      region: 'East Sikkim'
    },
    {
      image: 'assets/images/activities/monastery.jpg',
      name: 'Monastery Visits',
      description: 'Explore ancient monasteries, learn about Buddhist traditions, and participate in meditation sessions.',
      location: 'Pelling',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/activities/traditional.jpg',
      name: 'Traditional Cooking Classes',
      description: 'Learn to prepare authentic Sikkimese dishes using local ingredients and traditional methods.',
      location: 'Martam',
      region: 'East Sikkim'
    },
    {
      image: 'assets/images/activities/teagarden.jpg',
      name: 'Tea Garden Tours',
      description: 'Visit tea plantations, learn about tea processing, and enjoy tea tasting sessions.',
      location: 'Temi',
      region: 'South Sikkim'
    },
    {
      image: 'assets/images/activities/culturaldance.jpg',
      name: 'Cultural Dance Workshops',
      description: 'Learn traditional Sikkimese dances and understand their cultural significance.',
      location: 'Ravangla',
      region: 'South Sikkim'
    },
    {
      image: 'assets/images/activities/cardamom.jpg',
      name: 'Cardamom Farm Visit',
      description: 'Experience cardamom cultivation and processing in traditional spice farms.',
      location: 'Rinchenpong',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/activities/birdwatching.jpg',
      name: 'Bird Watching',
      description: 'Guided bird watching tours to spot rare Himalayan species in their natural habitat.',
      location: 'Yuksom',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/activities/traditionalweaving.jpg',
      name: 'Traditional Weaving',
      description: 'Learn traditional weaving techniques and create your own textile piece.',
      location: 'Kewzing',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/activities/mountainbiking.jpg',
      name: 'Mountain Biking',
      description: 'Guided mountain biking adventures through scenic mountain trails and villages.',
      location: 'Lachung',
      region: 'North Sikkim'
    }
  ];

  
  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      console.log('Initializing Owl Carousel...');
      const carouselElement = $('.adventure-carousel');
      
      if (carouselElement.length === 0) {
        console.error('Owl Carousel element not found!');
        return;
      }

      // Initialize Owl Carousel
      carouselElement.owlCarousel({
        loop:true, //loop the carousel
        margin:5,  //margin between item 
        //nav:true,  //add next and prev button
        dots:true,  //add dots for items
        //rtl:true,  //Owl will change direction from Right to left.
        autoplay: true, // Enable auto-move
        autoplayTimeout: 3000, // Time between auto-moves (in milliseconds)
        autoplayHoverPause: true ,// Pause on hover
        
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
    console.log('Owl Carousel initialized successfully');
  }
}

 
  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      // Destroy Owl Carousel instance
      $('.adventure-carousel').trigger('destroy.owl.carousel');
    }
  }


  /*Dynamic color to regions*/
  colorClasses = [
    { bg: 'bg-blue-500/10', text: 'text-blue-500', hover: 'hover:bg-blue-500' },
    { bg: 'bg-red-500/10', text: 'text-red-500', hover: 'hover:bg-red-500' },
    { bg: 'bg-green-500/10', text: 'text-green-500', hover: 'hover:bg-green-500' },
    { bg: 'bg-purple-500/10', text: 'text-purple-500', hover: 'hover:bg-purple-500' }
  ];
  
  getDynamicClass(input: number): string {
    // Calculate the index based on the input value
    const index = (input - 1) % this.colorClasses.length;
    const { bg, text, hover } = this.colorClasses[index]; // Destructure the selected color class
  
    return `${bg} ${text} ${hover}`; // Return the combined class string
  }
  

}
