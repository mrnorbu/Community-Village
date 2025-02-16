import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homestays-carousel',
  templateUrl: './homestays-carousel.component.html',
  styleUrls: ['./homestays-carousel.component.css'],
  imports:[CommonModule]
})
export class HomestaysCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  homeStays = [
    {
      image: 'assets/images/homestays/homestay1.jpg',
      name: 'Himalayan Homestay',
      description: 'A cozy wooden cottage offering breathtaking mountain views and traditional Bhutia hospitality.',
      location: 'Lachung',
      region: 'North Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay2.jpg',
      name: 'Himalayan Haven Homestay',
      description: 'An authentic Lepcha-style home surrounded by pristine nature, perfect for cultural immersion.',
      location: 'Rongli',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay3.jpg',
      name: 'Yak and Yeti Home Stay',
      description: 'A warm and rustic retreat with stunning views of the Himalayas and traditional Sikkimese meals. Experience the local way of life in this charming mountain home.',
      location: 'Ravangla',
      region: 'South Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay4.jpg',
      name: 'Mountain Bliss Homestay',
      description: 'A peaceful stay near Buddha Park, ideal for nature lovers and spiritual seekers. Perfect for those seeking tranquility and stunning mountain views.',
      location: 'Ravangla',
      region: 'South Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay5.jpg',
      name: 'Kanchenjunga View Homestay',
      description: 'Wake up to panoramic views of Mt. Kanchenjunga from your bedroom window. Traditional architecture meets modern comfort in this family-run homestay.',
      location: 'Pelling',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay6.jpg',
      name: 'Lepcha Heritage Home',
      description: 'Experience authentic Lepcha culture in this traditional home. Learn about indigenous customs, try local cuisine, and explore pristine surroundings.',
      location: 'Dzongu',
      region: 'North Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay7.jpg',
      name: 'Cardamom Valley Homestay',
      description: 'Nestled among cardamom plantations, this homestay offers a unique agricultural experience. Learn about spice cultivation and enjoy farm-to-table meals.',
      location: 'Rinchenpong',
      region: 'West Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay8.jpg',
      name: 'Monastery View Homestay',
      description: 'Located near ancient monasteries, this homestay offers spiritual tranquility. Perfect for those interested in Buddhist culture and meditation.',
      location: 'Namchi',
      region: 'South Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay9.jpg',
      name: 'Organic Farm Homestay',
      description: 'Experience organic farming firsthand at this working farm homestay. Participate in farming activities and enjoy fresh, organic meals.',
      location: 'Martam',
      region: 'East Sikkim'
    },
    {
      image: 'assets/images/homestays/homestay10.jpg',
      name: 'Tea Garden Retreat',
      description: 'Surrounded by rolling tea gardens, this homestay offers a unique tea tourism experience. Learn about tea processing and enjoy tea tasting sessions.',
      location: 'Temi',
      region: 'East Sikkim'
    }
  ];


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
