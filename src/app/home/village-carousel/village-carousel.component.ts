import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-village-carousel',
  templateUrl: './village-carousel.component.html',
  styleUrls: ['./village-carousel.component.css'],
  imports:[CommonModule]
})
export class VillageCarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  
  villages = [
    {
      name: "Lachung",
      region: "North Sikkim",
      image: "assets/images/villages/lachen.jpg",
      description: "A picturesque Himalayan village, Lachen is the gateway to Gurudongmar Lake."
    },
    {
      name: "Kewzing",
      region: "North",
      image: "assets/images/villages/kewzing.jpg",
      description: "A tranquil village offering authentic Sikkimese lifestyle, traditional paper making, and panoramic views of the Himalayan peaks. The village offers a glimpse into the traditional way of life and cultural practices of Sikkim."
    },
    {
      name: "Yuksom",
      region: "West Sikkim",
      image: "assets/images/villages/yuksom.jpg",
      description: "The historical capital of Sikkim, known for its ancient monasteries and trekking routes."
    },
    {
      name: "Rinchenpong",
      region: "West Sikkim",
      image: "assets/images/villages/rinchenpong.jpg",
      description: "A serene village offering breathtaking views of Kanchenjunga and rich Buddhist culture."
    }
  ];

  ngOnInit(): void {
    // Initialization logic can go here
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      console.log('Initializing Owl Carousel...');
      const carouselElement = $('.village-carousel');
      
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
      $('.village-carousel').trigger('destroy.owl.carousel');
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
