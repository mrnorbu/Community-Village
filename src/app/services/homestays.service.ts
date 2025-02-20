import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomestaysService {

constructor() { }
  private Homestays:any[] = [
  {
    name: "Lachung Valley Homestay",
    description: "Experience authentic Sikkimese hospitality in this traditional family home with modern amenities, offering stunning views of the Lachung Valley.",
    image: "assets/images/homestays/homestay1.jpg",
    location: "North Sikkim",
    region:"Ravangla",
    price: 2500,
    amenities: ["Mountain View", "Traditional Kitchen", "Garden", "Hot Water"]
  },
  {
    name: "Yuksom Heritage House",
    description: "Stay in a charming heritage house in Yuksom, the first capital of Sikkim. Perfect base for trekking and cultural exploration.",
    image: "assets/images/homestays/homestay2.jpg",
    location: "West Sikkim",
    region:"Dzongo",
    price: 2000,
    amenities: ["Heritage Building", "Garden View", "Trekking Base", "WiFi"]
  },
  {
    name: "Rinchenpong Eco Stay",
    description: "Eco-friendly homestay with organic farm, offering panoramic views of the Kanchenjunga range and traditional Sikkimese cuisine.",
    image: "assets/images/homestays/homestay3.jpg",
    location: "West Sikkim",
    region:"Rinchenpong",
    price: 1800,
    amenities: ["Organic Farm", "Mountain View", "Local Cuisine", "Peaceful"]
  },
  {
    name: "Martam Village Retreat",
    description: "Experience rural Sikkimese life in this cozy homestay surrounded by cardamom fields and mountain views.",
    image: "assets/images/homestays/homestay4.jpg",
    location: "East Sikkim",
    region:"Martam",
    price: 2200,
    amenities: ["Cardamom Fields", "Local Guide", "Home Cooking", "Terrace"]
  },
  {
    name: "Namchi Cultural Home",
    description: "Located near famous monasteries, this homestay offers cultural experiences and comfortable accommodation with modern amenities.",
    image: "assets/images/homestays/homestay5.jpg",
    location: "South Sikkim",
    region:"Namchi",
    price: 2300,
    amenities: ["Cultural Tours", "Modern Amenities", "Temple View", "Parking"]
  },
  {
    name: "Pelling Mountain View Lodge",
    description: "Spectacular views of the Kanchenjunga range from every room, featuring traditional architecture with modern comforts.",
    image: "assets/images/homestays/homestay6.jpg",
    location: "West Sikkim",
    region:"Pelling",
    price: 2800,
    amenities: ["Mountain View", "Sunrise View", "Traditional Decor", "Balcony"]
  },
  {
    name: "Ravangla Tea Garden Stay",
    description: "Nestled among tea gardens, this peaceful homestay offers a unique experience with organic tea tasting and garden tours.",
    image: "assets/images/homestays/homestay7.jpg",
    location: "South Sikkim",
    region:"Ravangla",
    price: 2100,
    amenities: ["Tea Garden", "Organic Food", "Garden Tours", "Meditation Space"]
  },
  {
    name: "Gangtok Heritage Cottage",
    description: "A beautifully restored heritage cottage in the heart of Gangtok, combining traditional charm with urban convenience.",
    image: "assets/images/homestays/homestay8.jpg",
    location: "East Sikkim",
    region:"Gangtok",
    price: 3000,
    amenities: ["City View", "Heritage Architecture", "Modern Kitchen", "Library"]
  },
  {
    name: "Dzongu Riverside Retreat",
    description: "Authentic Lepcha homestay by the river, offering unique cultural experiences and traditional Lepcha cuisine.",
    image: "assets/images/homestays/homestay9.jpg",
    location: "North Sikkim",
    region:"Dzongu",
    price: 1900,
    amenities: ["River View", "Cultural Experience", "Traditional Food", "Nature Walks"]
  },
  {
    name: "Lingee Valley House",
    description: "Remote and peaceful homestay offering authentic rural Sikkimese lifestyle with stunning valley views.",
    image: "assets/images/homestays/homestay10.jpg",
    location: "South Sikkim",
    region:"Lingee",
    price: 1700,
    amenities: ["Valley View", "Farm Activities", "Local Cuisine", "Hiking Trails"]
  },
  {
    name: "Kewzing Buddhist Lodge",
    description: "Located near ancient monasteries, this peaceful homestay offers spiritual ambiance and traditional Buddhist hospitality.",
    image: "assets/images/homestays/homestay12.jpg",
    location: "South Sikkim",
    region:"Kewzing",
    price: 2400,
    amenities: ["Monastery View", "Meditation Hall", "Prayer Wheels", "Peaceful Garden"]
  },
  {
    name: "Zuluk Mountain Home",
    description: "High-altitude homestay on the historic Silk Route, offering breathtaking views and adventure opportunities.",
    image: "assets/images/homestays/homestay1.jpg",
    location: "East Sikkim",
    region:"Zuluk",
    price: 2600,
    amenities: ["High Altitude", "Silk Route View", "Adventure Base", "Warm Bedding"]
  }
  ];
  
  getHomestaysData():any[]{
    return this.Homestays;
  }

}
