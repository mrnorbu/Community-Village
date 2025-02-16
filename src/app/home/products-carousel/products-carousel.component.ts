import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
declare var $: any; // Declare jQuery

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.css'],
  imports:[CommonModule]
})
export class ProductsCarouselComponent implements OnInit, AfterViewInit, OnDestroy  {

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  ngAfterViewInit(): void {
    if (typeof document !== 'undefined') {
      console.log('Initializing Owl Carousel...');
      const carouselElement = $('.product-carousel');
      
      if (carouselElement.length === 0) {
        console.error('Owl Carousel element not found!');
        return;
      }

      // Initialize Owl Carousel with explicit layout settings
      carouselElement.owlCarousel({
        loop: true,
        margin: 24,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stageClass: 'owl-stage flex', // Ensure flex layout
        itemClass: 'owl-item', // Ensure proper item class
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 16
            },
            600: {
                items: 2,
                stagePadding: 24
            },
            1000: {
                items: 3,
                stagePadding: 32
            },
            1400: {
                items: 4,
                stagePadding: 40
            }
        }
      });
    console.log('Owl Carousel initialized successfully');
  }
}

 
  ngOnDestroy() {
    if (typeof document !== 'undefined') {
      // Destroy Owl Carousel instance
      $('.product-carousel').trigger('destroy.owl.carousel');
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


/************************************Array for Data*********************************************/
Products = [
  {
    image: 'assets/images/products/img-product-1.jpeg',
    name: 'Traditional Wooden Bowls',
    description: 'Handcrafted from locally sourced wood, perfect for an eco-friendly touch to your dining. Each piece tells a story of Sikkim\'s craftsmanship.',
    location: 'Lachung',
    region: 'North Sikkim'
  },
  {
    image: 'assets/images/products/img-product-2.jpeg',
    name: 'Traditional Woven Textiles',
    description: 'Intricately woven textiles featuring traditional Sikkimese patterns and motifs, made using age-old techniques.',
    location: 'Gangtok',
    region: 'East Sikkim'
  },
  {
    image: 'assets/images/products/img-product-7.jpeg',
    name: 'Premium Organic Temi Tea',
    description: 'World-renowned organic tea from Sikkim\'s Temi Tea Garden, known for its distinct flavor and aroma.',
    location: 'Temi',
    region: 'South Sikkim'
  },
  {
    image: 'assets/images/products/img-product-6.jpeg',
    name: 'Natural Herbal Handmade Soaps',
    description: 'Natural, chemical-free soaps made with local herbs and traditional techniques for gentle skincare.',
    location: 'Soreng',
    region: 'West Sikkim'
  },
  {
    image: 'assets/images/products/img-product-5.jpeg',
    name: 'Organic Large Cardamom',
    description: 'Premium quality large cardamom, grown organically in the hills of Sikkim, known for its intense aroma.',
    location: 'Rinchenpong',
    region: 'West Sikkim'
  },
  {
    image: 'assets/images/products/img-product-3.jpeg',
    name: 'Homemade Traditional Pickles',
    description: 'Authentic Sikkimese pickles made with local ingredients and traditional recipes passed down through generations.',
    location: 'Namchi',
    region: 'South Sikkim'
  }
];


}
