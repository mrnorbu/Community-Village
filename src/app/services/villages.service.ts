import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VillagesService {
 private Villages:any[]= [
  {
    name: "Lachen",
    region:  "North Sikkim",
    description: "A picturesque Himalayan village, Lachen is the gateway to Gurudongmar Lake. Experience the traditional lifestyle and breathtaking mountain views.",
    image: "assets/images/villages/lachen.jpg",
    altitude: "2,750m",
    category: "Cultural & Scenic"
  },
  {
    name: "Lachung",
    region:  "North Sikkim",
    description: "Known for its stunning landscapes, apple orchards, and the famous Yumthang Valley. Experience traditional Sikkimese architecture and warm hospitality.",
    image: "assets/images/villages/lachung.jpg",
    altitude: "2,600m",
    category: "Cultural & Nature"
  },

  {
    name: "Hee-Bermoik",
    region: "West Sikkim", 
    description: "A serene village known for its traditional farming practices and stunning views of Kanchenjunga. Experience authentic rural Sikkimese lifestyle.",
    image: "assets/images/villages/hee-bermoik.jpg",
    altitude: "1,800m",
    category: "Agriculture & Scenic"
  },

  {
    name: "Kewzing",
    region: "South Sikkim",
    description: "A peaceful village known for its monastery and traditional carpet weaving. Perfect for experiencing local culture and meditation.",
    image: "assets/images/villages/kewzing.jpg",
    altitude: "1,900m",
    category: "Spiritual & Craft"
  },
  {
   
    name: "Lingee",
    region:"South Sikkim",
    description: "Known for its traditional farming practices and cardamom plantations. Experience authentic rural Sikkimese lifestyle.",
    image: "assets/images/villages/lingee.jpg",
    altitude: "1,500m",
    category: "Agriculture & Culture"
  },
  {
    name: "Martam",
    region:"East Sikkim",
    description: "Known for its organic farming practices and traditional handicrafts. Experience the authentic rural lifestyle and learn about sustainable agriculture.",
    image: "assets/images/villages/martam.jpg",
    altitude: "1,450m",
    category: "Agriculture & Crafts"
  },
  {
    name: "Namchi",
    region: "South Sikkim",
    description: "Known for its religious sites and flower festivals. Home to the world's largest statue of Guru Padmasambhava.",
    image: "assets/images/villages/namchi.jpg",
    altitude: "1,675m",
    category: "Religious & Cultural"
  },
  {
    name: "Pelling",
    region:"West Sikkim",
    description: "Offers the best views of Kanchenjunga. Famous for Pemayangtse Monastery and ancient ruins of Rabdentse Palace.",
    image: "assets/images/villages/pelling.jpg",
    altitude: "2,150m",
    category: "Heritage & Scenic"
  },
  {
    name: "Rinchenpong",
    region: "West Sikkim",
    description: "Famous for its ancient monastery and stunning views of Kanchenjunga. Known for organic farming and traditional handicrafts.",
    image: "assets/images/villages/rinchenpong.jpg",
    altitude: "1,700m",
    category: "Culture & Agriculture"
  },
  {
    name: "Yuksom",
    region: "West Sikkim",
    description: "The first capital of Sikkim, rich in history and culture. Starting point for many popular treks in the Kanchenjunga region.",
    image: "assets/images/villages/yuksom.jpg",
    altitude: "1,780m",
    category: "Heritage & Trekking"
  }
];

constructor() { }
 getVillages():any[]{
  return this.Villages;
 }
}
