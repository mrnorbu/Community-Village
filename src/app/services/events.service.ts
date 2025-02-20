import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private Events:any[]= [
    {
      name: "Sikkim International Cherry Blossom Festival",
      description: "Annual festival celebrating the blooming of cherry blossoms with cultural performances, local food, and art exhibitions.",
      date: "2025-03-01",
      duration: "3 days",
      location: "East Sikkim",
      venue: "Gangtok",
      category: "Cultural Festival",
      price: "Free Entry",
      highlights: [
        "Cherry Blossom Photography",
        "Cultural Performances",
        "Local Food Stalls",
        "Art Exhibition"
      ],
      organizer: "Tourism Department of Sikkim"
    },
    {
      name: "Namchi Mahotsav",
      description: "Traditional festival showcasing Sikkimese culture through dance, music, and local handicrafts.",
      date: "2024-03-05",
      duration: "4 days",
      location: "South Sikkim",
      venue: "Namchi",
      category: "Cultural Festival",
      price: "Free Entry",
      highlights: [
        "Traditional Dance Shows",
        "Handicraft Exhibition",
        "Folk Music Performances",
        "Local Cuisine"
      ],
      organizer: "Namchi District Administration"
    },
    {
      name: "Sikkim Tea Festival",
      description: "Celebration of Sikkim's tea culture featuring tea tasting, plantation tours, and workshops.",
      date: "2024-03-10",
      duration: "2 days",
      location: "South Sikkim",
      venue: "Temi Tea Garden",
      category: "Cultural Event",
      price: 500,
      highlights: [
        "Tea Tasting Sessions",
        "Plantation Tours",
        "Tea Making Workshops",
        "Local Snacks Pairing"
      ],
      organizer: "Temi Tea Estate"
    },
    {
      name: "Sikkim Mountain Biking Festival",
      description: "Adventure sports event featuring mountain biking competitions and trails exploration.",
      date: "2024-03-15",
      duration: "3 days",
      location: "West Sikkim",
      venue: "Pelling",
      category: "Sports",
      price: 1500,
      highlights: [
        "Mountain Biking Competition",
        "Trail Exploration",
        "Equipment Exhibition",
        "Adventure Workshops"
      ],
      organizer: "Sikkim Adventure Sports Association"
    },
    {
      name: "Sikkim Organic Festival",
      description: "Showcase of Sikkim's organic farming practices, products, and sustainable agriculture.",
      date: "2024-03-18",
      duration: "4 days",
      location: "East Sikkim",
      venue: "MG Marg, Gangtok",
      category: "Agriculture",
      price: "Free Entry",
      highlights: [
        "Organic Product Display",
        "Farming Workshops",
        "Cooking Demonstrations",
        "Seed Exchange"
      ],
      organizer: "Sikkim Organic Mission"
    }
  ];

constructor() { }
 
 getEvent():any[]{
  return this.Events;
 }

}
