import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

constructor() { }
 private Activities:any[]= [
  {
    name: "Bird Watching Tour",
    description: "Explore Sikkim's rich avian diversity with expert guides. Spot rare Himalayan species in their natural habitat.",
    image: "assets/images/activities/birdwatching.jpg",
    price: 1500,
    location: "North Sikkim",
    village: "Lachen",
    duration:"Full Day",
    includes: ["Expert Guide", "Equipment", "Refreshments", "Transport"],
    tags: ["Nature", "Wildlife", "Photography"]
  },
  {
    name: "Cardamom Plantation Visit",
    description: "Visit organic cardamom plantations and learn about traditional farming methods and spice processing.",
    image: "assets/images/activities/cardamom.jpg",
    price: 800,
    location: "South Sikkim",
    village: "Ravangla",
    duration:"Half Day",
    includes: ["Farm Tour", "Spice Tasting", "Local Guide", "Traditional Snacks"],
    tags: ["Agriculture", "Cultural", "Educational"]
  },
  {
    name: "Cultural Dance Workshop",
    description: "Learn traditional Sikkimese dances from local performers and understand the cultural significance.",
    image: "assets/images/activities/culturaldance.jpg",
    price: 1200,
    location: "East Sikkim",
    village: "Gangtok",
    duration:"3 Hours",
    includes: ["Dance Instruction", "Traditional Costume", "Photo Session", "Refreshments"],
    tags: ["Culture", "Dance", "Traditional"]
  },
  {
    name: "Flower Show Visit",
    description: "Experience the vibrant display of Sikkim's native flowers, including rare orchids and rhododendrons.",
    image: "assets/images/activities/flowershow.jpg",
    price: 500,
    location: "East Sikkim",
    village: "Gangtok",
    duration:"2 Day",
    includes: ["Guided Tour", "Photography Session", "Information Booklet"],
    tags: ["Nature", "Photography", "Educational"]
  },
  {
    name: "Monastery Tour",
    description: "Visit ancient Buddhist monasteries and learn about Sikkim's spiritual heritage and monastic life.",
    image: "assets/images/activities/monastery.jpg",
    price: 1000,
    location: "West Sikkim",
    village: "Pelling",
    duration:"Full Day",
    includes: ["Buddhist Guide", "Prayer Flag Workshop", "Traditional Tea"],
    tags: ["Spiritual", "Cultural", "Historical"]
  },
  {
    name: "Mountain Biking Adventure",
    description: "Explore scenic mountain trails on two wheels with experienced guides and quality equipment.",
    image: "assets/images/activities/mountainbiking.jpg",
    price: 2500,
    location: "West Sikkim",
    village: "Yuksom",
    duration:"Half Day",
    includes: ["Bike Rental", "Safety Gear", "Guide", "Energy Snacks"],
    tags: ["Adventure", "Sports", "Nature"]
  },
  {
    name: "Tea Garden Experience",
    description: "Visit famous tea estates, learn about tea processing, and enjoy tea tasting sessions.",
    image: "assets/images/activities/teagarden.jpg",
    price: 1200,
    location: "South Sikkim",
    village: "Temi",
    duration:"5 Day",
    includes: ["Garden Tour", "Tea Tasting", "Processing Demo", "Tea Package"],
    tags: ["Agriculture", "Educational", "Culinary"]
  },
  {
    name: "Traditional Craft Workshop",
    description: "Learn traditional Sikkimese crafts like thangka painting or carpet weaving from local artisans.",
    image: "assets/images/activities/traditional.jpg",
    price: 1500,
    location: "East Sikkim",
    village: "Rumtek",
    duration:"3 Hours",
    includes: ["Materials", "Expert Training", "Take-Home Creation", "Certificate"],
    tags: ["Culture", "Crafts", "Educational"]
  },
  {
    name: "Traditional Weaving Class",
    description: "Learn the art of traditional Sikkimese weaving using local techniques and patterns.",
    image: "assets/images/activities/traditionalweaving.jpg",
    price: 1800,
    location: "South Sikkim",
    village: "Namchi",
    duration:"Full Night",
    includes: ["Weaving Materials", "Expert Instruction", "Traditional Attire", "Souvenir"],
    tags: ["Culture", "Crafts", "Traditional"]
  },
  {
    name: "Trekking Experience",
    description: "Guided treks through scenic mountain trails with stunning views of the Himalayas.",
    image: "assets/images/activities/trekking.jpg",
    price: 3000,
    location: "North Sikkim",
    village: "Lachung",
    duration:"Full Day",
    includes: ["Guide", "Basic Gear", "Meals", "First Aid"],
    tags: ["Adventure", "Nature", "Trekking"]
  },
  {
    name: "Yak Herding Experience",
    description: "Spend time with local yak herders and learn about traditional high-altitude farming.",
    image: "assets/images/activities/yakherding.jpg",
    price: 2000,
    location: "North Sikkim",
    village: "Lachen",
    duration:"Full Day",
    includes: ["Herding Experience", "Traditional Meals", "Wool Crafting", "Photo Session"],
    tags: ["Culture", "Agriculture", "Traditional"]
  }
];

 getActivities(): any[] {
  return this.Activities;
 }
}
